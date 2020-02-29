import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';

// Material-UI
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import { MenuItem } from '@material-ui/core';

import 'rc-slider/assets/index.css';
import './style/Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex',
      open: false
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  // Passing the vaue of the Select component to the parent
  handleFormatChange(e) {
    // Set the state with the current value
    this.setState({ format: e.target.value, open: true });
    // Pass the value to the parent handleChange through props
    this.props.handleChange(e.target.value);
  }

  closeSnackBar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel, showLevel } = this.props;
    const { format } = this.state;

    return (
      <header className='Navbar'>
        <div className='Navbar__logo'>
          <Link to='/'>colorPalette</Link>
        </div>
        {showLevel && (
          <div className='slider-container'>
            <span>Level: {level}</span>
            <div className='slider'>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className='select-container'>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value='hex'>HEX - #fff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(0, 0, 0, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span>Format Changed to {format.toUpperCase()}</span>}
          onClose={this.closeSnackBar}
          action={[
            <IconButton
              onClick={this.closeSnackBar}
              color='inherit'
              key='close'
              arial-label='close'
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}
