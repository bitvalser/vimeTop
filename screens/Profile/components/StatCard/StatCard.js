import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import gamesNameMap from '../../../../core/constants/GamesNameMap';

const fields = [
  { key: 'kills', text: 'Убийств' },
  { key: 'bowkills', text: 'Убийств из лука' },
  { key: 'wood', text: 'Срублено дерева' },
  { key: 'ores', text: 'Добыто руды' },
  { key: 'nexus', text: 'Ударов по базе' },
  { key: 'digged', text: 'Вскопано земли' },
  { key: 'games', text: 'Игр' },
  { key: 'wins', text: 'Побед' },
  { key: 'levels', text: 'Набрано уровней' },
  { key: 'deaths', text: 'Смертей' },
  { key: 'bedBreaked', text: 'Кроватей сломано' },
  { key: 'resourcePointsBreaked', text: 'Точек рес. сломано' },
  { key: 'solo_wins', text: 'Одиночных побед' },
  { key: 'solo_games', text: 'Одиночных игр' },
  { key: 'team_wins', text: 'Командных побед' },
  { key: 'team_games', text: 'Командных игр' },
  { key: 'ranked_games', text: 'Рейтинговых игр' },
  { key: 'ranked_wins', text: 'Рейтинговых побед' },
  { key: 'total_wins', text: 'Всего побед' },
  { key: 'total_games', text: 'Всего игр' },
  { key: 'wins_classic', text: 'Побед Classic' },
  { key: 'wins_bow', text: 'Побед на луках' },
  { key: 'wins_op', text: 'Побед OP' },
  { key: 'wins_potion', text: 'Побед на зельях' },
  { key: 'wins_uhc', text: 'Побед UHC' },
  { key: 'wins_bwh', text: 'Побед BWH' },
  { key: 'maxstrike', text: 'Серия побед' },
  { key: 'wins_potion', text: 'Убийств' },
  { key: 'points', text: 'Очков' },
  { key: 'mobsKilled', text: 'Убито мобов' },
  { key: 'mobsSended', text: 'Послано мобов' },
  { key: 'maxIncome', text: 'Макс. доход' },
  { key: 'total_blocks', text: 'Всего блоков' },
  { key: 'earned_money', text: 'Заработано денег' },
  { key: 'mobs', text: 'Убито мобов' },
  { key: 'arrowsFired', text: 'Стрел выпущено' },
  { key: 'blocksBroken', text: 'Блоков сломано' },
  { key: 'blocksPlaced', text: 'Блоков поставлено' },
  { key: 'currentWinStreak', text: 'Текущая серия побед' },
  { key: 'winStreak', text: 'Лучшая серия побед' },
  { key: 'checkpoints', text: 'Чекпоинтов' },
  { key: 'total_wins', text: 'Всего побед' },
  { key: 'wins_as_innocent', text: 'Побед за мирного' },
  { key: 'wins_as_maniac', text: 'Побед за маньяка' },
  { key: 'wins_as_detective', text: 'Побед за детектива' },
  { key: 'broken_blocks', text: 'Сломано блоков' },
];

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
