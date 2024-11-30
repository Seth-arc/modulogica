// frontend/src/components/profile/UserProfile.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ProfileForm = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
`;

export const UserProfile = () => {
  const [profile, setProfile] = useState({
    title: '',
    name: '',
    surname: '',
    region: '',
    preferredLanguage: '',
    email: '',
    digitalProficiency: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Profile update logic
  };

  return (
    <ProfileContainer>
      <h2>Profile Settings</h2>
      <ProfileForm onSubmit={handleSubmit}>
        <FormGroup>
          <label>Title</label>
          <Select
            value={profile.title}
            onChange={(e) => setProfile({...profile, title: e.target.value})}
          >
            <option value="">Select Title</option>
            <option value="Dr">Dr</option>
            <option value="Prof">Prof</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <label>Region</label>
          <Select
            value={profile.region}
            onChange={(e) => setProfile({...profile, region: e.target.value})}
          >
            <option value="">Select Region</option>
            <option value="Southern Africa">Southern Africa</option>
            <option value="Northern Africa">Northern Africa</option>
            <option value="Eastern Africa">Eastern Africa</option>
            <option value="Western Africa">Western Africa</option>
            <option value="Other">Other</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <label>Preferred Language</label>
          <Select
            value={profile.preferredLanguage}
            onChange={(e) => setProfile({...profile, preferredLanguage: e.target.value})}
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="isiZulu">isiZulu</option>
            <option value="Kiswahili">Kiswahili</option>
            <option value="Yoruba">Yoruba</option>
            <option value="French">French</option>
            <option value="Other">Other</option>
          </Select>
        </FormGroup>
      </ProfileForm>
    </ProfileContainer>
  );
};