# gulp-debounce-stream [![NPM version][npm-image]][npm-url][![Dependency Status][depstat-image]][depstat-url]

Debounces a stream per hash.

## Installation

Run `npm install --save gulp-debounce-stream`.

## Usage

```js
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    debounceStream = require('gulp-debounce-stream');

gulp.task('stream2', function () {
    return gulp.src('css/**/*.css')
        .pipe(watch('css/**/*.css'))
        .pipe(debounceStream())
        .pipe(gulp.dest('build'));
});
```

## API

### gulp-debounce-stream([options][,callback])

Debounces the stream using a hash function.  Useful if one or more files commonly have multiple file events in rapid succession before becoming idle.


#### Callback `function(object)`

This function is called when stream objects are emitted.

#### Options

#### options.fnHash
Type: `Function`  
Default: `function(vinyl){ return vinyl.path; }`

Pass in the function that generates a hash string that will determine how to group the incoming events.

#### options.timeout
Type: `Number`  
Default: `1000`

The number of milliseconds to debounce.

#### options.first
Type: `Boolean`  
Default: `false`

This option when set will issue a callback on the first event.

#### options.last
Type: `Boolean`  
Default: `true`

This option when set will issue a callback on the last event.

#### options.verbose
Type: `Boolean`  
Default: `false`

This option will make the output more verbose.

#### options.name
Type: `String`  
Default: `null`

This option will prefix the output with this string so it is more easily identifable.

## License

MIT (c) 2015 Robert McKee (robertjunk@mckee.org)

[npm-url]: https://npmjs.org/package/gulp-debounce-stream
[npm-image]: http://img.shields.io/npm/v/gulp-debounce-stream.svg?style=flat

[depstat-url]: https://david-dm.org/kingmotley/gulp-debounce-stream
[depstat-image]: http://img.shields.io/david/kingmotley/gulp-debounce-stream.svg?style=flat