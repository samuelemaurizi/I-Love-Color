import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import MiniPalette from './MiniPalette';

const styles = {
  main: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#479FFF'
  },
  container: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff'
  },
  palettesGroup: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0.6rem'
  }
};

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes } = this.props;
    const { main, container, nav, palettesGroup } = this.props.classes;

    return (
      <div className={main}>
        <div className={container}>
          <div className={nav}>
            <h1>React Colors</h1>
            <p>Link goes here</p>
          </div>
          <div className={palettesGroup}>
            {palettes.map(palette => (
              <p>
                <MiniPalette
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
