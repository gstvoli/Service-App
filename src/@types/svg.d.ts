declare module "*.svg" {
  import React, { ReactText } from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: ReactText.FC<SvgProps>;
  export default content;
}