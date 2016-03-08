import gulp from 'gulp';

require('require-dir')('./gulp');

gulp.task('start', gulp.series(
  'copy',
  'images',
  'postcss',
  'handlebars',
  'serve'
));
