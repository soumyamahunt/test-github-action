const path = require('path');
const fs = require('fs');
const semver = require('semver')
const core = require('@actions/core')

exports.preVersionGeneration = (version) => {
  const { GITHUB_WORKSPACE } = process.env;
  core.info(`version: ${version}`);
  const gem_info_file = path.join(GITHUB_WORKSPACE, 'lib/cocoapods-embed-flutter/gem_version.rb');
  const gem_info = `${fs.readFileSync(gem_info_file)}`;
  core.info(`gem_info: ${gem_info}`);
  currentVersion = gem_info.match(/VERSION\s*=\s'(.*)'/)[1];
  core.info(`currentVersion: ${currentVersion}`);
  if (semver.lt(version, currentVersion)) { version = currentVersion; }
  core.info(`version: ${version}`);
  const new_gem_info = gem_info.replace(/VERSION\s*=\s*.*/g, `VERSION = '${version}'.freeze`);
  core.info(`new_gem_info: ${new_gem_info}`);
  fs.writeFileSync(gem_info_file, new_gem_info);
  return version;
}

exports.preTagGeneration = (tag) => { }