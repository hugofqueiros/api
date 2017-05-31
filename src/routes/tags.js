import express from 'express';

import tagsCtrl from '../controllers/tags';

const router = express.Router();

router.route('/')
    .get(tagsCtrl.get);

export default router;
