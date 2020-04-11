import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './style/MiniPaletteStyle';

// The style applied here is unique for this component
const MiniPalette = props => {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorsDiv = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));
  // console.log(classes);

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>{miniColorsDiv}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>{' '}
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
