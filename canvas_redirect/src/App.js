import './App.css';
import postsList from './post.js';


function App() {

 

  return (

      <div className="App">
        <header className="App-header">
          <p>Sorry, Canvas can't be accessed right now</p>  
        </header>
        <div className="flex-row">
              <div className="flex-column">
                reddit
                <div>
                  {postsList()}
                </div>
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
