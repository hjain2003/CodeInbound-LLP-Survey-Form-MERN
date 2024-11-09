import express from 'express';
import { completeSurvey } from '../controllers/surveyController.js';

const surveyRouter = express.Router();

surveyRouter.post('/complete',completeSurvey)

export default surveyRouter;