'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _parseRss = require('parse-rss');

var _parseRss2 = _interopRequireDefault(_parseRss);

var _rssParser = require('rss-parser');

var _rssParser2 = _interopRequireDefault(_rssParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL_MEDIUM_API = 'https://medium.com/feed/@hugofqueiros';
var URL_MEDIUM_PARSED_API = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40hugofqueiros';

function getPublications(req, res, next) {
    (0, _axios2.default)({
        method: 'get',
        url: '' + URL_MEDIUM_PARSED_API
    }).then(function (result) {
        //let parsed = [];
        //console.log('RESULT: ', result.data);

        //const data = xmlToJson(result.data);
        //console.log('DATA: ', data);

        // parser('https://medium.com/feed/@hugofqueiros', function(err, rss) {
        //     console.log('rss', rss);
        //
        //     if(err) {
        //         next(err);
        //     }
        //
        //     for (let i = rss.length - 1; i >= 0; i--) {
        //         let newStory = {};
        //
        //         newStory.title = rss[i].title;
        //         newStory.description = rss[i].description;
        //         newStory.date = rss[i].date;
        //         newStory.link = rss[i].link;
        //         newStory.author = rss[i].author;
        //         newStory.comments = rss[i].comments;
        //
        //         parsed.push(newStory);
        //     }
        //
        // });

        // rssParser(result.data, function(err, parsed) {
        //
        // });


        res.json(result.data);
    }).catch(function (e) {
        return next(e);
    });
}

exports.default = { getPublications: getPublications };
//# sourceMappingURL=medium.js.map
