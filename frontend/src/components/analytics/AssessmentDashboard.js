// frontend/src/components/analytics/AssessmentDashboard.js
import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const AssessmentDashboard = () => {
  return (
    <DashboardContainer>
      <MetricsGrid>
        <CompetencyMap />
        <ProgressTracker />
        <LearningOutcomes />
      </MetricsGrid>
      <RecommendationEngine />
    </DashboardContainer>
  );
};