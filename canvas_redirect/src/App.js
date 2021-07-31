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
              <div><iframe id="reddit-embed" src="https://www.redditmedia.com/r/cute/comments/ouy5s1/my_lil_pep/?ref_source=embed&amp;ref=share&amp;embed=true" sandbox="allow-scripts allow-same-origin allow-popups" scrolling="no" width="640" height="531"></iframe></div>
              </div>
        </div>
        

        <footer>
          <p>This is a footer</p>
        </footer>
      </div>
  
  );
}

export default App;
