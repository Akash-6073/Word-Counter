import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/TextForm';
import Foot from './Components/Foot';

function App() {
  return (
    <>
          <Navbar  />
    <div className="container">
      <Textform heading="Enter your Text here"/>
    </div>
    <div className="footer">
      <Foot/>
    </div>
    </>
  );
}

export default App;
