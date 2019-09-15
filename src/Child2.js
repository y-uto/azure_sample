import React, { Component } from 'react';

export default class Child2 extends Component {
    render() {
        return (
          <div>
              This is Child2. ID is {this.props.id}.
          </div>
        );
    }

}