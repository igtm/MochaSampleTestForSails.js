# MochaTestSample for Sails.js


## Procedures I did to build this
- creating this project： `sails new MochaSampleForSails`
- install the three test tools：　`npm install grunt-mocha-test chai sinon --save-dev`
- creating some test files：　under the test directory
- creating two config files：　tasks/config/mochaTest.js, tasks/register/test.js,

and then, do `grunt test` to execute the test.


### Tips

- if you want Grunt to watch code changes, take the following steps.

    1. In `tasks/config/watch.js`, add `test: { files: ['FilePath'], tasks: ['test'] }`.
    2. In `tasks/register/test.js`,and add `'watch:test'`.

- if you don't wanna wait for lifting sails server, use [wolfpack](https://github.com/fdvj/wolfpack) instead of bootstrap.spec.js



### References
- [grunt-mocha-test](https://github.com/pghalliday/grunt-mocha-test)
- [chai](https://github.com/chaijs/chai)
- [sinon](https://github.com/cjohansen/Sinon.JS)
