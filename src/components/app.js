import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Route} from 'react-router-dom';
import Home from './home';
import About from './about';
import SecretList from './secret_list';
import ProtectedStuff from './protected_stuff';
import Nav from './nav';
import auth from '../hoc/auth';


const App = () => (
    <div className='container'>
        <Nav/>

        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/secret-list' component={SecretList}/>
        <Route path='/protected-stuff' component={auth(ProtectedStuff)}/>



    </div>
);

export default App;
