module.exports = function(grunt){

  //config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less:{
      build:{
        src: 'css/*.less',
        dest:'css/site.css'
      }
    },
    csslint:{
      check:{
        src:'<%= less.build.dest %>'
      }
    },
    cssmin:{
      minimize:{
        files:{
          'build/site.min.css' : '<%= less.build.dest %>'
        }
      }
    },
    validation:{
      files:{
        src:"**/*.html"
      }
    },
    watch:{
      options:{
        livereload: true //変更があればリロード
      },
      files: ['css/*.less' , 'scripts/*.js' , 'index.html'],
      tasks: [ 'validation' , 'less' , 'csslint' , 'cssmin']
    },
    connect : {
      server:{
        options:{
          port:8080,
          hostname:'localhost'
        }
      }
    }
  });

  //plugin
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-w3c-html-validation');

  //task
  grunt.registerTask('default' , ['connect' , 'watch' ]);
}
