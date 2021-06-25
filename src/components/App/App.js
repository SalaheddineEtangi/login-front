import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {store} from '../../actions/store'
import Main from '../../components/Main'
import './App.css'

class App extends Component {
    render() {
        return ( 
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}
export default App;