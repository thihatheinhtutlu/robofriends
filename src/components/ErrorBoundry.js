import React , { Component,  } from 'react';

class ErrorBoundry extends Component {
    constructor () {
        super ()
        this.state = {
            hasError: false
        }
    }
//life circle methods dway ko state htl mar bal yay ya mal

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render () {
        console.log (this.props)
        if (this.state.hasError){
            return <h1>Ooops, that is not good</h1>
        }

        return this.props.children
    
    }
}

export default ErrorBoundry;

