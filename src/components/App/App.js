import React, {Component} from 'react';
import logo from '../../cdiscount.jfif';
import Title from '../Title';
import Users from '../../containers/users';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    render() {
        return ( 
            <div className = "App" >
                <header className = "App-header" >
                    <img src = { logo } className = "App-logo" alt = "logo" / >
                    <Title version="0.1.0"/>
                    <Users />
                    <a className = "App-link"
                    href = "https://github.com/SalaheddineEtangi/login-front"
                    target = "_blank"
                    rel = "noopener noreferrer" >
                        Get source code 
                    </a> 
                </header> 
            </div>
        );
    }
}
export default App;