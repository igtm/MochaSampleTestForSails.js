# MochaTestSample for Sails.js


## Procedures I did to build this
- creating this project： `sails new MochaSampleForSails`
- install the three test tools：　`npm install grunt-mocha-test chai sinon --save-dev`
- creating some test files：　under the tests directory
- creating two config files：　tasks/config/mochaTest.js, tasks/register/test.js,
and then, `grunt test` to execute the test.

++++++

# For Japanese
## 行なった手順
- プロジェクト作成： `sails new MochaSampleForSails`
- テストツール導入：　`npm install grunt-mocha-test chai sinon --save-dev`
- testファイル作成：　tests以下
- grunt環境設定ファイル作成：　tasks/config/mochaTest.js, tasks/register/test.js,
`grunt test` でテスト実行。

+++++

### reference
- https://github.com/pghalliday/grunt-mocha-test
- http://www.tysoncadenhead.com/blog/unit-testing-sails-js-applications-with-mocha#.VJmTlAgw