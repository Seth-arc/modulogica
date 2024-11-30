// frontend/src/components/learning/LearningObjectiveBuilder.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ObjectiveBuilder = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const CognitiveLevel = styled.select`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
`;

export const LearningObjectiveBuilder = () => {
  const [objectives, setObjectives] = useState([]);

  const cognitivelevels = [
    'remember',
    'understand',
    'apply',
    'analyze',
    'evaluate',
    'create'
  ];

  const addObjective = () => {
    setObjectives([...objectives, {
      level: '',
      description: ''
    }]);
  };

  return (
    <ObjectiveBuilder>
      <h3>Learning Objectives</h3>
      {objectives.map((objective, index) => (
        <div key={index}>
          <CognitiveLevel
            value={objective.level}
            onChange={(e) => {
              const newObjectives = [...objectives];
              newObjectives[index].level = e.target.value;
              setObjectives(newObjectives);
            }}
          >
            {cognitivelevels.map(level => (
              <option key={level} value={level}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </option>
            ))}
          </CognitiveLevel>
          {/* Objective description input */}
        </div>
      ))}
      <button onClick={addObjective}>Add Objective</button>
    </ObjectiveBuilder>
  );
};