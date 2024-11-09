import Survey from "../models/Survey.js";


export const completeSurvey = async (req, res) => {
    const { answers } = req.body;

    if (!answers || !Array.isArray(answers)) {
        return res.status(400).json({ error: 'Answers array is required' });
    }

    try {
        const surveySession = new Survey({
            answers
        });

        await surveySession.save();
        res.status(200).json({ message: 'Survey completed. Thank you for your time!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save survey session' });
    }
};
