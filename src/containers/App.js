import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// class nae yay yin 'this.' nae so yin ek htl ka har dway pyan ya
class App extends Component {
    constructor() {
        super ()
        this.state = { 
            robots: [],
            searchfield: ''

        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users =>this.setState({ robots : users })); 
        
    }


 // state htl ka har dway ko bal 'state.' htl nae yay ya mal 
 // apyin ka har dway so 'this.' nae bal yay loh ya
    
// setState so dar user yae info ko save chin yin use dar 
// setState ko variable lo myo use loh ya dal
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
     }   
 
    // user yae typing dway lo chin yin event.target.value 
    

    
    render () {
        console.log (this.props) 
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
       })
       if (robots.length === 0) {
        return <h1>Loading</h1>
       } else {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                {/* robots={robots} ka PROPS 
                ek dar ka parent ka nay child ko info share
                par yin use dar */}
                <Scroll>
                    <ErrorBoundry isError= {false}>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
       }
    }
}

export default App; 


// STATE so dar child components dway a chin chin communicate 
// fik ag lote pay dar and its important in REACT. 
// STATE ka memory updated fik ag lote chin yin use del

// STATE htl ka nay PROPS ka htwt lar dar