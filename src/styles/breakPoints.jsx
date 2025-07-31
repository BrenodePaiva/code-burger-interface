const size = {
  xsmall: '405px',
  small: '460px',
  xmedium: '615px',
  medium: '',
  xbig: '884px',
  big: '1200px'
}

const breakPoints = {
  xsmall: `(max-width: ${size.xsmall})`,
  small: `(max-width: ${size.small})`,
  xmedium: `(max-width: ${size.xmedium})`,
  medium: `(max-width: ${size.medium})`,
  xbig: `(max-width: ${size.xbig})`,
  big: `(max-width: ${size.big})`
}

export default breakPoints
