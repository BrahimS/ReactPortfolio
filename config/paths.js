var path = require('path');
var fs = require('fs');

var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

var nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .map(resolveApp);

// config after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules'),
  nodePaths: nodePaths
};

// config before publish: we're in ./packages/react-scripts/config/
if (__dirname.indexOf(path.join('packages', 'react-scripts', 'config')) !== -1) {
  module.exports = {
    appBuild: resolveOwn('../../../build'),
    appPublic: resolveOwn('../template/public'),
    appHtml: resolveOwn('../template/public/index.html'),
    appIndexJs: resolveOwn('../template/src/index.js'),
    appPackageJson: resolveOwn('../package.json'),
    appSrc: resolveOwn('../template/src'),
    testsSetup: resolveOwn('../template/src/setupTests.js'),
    appNodeModules: resolveOwn('../node_modules'),
    ownNodeModules: resolveOwn('../node_modules'),
    nodePaths: nodePaths
  };
}