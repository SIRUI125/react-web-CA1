import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../components/firebase/firebase'; 

  const LogoutPage = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); 
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4">
        Are you sure you want to logout?
      </Typography>
      <Button 
        variant="contained" 
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Container>
  );
};

export default LogoutPage;