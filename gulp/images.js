import gulp from 'gulp';

let files = 'app/img/**/*.{jpg,png,webp,svg,gif,ico}';

gulp.task('images', () => {
  return gulp.src(files, {base: 'app'})
    .pipe(gulp.dest('build'));
});
