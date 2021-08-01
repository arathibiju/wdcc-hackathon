import './App.css';
import PostsList from './RedditPost.js';
import PostsList2 from './subreddit.js';
import TwitterContainer from './TwitterPosts';
import TwitterContainer2 from './tweet2';
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
                <div><h1>Reddit R/all</h1></div>
                  <div className="redditposts">{PostsList()}</div>
              </div>
                
              <div className="posts">
                <h1>R/softwaregore</h1>
                <div className="redditposts">{PostsList2()}</div>
              
              </div>

              <div className="posts">
                <h1>Buzzfeed Videos</h1>
              <div className="tweets">{TwitterContainer2()}</div>
              
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
