import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { getUsersForSideBar, getMessages, sendMessage } from '../controllers/message.controller.js'
const router = express.Router()


router.get('/users',authMiddleware,getUsersForSideBar)
router.get('/:id',authMiddleware,getMessages)
router.post('/send/:id',authMiddleware,sendMessage)


export default router