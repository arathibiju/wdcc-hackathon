import './App.css';
import PostsList from './RedditPost.js';
import TwitterContainer from './TwitterPosts';
import Score from './score';

function App() { 
  return (
      <div className="App">

        <header className="App-header">
          <p className="title">Sorry, Canvas can't be accessed right now</p>  
          <p className="score">Your current score is: <Score/></p>
        </header>

        <div className="data">
              <div className="posts">
                <div><h1>Reddit</h1></div>
                  <div className="redditposts">{PostsList()}</div>
              </div>
                
              <div className="posts">
                <h1>Buzzfeed</h1>
              <div>{PostsList()}</div>
              
              </div>

              <div className="posts">
                <h1>Twitter</h1>
              <div className="tweets">{TwitterContainer()}</div>
              </div>
        </div>
        


      </div>
  
  );
}

export default App;
