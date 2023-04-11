import UserForm from './components/UserForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserForm userFirstName={""} userLastName={""} userEmail={""} userPassword={""} userConfirmPassword={""} />
    </div>
  );
}

export default App;
