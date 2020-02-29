import React, { Component } from 'react';
import Navbar from './Navbar';

import './style/Palette.css';

import ColorBox from './ColorBox';

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  // Set the format in state to be dynamic from the Navbar > Select component. So we can use to modify the format in ColorBox component
  changeFormat(val) {
    // console.log(val);
    this.setState({ format: val });
  }

  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} />
    ));

    return (
      <div className='Palette'>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className='Palette-colors'>
          {/* bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* footer */}
      </div>
    );
  }
}
