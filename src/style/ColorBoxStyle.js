import chroma from 'chroma-js';

export default {
  colorBox: {
    width: '20%',
    height: props => (props.showFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginBottom: '-4px' /* should fix this */,
    '&:hover button': {
      opacity: '1'
    }
  },
  boxContent: {
    width: '100%',
    position: 'absolute',
    left: '0',
    bottom: '0',
    padding: '0.5rem',
    color: '#333',
    fontSize: '0.7rem',
    letterSpacing: '1px'
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? '#333' : '#fff',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    padding: '0.3rem',
    background: 'rgba(255, 255, 255, 0.3)'
  },
  copyBtn: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? '#333' : '#fff',
    width: '100px',
    height: '30px',
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
    cursor: 'pointer',
    opacity: 0,
    transition: 'opacity 0.3s'
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transform: 'scale(0.1)',
    transition: 'transform 0.4s ease-in-out'
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(12)',
    zIndex: '10',
    position: 'absolute'
  },
  copyMsg: {
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4rem',
    color: '#fff',
    opacity: '0',
    transform: 'scale(0.1)',
    '& h1': {
      fontWeight: '400',
      margin: '0'
    },
    '& p': {
      fontSize: '2rem'
    }
  },
  showCopyMsg: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '12',
    transition: 'all 0.5s',
    transitionDelay: '0.3s'
  }
};
