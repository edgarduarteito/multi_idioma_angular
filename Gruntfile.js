/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
    nggettext_extract: {
        pot: {
          files: {
            'po/template.pot': ['**/*.html']
          }
        },
      }, 
      nggettext_compile: {
        all: {
          files: {
            'translations.js': ['po/*.po']
          }
        },
      },    
    });
    grunt.loadNpmTasks('grunt-angular-gettext');
};



