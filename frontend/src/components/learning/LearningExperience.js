// frontend/src/components/learning/LearningExperience.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;
  background: ${props => props.theme.colors.background};
`;

const ContentSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const LearningExperience = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [progress, setProgress] = useState({});

  return (
    <ExperienceContainer>
      <ContentSection>
        <ModuleProgress progress={progress} />
        <AdaptiveLearningPath />
        <CollaborativeFeatures />
      </ContentSection>
    </ExperienceContainer>
  );
};