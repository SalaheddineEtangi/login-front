import logo from './akka.png';
import './App.css';

function App() {
    return ( 
        <div className = "App" >
            <header className = "App-header" >
                <img src = { logo } className = "App-logo" alt = "logo" / >
                <p>
                    Login application. 
                </p> 
                <a className = "App-link"
                href = "https://reactjs.org"
                target = "_blank"
                rel = "noopener noreferrer" >
                    Get source code 
                </a> 
            </header> 
        </div>
    );
}

export default App;