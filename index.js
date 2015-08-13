var through = require('through'),
    duplexer = require('duplexer'),
    util = require('gulp-util');

module.exports = debounceStream;

function debounceStream(opts,cb) {
    var context=this,
        queue = {},
        input = through(write, flush),
        output = through();

    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }

    opts = opts || {};
    cb = cb || function () { };
    opts.fnHash = opts.fnHash || function (vinyl) { return vinyl.path; };
    opts.timeout = opts.timeout || 1000;
    opts.first = opts.first || false;
    opts.last = opts.last || true;
    opts.verbose = opts.verbose || false;

    return duplexer(input, output);

    function write(d) {
        var data = d;
        var hash = opts.fnHash(data);
        var item = queue[hash];

        function later() {
            delete queue[hash];
            log('forgotten', hash);
            if (opts.last) {
                release(data);
            }
        }
        function release(data) {
            log('emitted', hash);
            output.queue(data);
            cb(data);
        }
        queue[hash] = { timer: setTimeout(later, opts.timeout), data: data };
        if (item) {
            log('seen', hash);
            clearTimeout(item.timer);
        } else {
            if (opts.first) {
                release(data);
            } else {
                log('queued', hash);
            }
        }
    }
    function flush() {
        foreach(i in queue)
        {
            output.queue(i.data);
        }
        output.queue(null);
        cb();
    }

    function log(event, file) {
        if (opts.verbose) {
            var msg = [util.colors.magenta(file), 'was', event];

            if (opts.name) {
                msg.unshift(util.colors.cyan(opts.name) + ':');
            }

            util.log.apply(util, msg);
        }
    }

}