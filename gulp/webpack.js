import path from 'path';
import gulp from 'gulp';
import webpack from 'webpack-stream';
import {get as bs} from 'browser-sync';

gulp.task('webpack', () => {
  let options = require(path.resolve('config/webpack.config.js'));

  return gulp.src('app/js/app.js', {allowEmpty: true})
    .pipe(webpack(options))
    .pipe(gulp.dest('build/js'))
    .pipe(bs('kit').stream({match: '**/*.js'}));
});
