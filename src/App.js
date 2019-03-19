import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import CheckList from './components/CheckList/CheckList';
import Contact from './components/Contact/Contact';
import Social from './components/Social/Social';
import Resume from './components/Resume/Resume';
import Hobbies from './components/Hobbies/Hobbies';
import './App.css';

class App extends Component {
	render() {
		return (
			<Layout>
				<Route exact path='/' component={Home} />
				<Route exact path='/home' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/hobbies' component={Hobbies} />
				<Route path='/resume' component={Resume} />
				<Route path='/poc' component={CheckList} />
				<Route path='/contact' component={Contact} />
				<Route path='/social' component={Social} />
			</Layout>
		);
	}
}

export default App;