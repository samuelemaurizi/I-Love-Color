import React, { Component } from 'react';
import './style/Palette.css';

import ColorBox from './ColorBox';

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ));

    return (
      <div className='Palette'>
        {/* navbar goes here */}
        <div className='Palette-colors'>
          {/* bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* footer */}
      </div>
    );
  }
}
