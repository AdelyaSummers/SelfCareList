import './App.css';
import image from './photo1.jfif';
import imageTwo from './photo2.jfif';
import { SelfCareList } from './SelfCareList.js';

function App() {
  return (
    <div className="App">

      <div className="container">
          <img src={image} width="400px"alt="photoOne"/>
      </div>
      
      <div className="container">
          <h1>Self Care List</h1>
      </div>

     <SelfCareList/>

      <div className="container">
          <img src={imageTwo} width="400px" alt="PhotoTwo"/>
      </div>

    </div>
  );
}

export default App;
