import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Carlist from './Components/Carlist';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6">
            Cars
          </Typography>
        </Toolbar>
      </AppBar>

      <Carlist/>
      
    </div>
  );
}

export default App;
