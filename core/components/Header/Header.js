import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const HeaderComponent = ({ title }) => (
  <View style={styles.container}>
    {title ? (
      <Text style={styles.titleNick}>{title}</Text>
    ) : (
      <View style={styles.title}>
        <Text style={styles.titleFirst}>Vime</Text>
        <Text style={styles.titleSecond}>Top</Text>
      </View>
    )}
  </View>
);

export default HeaderComponent;
