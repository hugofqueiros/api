import express from 'express';
import mediumCtrl from '../controllers/medium';

const router = express.Router();

router.route('/')
    .get(mediumCtrl.getPublications);

export default router;
