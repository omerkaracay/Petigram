import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://avatars.steamstatic.com/480dcc7f971a6fe7108330c4b51e4bbfac761a37_full.jpg',
          }}
          style={styles.avatar}
        />

        <Text style={styles.username}>bigCat26</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <Image
        source={{uri: 'https://picsum.photos/1080'}}
        style={styles.image}
      />
      {/* Footer */}
      <View style={styles.iconContainer}>
        <AntDesign name={'hearto'} size={24} style={styles.icon} />
        <Ionicons name="chatbubble-outline" size={24} style={styles.icon} />
        <Feather name="bookmark" size={24} style={{marginLeft: 'auto'}} />
      </View>
      <Text>Liked by DoggieKing54 and 42 others</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },

  threeDots: {
    marginLeft: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  icon: {marginHorizontal: 5},
});
