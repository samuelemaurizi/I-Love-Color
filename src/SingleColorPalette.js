import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ColoBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex'
    };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    // console.log(this._shades);
    this.changeFormat = this.changeFormat.bind(this);
  }

  // Get the shades of given color
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let color in allColors) {
      shades.push(allColors[color].find(color => color.id === colorToFilterBy));
    }
    // return all shades of given color and cut the first one - we dont need - is just white
    return shades.slice(1);
  }

  // Set the format in state to be dynamic from the Navbar > Select component. So we can use to modify the format in ColorBox component
  changeFormat(val) {
    // console.log(val);
    this.setState({ format: val });
  }

  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;

    // Create the boxes from the _shades array
    const colorBoxes = this._shades.map(color => (
      <ColoBox
        key={color.hex}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));

    return (
      <div className='Palette SingleColorPalette'>
        <Navbar handleChange={this.changeFormat} showLevel={false} />
        <div className='Palette-colors'>
          {colorBoxes}
          <div className='ColorBox go-back'>
            <Link to={`/palette/${id}`} className='back-btn'>
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
