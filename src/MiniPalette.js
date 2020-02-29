import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    height: '150px',
    width: '100%',
    backgroundColor: '#fff'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    paddingTop: '0.5rem',
    fontSizi: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.3rem'
  },
  miniColor: {
    width: '25%',
    height: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-4px'
  }
};

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
