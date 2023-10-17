import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/TextForm';
import Foot from './Components/Foot';

function App() {
  return (
    <>
          <Navbar  />
          <h1 style={{textAlign : "center"}} className='my-3'>Task - I</h1>
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
