/**
 * Created by Tomokatsu on 14/12/24.
 */
module.exports = function(grunt){
    grunt.config.set('mochaTest',{
        test: {
            options: {
                reporter: 'spec',
                captureFile: 'tests/outputs/results.txt', // Optionally capture the reporter output to a file
                quiet: false, // Optionally suppress output to standard out (defaults to false)
                clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
                require: [ function(){ expect = require('chai').expect;},
                           function(){ sinon = require('sinon');}
                ]
            },
            src: ['tests/**/*.spec.js']
        }
    });
    grunt.loadNpmTasks('grunt-mocha-test');
};