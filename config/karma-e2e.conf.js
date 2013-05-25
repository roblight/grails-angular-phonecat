basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
];

autoWatch = false;

browsers = ['Chrome','Safari'];

singleRun = true;

proxies = {
  '/': 'http://localhost:8080/angular-phonecat/'
};

urlRoot = '/__karma/';

junitReporter = {
  outputFile: 'target/test_out/e2e.xml',
  suite: 'e2e'
};