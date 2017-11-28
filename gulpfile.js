var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    streamqueue = require('streamqueue');


// uglifies

// gulp.task('scripts', function(){
//   console.log("minify js files");
//   gulp.src('js/*.js')
//   .pipe(uglify())
//   .pipe(gulp.dest('dist/js'));
// });


// gulp.task('concat-js', function() {
//   console.log("combining all javascripts into all.js");
//   return streamqueue({ objectMode: true },
//       gulp.src('dist/js/collapse.js'),
//       gulp.src('dist/js/jquery.easing.js'),
//       gulp.src('dist/js/jquery.mousewheel.js'),
//       gulp.src('dist/js/jquery.flexslider.js'),
//       gulp.src('dist/js/main.js')
//   )
//       .pipe(concat('all.js'))
//       .pipe(gulp.dest('dist/js/'))

// });

gulp.task('concat-main', [], function() {
  return streamqueue({ objectMode: true },
    gulp.src('css/theme.css'),
    gulp.src('css/theme-elements.css'),
    gulp.src('css/theme-blog.css'),    
    gulp.src('css/theme-shop.css'),      
    gulp.src('css/custom.css')        
  )    
    .pipe(concat('main.css'))
    .pipe(gulp.dest('css'))
});

gulp.task('minify-maincss', () => {
  return gulp.src('css/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});

gulp.task('concat-js', function() {
  console.log("combining all javascripts into all.js");
  return streamqueue({ objectMode: true },
      gulp.src('vendor/jquery/jquery.min.js'),
      gulp.src('vendor/jquery.appear/jquery.appear.min.js'),
      gulp.src('vendor/jquery.easing/jquery.easing.min.js'),
      gulp.src('vendor/jquery-cookie/jquery-cookie.min.js'),
      gulp.src('vendor/popper/umd/popper.min.js'),
      gulp.src('vendor/bootstrap/js/bootstrap.min.js'),
      gulp.src('vendor/common/common.min.js'),
      gulp.src('vendor/jquery.validation/jquery.validation.min.js'),
      gulp.src('vendor/jquery.easy-pie-chart/jquery.easy-pie-chart.min.js'),
      gulp.src('vendor/jquery.gmap/jquery.gmap.min.js'),
      gulp.src('vendor/jquery.lazyload/jquery.lazyload.min.js'),
      gulp.src('vendor/isotope/jquery.isotope.min.js'),
      gulp.src('vendor/owl.carousel/owl.carousel.min.js'),
      gulp.src('vendor/magnific-popup/jquery.magnific-popup.min.js'),
      gulp.src('vendor/vide/vide.min.js')
  )
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('js/vendor'))

});

// gulp.task('watch', function() {
//   gulp.watch('css/**/*.css', ['minify-maincss']);
//   gulp.watch('css/vendor/**/*.css', ['minify-vendorcss']);
//   gulp.watch('css/**/*.css', ['concat-main']);
//   gulp.watch('css/vendor/**/*.css', ['concat-vendor']);
// });

gulp.task('default', ['concat-main','concat-vendor','minify-maincss','minify-vendorcss','watch']);
