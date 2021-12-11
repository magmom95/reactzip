import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '연습중이에여';

  return (
    <div className="App">
      <div className="color-nav">
        <div className="main" style={{ color : 'black', fontSize : '30px'}}>연습용 Blog</div>
      </div>
      <img src={ logo } alt="sdf"/>
      <h4>{ posts }</h4>
    </div>
  );
}

export default App;
