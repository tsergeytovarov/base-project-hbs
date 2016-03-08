import fs from 'fs-extra';
import merge from 'merge';
import gulp from 'gulp';
import rename from 'gulp-rename';
import engine from 'gulp-compile-handlebars';
import {get as bs} from 'browser-sync';

let partials = ['./app/templates/partials'];
let components = './app/components/';

fs.readdirSync(components).forEach((file) => {
  partials.push(`${components}${file}`);
});

const configure = () => {
  fs.ensureDirSync('./app/templates/partials');
  fs.ensureDirSync('./app/templates/helpers');

  return {
    ignorePartials: true,
    batch: partials,
    helpers: merge(
      require('hbs-helpers'),
      require('require-dir')('./../app/templates/helpers')
    )
  };
};

gulp.task('handlebars', () => {
  return gulp.src('app/templates/*.hbs')
    .pipe(engine({}, configure()))
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest('build'))
    .pipe(bs('kit').stream({match: '**/*.html'}));
});
