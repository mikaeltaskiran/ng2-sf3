/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // application folder
      app: 'app',
      
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'ng2-slim-loading-bar': 'npm:ng2-slim-loading-bar/bundles/index.umd.js',
      // 'ng2-toastr': 'npm:ng2-toastr/bundles/ng2-toastr.min.js',
      'ng2-translate': 'npm:ng2-translate/bundles/ng2-translate.umd.js',
      'rxjs': 'npm:rxjs',
      'typescript': 'npm:typescript@2.0.2/lib/typescript.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      'ng2-translate': {
        defaultExtension: 'js'
      },
      'ng2-slim-loading-bar': { 
        defaultExtension: 'js' 
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
