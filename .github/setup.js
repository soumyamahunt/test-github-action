module.exports = function(handlebars) {
    handlebars.registerHelper(
        'ne',
        function(a, b) {
            return (a !== b);
        }
    );
}
