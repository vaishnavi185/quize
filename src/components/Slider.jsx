import React, { useState } from 'react';
import './Slider.css'; // Import the CSS file for styling

const Slider = ({ totalQuestions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null); // Track current answer

  const handleBulletClick = (questionNumber) => {
    setCurrentQuestion(questionNumber - 1);
    setCurrentAnswer(null); // Reset current answer when changing question
  };

  const handleAnswerSelect = (answerId, correctAnswer) => {
    setCurrentAnswer(answerId);
    // Move to the next question if available, or end the quiz
    if (currentQuestion < totalQuestions - 1) {
      if (answerId === correctAnswer) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        alert("Incorrect answer!");
      }
    } else {
      console.log("Quiz ended");
      // Handle quiz ending (e.g., show result)
    }
  };

  const quizDB = [
    {
      question: "Q1: What is the capital of France?",
      options: [
        { id: "ans1", text: 'Paris', correct: true },
        { id: "ans2", text: "London", correct: false },
        { id: "ans3", text: "Brazil", correct: false },
        { id: "ans4", text: "Delhi", correct: false }
      ],
      correctAnswer: "ans1"
    },
    {
      question: "Q2: What is the largest planet in our solar system?",
      options: [
        { id: "ans1", text: 'Neptune', correct: false },
        { id: "ans2", text: "Jupiter", correct: true },
        { id: "ans3", text: "Pluto", correct: false },
        { id: "ans4", text: "Earth", correct: false }
      ],
      correctAnswer: "ans2"
    },
    {
        question: "Q3: Which country won the FIFA World Cup in 2018?",
        a: 'Paris',
        b: "London",
        c: "Brazil",
        d: "France",
        ans: "ans4"
    },
    {
        question: "Q4: What is the tallest mountain in the world?",
        a: 'K2',
        b: "Mount Everest",
        c: "Himalaya",
        d: "Peak",
        ans: "ans1"
    }
    // Add more questions as needed
  ];

  return (
    <>
      <div className="ng-modal-number-container">
        <div className="questionNumbers">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`questionNumberIcon ${currentQuestion === index ? 'active' : ''}`}
              onClick={() => handleBulletClick(index + 1)}
            >
              {index + 1}
            </span>
          ))}
        </div>
        <div className="line"></div>
      </div>
      <br></br>
      <div className='quesBox'>
        <h2 className="question">{quizDB[currentQuestion].question}</h2>
      </div>
      <div className='ansBox'>
        <ul>
          {quizDB[currentQuestion].options.map(option => (
            <li key={option.id} className='a'>
              <label htmlFor={option.id} id={option.id} onClick={() => handleAnswerSelect(option.id, quizDB[currentQuestion].correctAnswer)}>
                {option.text}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Slider;
