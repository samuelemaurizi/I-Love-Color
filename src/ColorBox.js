import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/core/styles';

import './style/ColorBox.css';

const styles = {
  colorBox: {
    width: '20%',
    height: props => (props.showFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginBottom: '-3.5px' /* should fix this */,
    '&:hover button': {
      opacity: '1'
    }
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? '#333' : '#fff',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    padding: '0.3rem',
    background: 'rgba(255, 255, 255, 0.3)'
  },
  copyBtn: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? '#333' : '#fff',
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    opacity: 0,
    transition: 'opacity 0.3s'
  }
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 2000);
    });
  }

  render() {
    // Get the Props from Palette.js
    const {
      name,
      background,
      paletteId,
      id,
      showFullPalette,
      classes
    } = this.props;
    const { copied } = this.state;
    // Check the color contrast with chroma and apply css class
    const contrast = chroma.contrast(background, 'black') < 6;

    // Creating an extra div, .copy-overlay, allow to scale it without compromise the size of what is inside of the .copy-container div
    // Keeping copy-msg div separate from the .copy-overlay div give the chace to maintain the original size of the div and it will not be scaled.
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className={classes.colorBox}>
          <div
            style={{ background: background }}
            className={`copy-overlay ${copied && 'show'}`}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>Copied!</h1>
            <p className={contrast ? 'dark-text' : null}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={contrast ? 'light-text' : null}>{name}</span>
            </div>
            <button className={classes.copyBtn}>Copy</button>
          </div>
          {showFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
