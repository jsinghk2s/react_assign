import Header from './Header'
import './App.css';
import HorizontalLinearStepper from "./Steper";
import FormPropsTextFields from "./Form";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function App() {
  return (
    <div className="App">
      <Header />
        <div className="main form">
            <HorizontalLinearStepper />

            <div className="form">
                <h6 variant="outlined">
                    After 04:00 This Page Will Be refreshed
                </h6>
            </div>

            <FormPropsTextFields />
        </div>
    </div>
  );
}
export default App;
