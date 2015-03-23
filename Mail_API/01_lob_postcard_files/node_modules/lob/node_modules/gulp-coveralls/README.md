[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

# gulp-coveralls

[Gulp](https://github.com/wearefractal/gulp) plugin to submit code coverage to [Coveralls](http://coveralls.io).

## Usage

First, install `gulp-coveralls` as a dev dependency:

```bash
$ npm install --save-dev gulp-coveralls
```

Then, add it to your `gulpfile.js`:

```javascript
var coveralls = require('gulp-coveralls');

gulp.src('test/coverage/**/lcov.info')
  .pipe(coveralls());
```

## License

[MIT License](http://markdalgleish.mit-license.org)

[npm-url]: https://npmjs.org/package/gulp-coveralls
[npm-image]: https://badge.fury.io/js/gulp-coveralls.png

[travis-url]: http://travis-ci.org/markdalgleish/gulp-coveralls
[travis-image]: https://secure.travis-ci.org/markdalgleish/gulp-coveralls.png?branch=master

[coveralls-url]: https://coveralls.io/r/markdalgleish/gulp-coveralls
[coveralls-image]: https://coveralls.io/repos/markdalgleish/gulp-coveralls/badge.png

[depstat-url]: https://david-dm.org/markdalgleish/gulp-coveralls
[depstat-image]: https://david-dm.org/markdalgleish/gulp-coveralls.png?theme=shields.io
