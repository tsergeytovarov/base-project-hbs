import path from 'path';
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import minify from 'gulp-minify-css';
import {get as bs} from 'browser-sync';

import include from 'postcss-import';
import precss from 'precss';
import variables from 'postcss-css-variables';
import cssnext from 'postcss-cssnext';
import assets from 'postcss-assets';
import mqpacker from 'css-mqpacker';

const options = require(path.resolve('config/kit'));

let files = options.entry.css.map((file) => path.join('app', 'css', file));

let plugins = [
  include(),
  precss(options.precss),
  variables(),
  cssnext(options.cssnext),
  assets({
    loadPaths: options.discover,
    basePath: 'build/'
  }),
  mqpacker({
    sort: true
  })
];

gulp.task('postcss', () => {
  return gulp.src(files, {base: 'app', allowEmpty: true})
    .pipe(postcss(plugins))
    .pipe(minify({keepSpecialComments: 0}))
    .pipe(gulp.dest('build'))
    .pipe(bs('kit').stream({match: '**/*.css'}));
});
