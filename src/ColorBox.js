import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/core/styles';

import styles from './style/ColorBoxStyle';

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
            className={`${classes.copyOverlay} ${copied &&
              classes.showOverlay}`}
          />
          <div
            className={`${classes.copyMsg} ${copied && classes.showCopyMsg}`}
          >
            <h1>Copied!</h1>
            <p className={contrast ? 'dark-text' : null}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
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
