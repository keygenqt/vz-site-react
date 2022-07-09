import logo from '../static/images/logo.svg';
import '../static/css/common.css';
import {Button} from "@mui/material";
import HomeIcon from '@mui/icons-material/Delete';

function App() {
  return (
    <div className="App">

        <HomeIcon />
        <HomeIcon color="primary" />
        <HomeIcon color="secondary" />
        <HomeIcon color="success" />
        <HomeIcon color="action" />
        <HomeIcon color="disabled" />

        <Button
            href="https://reactjs.org"
            target="_blank"
            variant="contained"
        >
          Learn React
        </Button>

    </div>
  );
}

export default App;
