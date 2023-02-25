import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <a class="navbar-brand" href="/"><h3>BOOK MY PROPERTY</h3></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText" style={{marginLeft: "1000px"}}>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/login">LogIn</a>
      </li>
  
      <li class="nav-item">
        <a class="nav-link" href="/signup">SignUp</a>
      </li>
    </ul>
    
    <span class="navbar-text">
    <br/>
    <br/>
    </span>
  </div>
</nav>
</div>
  );
}

export default App;
