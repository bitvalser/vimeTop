import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import gamesNameMap from '../../../../core/constants/GamesNameMap';
import fields from '../../../../core/constants/fields';

const StatCardComponent = ({ data }) => (
  <View style={styles.container} elevation={5}>
    <View style={styles.header}>
      <Text style={styles.title}>{gamesNameMap[data.name]}</Text>
    </View>
    <View style={styles.info}>
      {fields
        .filter(item => data[item.key] !== undefined)
        .map(item => (
          <View style={styles.row}>
            <Text>{item.text}</Text>
            <View style={styles.spacer} />
            <Text style={styles.stat}>{data[item.key]}</Text>
          </View>
        ))}
    </View>
  </View>
);

export default StatCardComponent;
