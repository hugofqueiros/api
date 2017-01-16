import express from 'express';
import reverse from 'express-reverse';

const router = express.Router();

router.use(function(req, res, next) {
    console.log('something is happening');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! Welcome to our api!'});
});

router.get('/wo', function(req, res) {
    res.json({message: 'noooooooo'});
});

export default router;
