// frontend/src/components/analytics/CompetencyTracker.js
import React from 'react';
import styled from 'styled-components';

const CompetencyContainer = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
`;

export const CompetencyTracker = () => {
  const competencies = [
    { name: 'Critical Thinking', level: 85 },
    { name: 'Problem Solving', level: 75 },
    { name: 'Communication', level: 90 },
    { name: 'Digital Literacy', level: 80 }
  ];

  return (
    <CompetencyContainer>
      <h3>Skills Progress</h3>
      {competencies.map(comp => (
        <SkillProgressBar 
          key={comp.name}
          skill={comp.name}
          progress={comp.level}
        />
      ))}
    </CompetencyContainer>
  );
};