'use strict'
const config = require('conventional-changelog-conventionalcommits');

module.exports = config({
    "types": [
        { type: 'feat', section: '🚀 Features' },
        { type: 'fix', section: '🐛 Fixes' },
        { type: 'perf', section: '🐎 Performance Improvements' },
        { type: 'revert', section: '⏪ Reverts' },
        { type: 'build', hidden: true, section: '🛠 Build System' },
        { type: 'ci', hidden: true, section: '💡 Continuous Integration' },
        { type: 'refactor', hidden: true, section: '🔥 Refactorings' },
        { type: 'doc', hidden: true, section: '📚 Documentation' },
        { type: 'docs', hidden: true, section: '📚 Documentation' },
        { type: 'style', hidden: true, section: '💄 Styles' },
        { type: 'test', hidden: true, section: '✅ Tests' },
        { type: 'wip', hidden: true },
        { type: 'chore', hidden: true },
    ]
})