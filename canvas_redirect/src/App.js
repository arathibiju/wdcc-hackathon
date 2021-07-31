import './App.css';
import postsList from './post.js';


function App() {
  return (
      <div className="App">

        <header className="App-header">
          <p>Sorry, Canvas can't be accessed right now</p>  
        </header>

        <div className="data">
              <div className="posts">
                <h1>Reddit</h1>
                <div>{postsList()}</div>
              </div>
                
              <div className="posts">
                <h1>Instagram</h1>
              <div>{postsList()}</div>
              </div>

              <div className="posts">
                <h1>Twitter</h1>
              <div>{postsList()}</div>
              </div>
        </div>
        

        <footer>
          <p>This is a footer</p>
        </footer>
      </div>
  
  );
}

export default App;
