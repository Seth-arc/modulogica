// frontend/src/components/quiz/TeachingStyleQuiz.js
import React, { useState } from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const QuestionContainer = styled.div`
  margin-bottom: 2rem;
`;

const QuestionText = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: 2px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
  background: transparent;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.accent};
    color: white;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${props => props.theme.colors.secondary}33;
  border-radius: 4px;
  margin-bottom: 2rem;
`;

const Progress = styled.div`
  width: ${props => (props.progress * 100)}%;
  height: 100%;
  background: ${props => props.theme.colors.accent};
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const ResultContainer = styled.div`
  text-align: center;
`;

export const TeachingStyleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = [
    {
      question: "How do you typically plan your lessons?",
      options: [
        "I follow a structured curriculum and create detailed lesson plans",
        "I outline key concepts and adjust based on student needs",
        "I prefer spontaneous planning based on classroom dynamics",
        "I focus on project-based or thematic planning"
      ]
    },
    {
      question: "What is your approach to delivering content in the classroom?",
      options: [
        "I use lectures to ensure comprehensive coverage of material",
        "I blend lectures with interactive activities",
        "I prioritize hands-on, experiential learning activities",
        "I facilitate student-led discussions and collaborative work"
      ]
    },
    {
      question: "How do you assess student learning?",
      options: [
        "I rely on traditional exams and quizzes",
        "I use a mix of formative assessments and summative evaluations",
        "I emphasize project-based assessments and practical applications",
        "I encourage self-assessment and peer reviews"
      ]
    },
    {
      question: "How do you see your role as a teacher in the learning process?",
      options: [
        "I am a knowledge expert who delivers content",
        "I am a guide who facilitates learning",
        "I am a coach who supports skill development",
        "I am a mentor who encourages critical thinking and independence"
      ]
    },
    {
      question: "What role do you expect students to take in their own learning?",
      options: [
        "Students should absorb and recall information",
        "Students should engage with content and participate actively",
        "Students should apply concepts in practical scenarios",
        "Students should take ownership of their learning journey"
      ]
    }
  ];

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      determineTeachingStyle(newAnswers);
      setQuizComplete(true);
    }
  };

  const determineTeachingStyle = (answers) => {
    const styles = {
      0: "The Structured Guide",
      1: "The Flexible Facilitator",
      2: "The Experimental Innovator",
      3: "The Student-Centered Mentor"
    };

    const counts = answers.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    const dominantStyle = Object.entries(counts)
      .sort(([,a], [,b]) => b - a)[0][0];

    return styles[dominantStyle];
  };

  if (quizComplete) {
    return (
      <ResultContainer>
        <h2>Your Teaching Style: {determineTeachingStyle(answers)}</h2>
        <p>Based on your responses, we'll customize your module design experience.</p>
      </ResultContainer>
    );
  }

  return (
    <QuizContainer>
      <ProgressBar>
        <Progress progress={(currentQuestion + 1) / questions.length} />
      </ProgressBar>
      
      <QuestionContainer>
        <QuestionText>{questions[currentQuestion].question}</QuestionText>
        {questions[currentQuestion].options.map((option, index) => (
          <OptionButton
            key={index}
            onClick={() => handleAnswer(index)}
          >
            {option}
          </OptionButton>
        ))}
      </QuestionContainer>
    </QuizContainer>
  );
};

export default TeachingStyleQuiz;