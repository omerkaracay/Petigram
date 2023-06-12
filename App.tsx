import {View, Text} from 'react-native';
import React from 'react';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          color: colors.primary,
          fontSize: fonts.size.xxl,
        }}>
        Petigram
        <AntDesign name="stepforward" size={25} />
      </Text>
    </View>
  );
}
