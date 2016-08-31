
Package.describe({
    summary: '%summary%',
    version: '%version%',
    name: 'jasonlam604:borderjs',
    git: 'https://github.com/jasonlam604/borderjs',
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.0');
    api.export('Border', 'client');
    api.addFiles('border.js', 'client');
});