(function () {
    "use strict";

    Application.Services.factory('socketDomain', function() {
        return {
            hostname:'localhost',
            port:1352
        };
    });
    Application.Services.factory('apiDomain', function() {
        //return '54.246.243.0';
        return {
            hostname:'localhost',
            port:1351
        };
    });

}());
