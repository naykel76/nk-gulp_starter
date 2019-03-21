const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css'); // minify
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

/* --------------------------------------------------------------------------
| LOCATION VARIABLES
| ------------------------------------------------------------------------ */

const ROOT = './';
const BASE = 'http://localhost/nk-gulp_starter';

// Source files
const srcCSS = ROOT + 'src/css/';
const srcJS = ROOT + 'src/js/';

// Watch Files
const htmlWatchFiles = ROOT + '**/*.html';
const sassWatchFiles = ROOT + '**/*.scss';



/* SASS Tasks
-------------------------------------------------------------------------- */

gulp.task('compile-styles', function () {
  return gulp.src(['src/scss/*.scss'])
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(cleanCSS()) // minify css
    .pipe(gulp.dest(srcCSS));
});


/* Watch Tasks
-------------------------------------------------------------------------- */
gulp.task('watch', function () {
  browserSync.init({
    open: 'external',
    proxy: BASE
  });

  gulp.watch(sassWatchFiles, gulp.series(['compile-styles']));
  gulp.watch([sassWatchFiles, htmlWatchFiles]).on('change', browserSync.reload)
});
