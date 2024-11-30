// frontend/src/components/analytics/LearningAnalytics.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const AnalyticsContainer = styled.div`
  margin-top: 2rem;
`;

const ChartContainer = styled.div`
  height: 400px;
  margin: 2rem 0;
`;

export const LearningAnalytics = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: 'Student Progress',
            data: [20, 45, 75, 90],
            borderColor: '#27ae60',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              max: 100
            }
          }
        }
      });
    }
  }, []);

  return (
    <AnalyticsContainer>
      <canvas ref={chartRef} />
    </AnalyticsContainer>
  );
};