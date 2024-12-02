import React, { useState } from 'react';
import './Survey.css';

const questions = [
  { id: 1, text: "How satisfied are you with our products?", type: "rating", scale: 5 },
  { id: 2, text: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
  { id: 3, text: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
  { id: 4, text: "On a scale of 1-10 how would you recommend us to your friends and family?", type: "rating", scale: 10 },
  { id: 5, text: "What could we do to improve our service?", type: "text" }
];

const Survey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (e) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: e.target.value
    });
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const previousQuestion = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    fetch('http://beanfirst.ap-south-1.elasticbeanstalk.com/survey/complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers: Object.entries(answers).map(([questionId, answer]) => ({ questionId: parseInt(questionId), answer })) })
    })
    .then(() => setIsSubmitted(true))
    .catch(err => console.error(err));
  };

  if (isSubmitted) {
    return <div className="thank-you">Thank you for completing the survey!</div>;
  }

  const currentQ = questions[currentQuestion];
  return (
    <>
    <h2>Code Inbound LLP Survey Form</h2>
    <hr/>
    <div className="survey-container">
      <h2>Customer Satisfaction Survey</h2>
      <div className="question">
        <p><b>Question {currentQuestion + 1}/{questions.length}</b><br/> {currentQ.text}</p>
        {currentQ.type === "rating" ? (
          <div className="rating-options">
            {[...Array(currentQ.scale)].map((_, i) => (
              <label key={i} className="radio-label">
                <input
                  type="radio"
                  name={`question-${currentQ.id}`}
                  value={i + 1}
                  checked={answers[currentQ.id] == i + 1}
                  onChange={handleAnswerChange}
                />
                {i + 1}
              </label>
            ))}
          </div>
        ) : (
          <textarea
            value={answers[currentQ.id] || ""}
            onChange={handleAnswerChange}
            placeholder="Your suggestions"
          />
        )}
      </div>

      <div className="navigation-buttons">
        <button onClick={previousQuestion} disabled={currentQuestion === 0}>Previous</button>
        <button onClick={nextQuestion} disabled={currentQuestion === questions.length - 1}>Next</button>
      </div>

      {currentQuestion === questions.length - 1 && (
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      )}
    </div>
    </>
  );
};

export default Survey;
