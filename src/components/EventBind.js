import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state={ message:"hello"}
    }
    clickhandler()
    {
        this.setState({
            message:"not me"
        })
    }
    
    
    
    render() {
        return (
            <div><div>{this.state.message}</div>
                <button onClick={this.clickhandler.bind(this)}>cliuck me</button>
            </div>
        );
    }
}

export default EventBind;