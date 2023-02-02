import { Grid } from '@mui/material';
import './App.css';
import BookReader from './components/BookReader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container direction="column" alignContent={"center"} justifyContent={"center"}>
          <Grid item xs={12} sx={{width: '100%'}}>
            <BookReader/>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
