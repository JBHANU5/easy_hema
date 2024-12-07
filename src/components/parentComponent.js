import React, { Component } from 'react';

class parentComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            parentName:'Parent'
            this.greetParent=this.greetParent.bind(this)
        }
    }
    greetParent(){
        alert(' hello ${this.state.parentName} ')
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default parentComponent;