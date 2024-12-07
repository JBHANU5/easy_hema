import React, { Component } from 'react';

class ClassClick extends Component {
    clickhandler()
    {
        console.log("classclik")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickhandler}>click me class</button>
            </div>
        );
    }
}

export default ClassClick;