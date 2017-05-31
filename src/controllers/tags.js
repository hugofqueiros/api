import Random from 'lodash/random';

function get(req, res) {
    const result = {
        tags: [
            {
                name: 'text type',
                type: 'text',
                value: 'Awesome',
                min: 2,
                max: 10,
                x: 100,
                y: 100
            }, {
                name: 'link to fyusion',
                type: 'link',
                value: 'www.fyusion.com',
                min: 5,
                max: 11,
                x: 100,
                y: 100
            }, {
                name: 'what an image',
                type: 'image',
                value: 'https://vignette2.wikia.nocookie.net/peel/images/e/ee/Drum-and-bass.jpg/revision/latest?cb=20150327112506',
                min: 8,
                max: 15,
                x: 100,
                y: 100
            }, {
                name: 'dance',
                type: 'video',
                value: 'https://youtu.be/HlnInMrUKf8',
                min: 8,
                max: 15,
                x: 100,
                y: 100
            }, {
                name: 'another fyuse',
                type: 'fyuse',
                value: 'znccc6v2v2',
                min: 8,
                max: 15,
                x: 100,
                y: 100
            }, {
                name: 'another fyuse',
                type: 'fyuse',
                value: 'znccc6v2v2',
                min: 8,
                max: 15,
                x: 100,
                y: 100
            }
        ]
    };

    return res.json(result);
}

export default {get};
