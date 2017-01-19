import express from 'express';
import validate from 'express-validation';
import userCtrl from '../controllers/user';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    .get(userCtrl.list);

router.param('userId', userCtrl.load);

export default router;
