import express from 'express';
import reverse from 'express-reverse';
import userRouter from './user';
import metricsRouter from './metrics';
import mediumRouter from './medium';
import tagsRouter from './tags';

const router = express.Router();

router.use(function(req, res, next) {
    console.log('something is happening');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! Welcome to our api!'});
});

router.use('/users', userRouter);
router.use('/metrics', metricsRouter);
router.use('/medium', mediumRouter);
router.use('/tags', tagsRouter);

router.get('/wo', function(req, res) {
    res.json({message: 'noooooooo'});
});

export default router;
