import React, {Component} from 'react';
import logo from '../../assets/cdiscount_login.PNG';
import Title from '../Title';
import Main from '../../components/Main';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    render() {
        return ( 
            <div className = "App" >
                <header className = "App-header" >
                    <img 
                        src = { logo }      
                        className = "App-logo" 
                        alt = "logo" 
                    />
                    <Main />
                    <div className="App-note">
                        Pour plus d’information, consulter la Politique de conﬁdentialité de CDISCOUNT accessible via le lien suivant : 
                        <a className = "App-link"
                        href = "https://www.cdiscount.com/vie-privee-et-cookies.html?_ga=2.65595630.172947752.1621265546-518456721.1621265546"
                        target = "_blank"
                        rel = "noopener noreferrer" >
                            Protection de vos données personnelles
                        </a> 
                    </div>
                </header> 
            </div>
        );
    }
}
export default App;