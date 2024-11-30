// frontend/src/App.js
import React from 'react';
import { TeachingStyleQuiz } from './components/quiz/TeachingStyleQuiz';
import styled from 'styled-components';

const AppContainer = styled.div`
  background: #f6f6f6;
  min-height: 100vh;
  padding: 2rem;
`;

function App() {
  return (
    <AppContainer>
      <TeachingStyleQuiz />
    </AppContainer>
  );
}

export default App;