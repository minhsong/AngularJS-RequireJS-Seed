module.exports = function(grunt){

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        karma: {
            unit: {
                configFile: 'config/karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.registerTask('test', [
        'karma'
    ]);

};