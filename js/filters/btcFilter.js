'use strict';

Application.Filters.filter('btc', function() {
    return function(input) {
        if (input === undefined) {
            return 0;
        } else {
            return parseInt(input, 10).toBitcoin();
        }
    };
});

Application.Filters.filter('hidePoints', function() {
    return function(input) {
        console.log(input);
        if (input.pointsAwarded < 2) {
            return false;
        } else {
            return input;
        }
    };
});
Application.Filters.filter('btcB', function() {
    return function(input) {
        if (input === undefined) {
            return 0;
        } else {
            var parsedInput = parseInt(input, 10);
            if (parsedInput) {
                return parsedInput / 100000000;
            } else {
                return 0;
            }
        }
    };
});
Application.Filters.filter('noFractionCurrency', ['$filter', '$locale',
    function(filter, locale) {
        var currencyFilter = filter('currency');
        var formats = locale.NUMBER_FORMATS;
        return function(amount) {
            if (!amount) {
                return "...";
            }
            var value = currencyFilter(amount, "");
            var sep = value.indexOf(formats.DECIMAL_SEP);
            if (amount >= 0) {
                return value.substring(0, sep);
            }
            return "...";
        };
    }
]);
