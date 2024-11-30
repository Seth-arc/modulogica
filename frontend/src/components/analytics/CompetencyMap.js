// frontend/src/components/analytics/CompetencyMap.js
import React from 'react';
import styled from 'styled-components';

const CompetencyContainer = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  margin-top: 2rem;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const CompetencyMap = () => {
  const competencies = [
    { name: 'Critical Thinking', level: 85 },
    { name: 'Problem Solving', level: 75 },
    { name: 'Communication', level: 90 },
    { name: 'Digital Literacy', level: 80 }
  ];

  return (
    <CompetencyContainer>
      <h3>Competency Map</h3>
      <SkillGrid>
        {competencies.map(comp => (
          <SkillCard 
            key={comp.name}
            name={comp.name}
            level={comp.level}
          />
        ))}
      </SkillGrid>
    </CompetencyContainer>
  );
};