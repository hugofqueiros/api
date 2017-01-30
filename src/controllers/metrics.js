import Random from 'lodash/random';

const visits = {};

function get(req, res) {
    console.log('query: ', req.query);

    let result = {};

    if (req.query && req.query.metrics) {
        const querySplit = req.query.metrics.split(',');
        console.log('visits: ', querySplit);
        querySplit.forEach(function (value) {
            result[value] = {
                avg: Random(1000, 10000),
                max: 10000,
                min: 1000,
                series: [
                    ["2016-11-01T00:00:00.000Z", Random(20, 100)],
                    ["2016-12-01T00:00:00.000Z", Random(100, 200)],
                    ["2017-01-01T00:00:00.000Z", Random(200, 300)],
                    ["2017-02-01T00:00:00.000Z", Random(300, 500)],
                    ["2017-03-01T00:00:00.000Z", Random(500, 900)],
                    ["2017-04-01T00:00:00.000Z", Random(900, 1200)],
                    ["2017-05-01T00:00:00.000Z", Random(1200, 2300)],
                    ["2017-06-01T00:00:00.000Z", Random(1800, 2300)],
                    ["2017-07-01T00:00:00.000Z", Random(2300, 3500)],
                    ["2017-08-01T00:00:00.000Z", Random(1820, 3500)],
                    ["2017-09-01T00:00:00.000Z", Random(900, 2090)],
                    ["2017-09-01T00:00:00.000Z", Random(100, 3500)]
                ]
            }
        });
    }

    return res.json(result);
}

export default {get};
