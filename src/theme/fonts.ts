import {TextStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
const size = {
  xs: 10,
  sm: 12,
  default: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 30,
};

const weight: {[key: string]: TextStyle['fontWeight']} = {
  full: '900',
  bold: 'bold',
  semibold: '600',
  normal: 'normal',
  thin: '400',
};

export default {size, weight};
