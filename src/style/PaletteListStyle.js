export default {
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
    color: '#fff',
    '& a': {
      padding: '0.3rem 0.6rem',
      borderRadius: '5px',
      textDecoration: 'none',
      color: '#fff',
      backgroundColor: '#333',
      transition: 'color 0.3s, background-color 0.4s'
    },
    '& a:hover': {
      color: '#333',
      backgroundColor: '#fff'
    }
  },
  palettesGroup: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0.6rem'
  }
};
