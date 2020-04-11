import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './style/PaletteFooterStyle';

const PaletteFooter = ({ paletteName, emoji, classes }) => {
  return (
    <div>
      <footer className={classes.PaletteFooter}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>
    </div>
  );
};

export default withStyles(styles)(PaletteFooter);
