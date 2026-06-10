import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function LoginScreen() {
  const [email, setEmail] = React.useState('admin@dmplasti.com');
  const [password, setPassword] = React.useState('');
  const [server, setServer] = React.useState('http://localhost:5000');
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${server}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = '/dashboard';
      } else {
        alert('Erreur de connexion');
      }
    } catch (error) {
      alert('Erreur serveur: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                🏭 DMPlastiControl
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Plateforme de suivi de production
              </Typography>
            </Box>

            <form onSubmit={handleLogin}>
              <TextField
                fullWidth
                label="Serveur"
                type="text"
                value={server}
                onChange={(e) => setServer(e.target.value)}
                margin="normal"
                variant="outlined"
                placeholder="http://localhost:5000"
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Mot de passe"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                variant="outlined"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                disabled={loading}
                sx={{ mt: 3, mb: 2, py: 1.5 }}
              >
                {loading ? 'Connexion en cours...' : 'Se Connecter'}
              </Button>
            </form>

            <Box sx={{ mt: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant="caption" display="block" gutterBottom>
                🔐 Identifiants par défaut :
              </Typography>
              <Typography variant="caption" display="block">
                Email: <strong>admin@dmplasti.com</strong>
              </Typography>
              <Typography variant="caption" display="block">
                Mot de passe: <strong>Admin123!Plasti</strong>
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginScreen />);
