import React, { Component } from 'react';

export default class Child3 extends Component {
    constructor(props) {
        super(props);
        this.state = (
            {num : 0}
        )
    }

    increaseCount = () => {
        this.setState(
            {
                num : this.state.num + 1,
            }
        )
    }
    render() {
        return (
          <div>
              This is Child3.  num is {this.state.num}.
              <br />
              <input type="button" value="click" onClick={this.increaseCount}></input>
          </div>
        );
    }

}