# debounce-stream-hashed [![NPM version][npm-image]][npm-url][![Dependency Status][depstat-image]][depstat-url]

Debounces a stream per hash.

## Installation

Run `npm install --save gulp-debounced-watch`.

## Usage

```js
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    debounce = require('debounce-stream-hashed');


gulp.task('stream', function () {
    return gulp.src('css/**/*.css')
        .pipe(watch('css/**/*.css'))
        .pipe(debounce())
        .pipe(gulp.dest('build'));
});
```

## API

### debounce-stream-hashed([fnHash][,options][,callback])

Creates a watcher that will spy on files that are matched by `glob` which can be a
glob string or array of glob strings.

Returns a pass through stream that will emit vinyl files
(with additional `event` property) that corresponds to event on file-system.

#### fnHash
Type: `Function`
Default: `function(vinyl){vinyl.path;}`

Pass in the function that generates the hash determine how to group the incoming events.


#### Callback `function(object)`

This function is called when stream objects are released.

#### Options

##### options.timeout
Type: `Number`  
Default: 1000

The number of milliseconds to debounce.

##### options.immediate
Type: `Boolean`  
Default: `false`

This option when set will issue a callback on the first event.

## License

MIT (c) 2015 Robert McKee (robertjunk@mckee.org)

[npm-url]: https://npmjs.org/package/debounce-stream-hashed
[npm-image]: http://img.shields.io/npm/v/debounce-stream-hashed.svg?style=flat

[depstat-url]: https://david-dm.org/kingmotley/debounce-stream-hashed
[depstat-image]: http://img.shields.io/david/kingmotley/debounce-stream-hashed.svg?style=flat