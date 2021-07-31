import './App.css';
import postsList from './RedditPost.js';
import InstgramPosts from './Igposts';


function App() {
  return (
      <div className="App">

        <header className="App-header">
          <p>Sorry, Canvas can't be accessed right now</p>  
          <p>score</p>
        </header>

        <div className="data">
              <div className="posts">
                <h1>Reddit</h1>
                <div>{postsList()}</div>
              </div>
                
              <div className="posts">

                <h1>Instagram</h1>
              <div>{InstgramPosts()}</div>
              </div>

              <div className="posts">
                <h1>Twitter</h1>
              <div>{postsList()}</div>
              </div>
        </div>
        


      </div>
  
  );
}

export default App;
