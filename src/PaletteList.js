import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import MiniPalette from './MiniPalette';
import styles from './style/PaletteListStyle';

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
            <Link to='/palette/new'>Create Palette</Link>
          </div>
          <div className={palettesGroup}>
            {palettes.map(palette => (
              <div key={palette.paletteName}>
                <MiniPalette
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
