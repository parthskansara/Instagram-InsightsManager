import FacebookLoginController from '../controllers/FacebookLoginController.js'
import express from 'express'

const router = express.Router();

router.get('/', FacebookLoginController.getUrl);

export default router;