const path = require('path');
const fs = require('fs');
const semver = require('semver')

exports.preVersionGeneration = (version) => {
  const { GITHUB_WORKSPACE } = process.env;
  console.log(`version: ${version}`);
  const gem_info_file = path.join(GITHUB_WORKSPACE, 'lib/cocoapods-embed-flutter/gem_version.rb');
  const gem_info = fs.readFileSync(gem_info_file);
  console.log(`gem_info: ${gem_info}`);
  currentVersion = gem_info.match(/VERSION\s*=\s'(.*)'/g)[1];
  console.log(`currentVersion: ${currentVersion}`);
  if (semver.lt(version, currentVersion)) { version = currentVersion; }
  console.log(`version: ${version}`);
  const new_gem_info = gem_info.replace(/VERSION\s*=\s*.*/g, `VERSION = '${version}'`);
  console.log(`new_gem_info: ${new_gem_info}`);
  fs.writeFileSync(gem_info_file, new_gem_info);
  return version;
}

exports.preTagGeneration = (tag) => { }