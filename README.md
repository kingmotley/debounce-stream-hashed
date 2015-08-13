# gulp-debounce [![NPM version][npm-image]][npm-url][![Dependency Status][depstat-image]][depstat-url]

Debounces a stream per hash.

## Installation

Run `npm install --save gulp-debounce`.

## Usage

```js
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    debounce = require('gulp-debounce');


gulp.task('stream', function () {
    return gulp.src('css/**/*.css')
        .pipe(watch('css/**/*.css'))
        .pipe(debounce())
        .pipe(gulp.dest('build'));
});
```

## API

### gulp-debounce([options][,callback])

Debounces the stream using a hash function.  Useful if one or more files commonly have multiple file events in rapid succession before becoming idle.


#### Callback `function(object)`

This function is called when stream objects are emitted.

#### Options

##### options.hash
Type: `Function`
Default: `function(vinyl){vinyl.path;}`

Pass in the function that generates the hash determine how to group the incoming events.

##### options.timeout
Type: `Number`  
Default: `1000`

The number of milliseconds to debounce.

##### options.immediate
Type: `Boolean`  
Default: `false`

This option when set will issue a callback on the first event.

## License

MIT (c) 2015 Robert McKee (robertjunk@mckee.org)

[npm-url]: https://npmjs.org/package/gulp-debounce
[npm-image]: http://img.shields.io/npm/v/gulp-debounce.svg?style=flat

[depstat-url]: https://david-dm.org/kingmotley/gulp-debounce
[depstat-image]: http://img.shields.io/david/kingmotley/gulp-debounce.svg?style=flat