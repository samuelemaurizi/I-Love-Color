import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import './style/ColorBox.css';

export default class ColorBox extends Component {
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
    const { name, background, paletteId, id, showLink } = this.props;
    const { copied } = this.state;
    const contrast = chroma.contrast(background, 'black') < 6;

    // Creating an extra div, .copy-overlay, allow to scale it without compromise the size of what is inside of the .copy-container div
    // Keeping copy-msg div separate from the .copy-overlay div give the chace to maintain the original size of the div and it will not be scaled.
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className='ColorBox'>
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
            <button className={`copy-btn ${contrast ? 'dark-text' : null}`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={`see-more ${contrast ? 'dark-text' : null}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
