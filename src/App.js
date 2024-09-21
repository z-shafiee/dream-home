// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';  
import Header from './components/Header';  
import PropertyList from './components/PropertyList';  

const App = () => (  
    <div>  

        
    </div>  
);  

export default App;
// src/App.js  
import React from 'react';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import Header from './components/Header';  
import HomePage from './pages/HomePage';  
import PropertyDetails from './pages/PropertyDetails';  

const App = () => {  
    return (  
        <Router>  
            <Header />  
            <Switch>  
                <Route path="/" exact component={HomePage} />  
                <Route path="/properties/:id" component={PropertyDetails} />  
            </Switch>  
        </Router>  
    );  
};  

export default App;
