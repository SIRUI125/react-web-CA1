import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase/firebase'; 
import { useNavigate } from 'react-router-dom';
import {
  Button, TextField, Box, Card, CardContent, Typography, CssBaseline, 
  Avatar, Container, Paper, Grid
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginPage = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();
// Function to handle login with Firebase
const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };
// Function to handle user registration with Firebase
const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };
// The UI of the component
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper 
        sx={{ 
          mt: 8, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          padding: 2
        }}
      >
        <Card sx={{ backgroundColor: '#f5f5f5' }}>
          <CardContent>
            <Box
              sx={{
                my: 3,
                mx: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" color="primary">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1, width: '100%' }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleSignUp}
                  sx={{ mt: 1 }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </Container>
  );
};

export default LoginPage;
