import React, { Component } from 'react';

class Counter extends Component {
    constructor(props)
    {super(props)
        this.state={
            count:0
        }

    }
    addCount()
    {
        // this.setState({
        //     count : this.state.count +1
        // })
        // console.log(this.state.count)
        this.setState(prevState=>(
            {
                count:prevState.count+1
            }
        ))
    }
    incrementFive()
    {
       this.addCount()
       this.addCount()
       this.addCount()
       this.addCount()
       this.addCount()

    }
    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={ () =>this.incrementFive()}>
                    increment
                </button>
            </div>
        );
    }
}

export default Counter;