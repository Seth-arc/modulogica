// frontend/src/components/module/ModuleDesigner.js
import React, { useState } from 'react';
import styled from 'styled-components';

const DesignerWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  min-height: 90vh;
  background: ${props => props.theme.colors.background};
`;

const Sidebar = styled.div`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
`;

const Canvas = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ModuleForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ModuleDesigner = () => {
  const [moduleData, setModuleData] = useState({
    title: '',
    discipline: '',
    academicLevel: '',
    duration: '',
    deliveryMode: '',
    lms: '',
    classSize: '',
    objectives: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Module creation logic
  };

  return (
    <DesignerWrapper>
      <Sidebar>
        <h3>Module Components</h3>
        {/* Component toolbox */}
      </Sidebar>
      <Canvas>
        <ModuleForm onSubmit={handleSubmit}>
          <FormGroup>
            <label>Module Title</label>
            <input
              type="text"
              value={moduleData.title}
              onChange={(e) => setModuleData({...moduleData, title: e.target.value})}
            />
          </FormGroup>
          {/* Additional form fields */}
        </ModuleForm>
      </Canvas>
    </DesignerWrapper>
  );
};