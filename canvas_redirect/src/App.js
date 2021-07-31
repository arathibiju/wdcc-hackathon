import './App.css';
import ReactDOM from 'react-dom';

/*const reddit_posts = ["post1", "post2", "post3"];

const reddit_posts_list = reddit_posts.map((post) =>
  <li key="">{post}</li> 
);

ReactDOM.render(reddit_posts_list, document.getElementById('root'));*/

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <p>Sorry, Canvas can't be accessed right now</p>  
      </header>
      <div className="flex-row">
            <div className="flex-column">
              reddit
            </div>
              
            <div className="flex-column">instagram</div>
            <div className="flex-column">twitter</div>
      </div>

      <footer>
        <p>This is a footer</p>
      </footer>
    </div>
  );
}

export default App;
