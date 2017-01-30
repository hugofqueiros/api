import express from 'express';

import metricsCtrl from '../controllers/metrics';

const router = express.Router();

router.route('/')
    .get(metricsCtrl.get);

export default router;
