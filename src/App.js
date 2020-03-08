import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './style/App.css';

import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  // console.log(generatePalette(seedColors[4]));
  const findPalette = id => {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  };

  // We generate the Palette form the generatePalette helper and we pass in the findPalette method with the id in the url params (.match.params.id)
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={routeProps => (
          <PaletteList palettes={seedColors} {...routeProps} />
        )}
      />
      <Route exact path='/palette/new' render={() => <NewPaletteForm />} />
      <Route
        exact
        path='/palette/:id'
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path='/palette/:paletteId/:colorId'
        render={routeProps => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  );
}

export default App;
