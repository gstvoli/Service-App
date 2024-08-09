import React, { memo } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import { Text } from 'react-native-paper';
import Icon from '@mdi/react';
import { mdiHammerScrewdriver } from '@mdi/js';

const HomeScreen = () => (
  <Background>
    {/* <Icon path={mdiHammerScrewdriver} size={1} /> */}
    <Header>Login Template</Header>

    <Text>
      The easiest way to start with your amazing application.
    </Text>
  </Background>
);

export default memo(HomeScreen);

