export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh'
  },
  NavbarLogo: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '1rem',
    padding: '0.6rem 1.2rem',
    height: '100%',
    fontSize: '1.3rem',
    fontFamily: 'var(--ff-logo)',
    letterSpacing: '1px',
    backgroundColor: '#333',
    '& a': {
      color: '#fff',
      textDecoration: 'none',
      transition: 'color 0.3s'
    }
  },
  // NavbarLogo a:hover: {
  //   color:' #c0c0c0'
  // },
  sliderContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  slider: {
    width: '250px',
    margin: '1rem',
    display: 'inline-block',
    '& .rc-slider-rail, .rc-slider-track': {
      height: '0.4rem'
    },
    '& .rc-slider-track': {
      backgroundColor: '#9c9c9c'
    },
    '& .rc-slider-handle, .rc-slider-handle:focus': {
      width: '1rem',
      height: '1rem',
      boxShadow: 'none',
      border: 'none',
      backgroundColor: '#6d6d6d'
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1.5rem'
  }
};
