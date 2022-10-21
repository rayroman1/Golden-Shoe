import logo from './logo.svg';
import './App.css';
import 'C:/React/simpleloginpage/src/projstyle.css/AppSignin.css';

function App() {
  return (
    <div className="App" >
     <form>
      <div>
        <label>Enter Userame</label>
        <input type="text" />
      </div>
      <div>
        <label>Enter Password</label>
        <input type="text" />
      </div>
      <div>
        
        <input type="submit" value="Sign In"/>
      </div>
     
     </form>
    </div>
  );
}

export default App;
