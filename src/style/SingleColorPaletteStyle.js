export default {
  Palette: {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  PaletteColors: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginBottom: '-4px' /* should fix this */,
    opacity: '1',
    backgroundColor: '#333',
    '& a': {
      color: 'white',
      width: '100px',
      padding: '0.3rem 0.6rem',
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
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'opacity 0.3s'
    }
  }
};
