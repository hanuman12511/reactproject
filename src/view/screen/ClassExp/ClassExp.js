import React from 'react';
  
class Comp1 extends React.Component {
  render() {
    console.log('Child Component is called');
    return <h1>{this.props.value}</h1>;
  }
}
  
class ClassExp extends React.Component {
  state = { color: 'black' };
  render() {
    return (
      <div style={{ color: this.state.color }}>
        <Comp1 value="Rahul" />
        <button onClick={() => this.setState({ color: 'green' })}>
          Change Color
        </button>
      </div>
    );
  }
}
export default ClassExp;