'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _random = require('lodash/random');

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var visits = {};

function get(req, res) {
    console.log('query: ', req.query);

    var result = {};

    if (req.query && req.query.metrics) {
        var querySplit = req.query.metrics.split(',');
        console.log('visits: ', querySplit);

        var addResult = {};
        querySplit.forEach(function (value) {
            result[value] = {
                avg: (0, _random2.default)(1000, 10000),
                max: (0, _random2.default)(2300, 3500),
                min: (0, _random2.default)(20, 100),
                sum: (0, _random2.default)(20000, 50000),
                series: [["2016-11-01T00:00:00.000Z", (0, _random2.default)(20, 100)], ["2016-12-01T00:00:00.000Z", (0, _random2.default)(100, 200)], ["2017-01-01T00:00:00.000Z", (0, _random2.default)(200, 300)], ["2017-02-01T00:00:00.000Z", (0, _random2.default)(300, 500)], ["2017-03-01T00:00:00.000Z", (0, _random2.default)(500, 900)], ["2017-04-01T00:00:00.000Z", (0, _random2.default)(900, 1200)], ["2017-05-01T00:00:00.000Z", (0, _random2.default)(1200, 2300)], ["2017-06-01T00:00:00.000Z", (0, _random2.default)(1800, 2300)], ["2017-07-01T00:00:00.000Z", (0, _random2.default)(2300, 3500)], ["2017-08-01T00:00:00.000Z", (0, _random2.default)(1820, 3500)], ["2017-09-01T00:00:00.000Z", (0, _random2.default)(900, 2090)], ["2017-10-01T00:00:00.000Z", (0, _random2.default)(100, 3500)]]
            };

            if (value === 'visits') {
                addResult[value] = {
                    newVisits: {
                        avg: (0, _random2.default)(1000, 10000),
                        max: (0, _random2.default)(2300, 3500),
                        min: (0, _random2.default)(20, 100),
                        sum: (0, _random2.default)(20000, 50000),
                        series: [["2016-11-01T00:00:00.000Z", (0, _random2.default)(20, 100)], ["2016-12-01T00:00:00.000Z", (0, _random2.default)(100, 200)], ["2017-01-01T00:00:00.000Z", (0, _random2.default)(200, 300)], ["2017-02-01T00:00:00.000Z", (0, _random2.default)(300, 500)], ["2017-03-01T00:00:00.000Z", (0, _random2.default)(500, 900)], ["2017-04-01T00:00:00.000Z", (0, _random2.default)(900, 1200)], ["2017-05-01T00:00:00.000Z", (0, _random2.default)(1200, 2300)], ["2017-06-01T00:00:00.000Z", (0, _random2.default)(1800, 2300)], ["2017-07-01T00:00:00.000Z", (0, _random2.default)(2300, 3500)], ["2017-08-01T00:00:00.000Z", (0, _random2.default)(1820, 3500)], ["2017-09-01T00:00:00.000Z", (0, _random2.default)(900, 2090)], ["2017-10-01T00:00:00.000Z", (0, _random2.default)(100, 3500)]]
                    },
                    returningVisits: {
                        avg: (0, _random2.default)(1000, 10000),
                        max: (0, _random2.default)(2300, 3500),
                        min: (0, _random2.default)(20, 100),
                        sum: (0, _random2.default)(20000, 50000),
                        series: [["2016-11-01T00:00:00.000Z", (0, _random2.default)(20, 100)], ["2016-12-01T00:00:00.000Z", (0, _random2.default)(100, 200)], ["2017-01-01T00:00:00.000Z", (0, _random2.default)(200, 300)], ["2017-02-01T00:00:00.000Z", (0, _random2.default)(300, 500)], ["2017-03-01T00:00:00.000Z", (0, _random2.default)(500, 900)], ["2017-04-01T00:00:00.000Z", (0, _random2.default)(900, 1200)], ["2017-05-01T00:00:00.000Z", (0, _random2.default)(1200, 2300)], ["2017-06-01T00:00:00.000Z", (0, _random2.default)(1800, 2300)], ["2017-07-01T00:00:00.000Z", (0, _random2.default)(2300, 3500)], ["2017-08-01T00:00:00.000Z", (0, _random2.default)(1820, 3500)], ["2017-09-01T00:00:00.000Z", (0, _random2.default)(900, 2090)], ["2017-10-01T00:00:00.000Z", (0, _random2.default)(100, 3500)]]
                    }
                };

                Object.assign(result[value], addResult[value]);
            }
        });
    }

    return res.json(result);
}

exports.default = { get: get };
//# sourceMappingURL=metrics.js.map
