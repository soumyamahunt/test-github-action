const path = require('path');
const fs = require('fs');
const semver = require('semver')

exports.preVersionGeneration = (version) => {
  const { GITHUB_WORKSPACE } = process.env;
  const gem_info_file = path.join(GITHUB_WORKSPACE, 'lib/cocoapods-embed-flutter/gem_version.rb');
  const gem_info = fs.readFileSync(gem_info_file);
  currentVersion = gem_info.match(/VERSION\s*=\s'(.*)'/g)[1];
  if (semver.lt(version, currentVersion)) { version = currentVersion }
  const new_gem_info = gem_info.replace(/VERSION\s*=\s*.*/g, `VERSION = '${version}'`);
  fs.writeFileSync(gem_info_file, new_gem_info);
  return version;
}

exports.preTagGeneration = (tag) => { }