import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import rolesMap from '../../../../core/constants/RolesMap';

const defaultBg = require('../../../../assets/images/background.png');

class ProfileCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: { uri: `https://u1.vimetop.ru/user/bg/${props.data.username.substr(0, 2)}/${props.data.username}.png` },
      isLoadImage: true,
      test: '',
    };
  }

  componentDidMount() {
    fetch(
      `https://u1.vimetop.ru/user/bg/${this.props.data.username.substr(0, 2)}/${this.props.data.username}.png`
    ).then(res => {
      if (res.status !== 200) {
        fetch(
          `https://u1.vimetop.ru/user/bg/${this.props.data.username.substr(0, 2)}/${this.props.data.username}.jpeg`
        ).then(res => {
          if (res.status !== 200) {
            this.setState({ image: defaultBg, isLoadImage: false });
          } else {
            this.setState({
              image: {
                uri: `https://u1.vimetop.ru/user/bg/${this.props.data.username.substr(0, 2)}/${
                  this.props.data.username
                }.jpeg`,
              },
              isLoadImage: false,
            });
          }
        });
      } else {
        this.setState({ isLoadImage: false });
      }
    });
  }

  render() {
    const { data } = this.props;
    return (
      <View style={styles.profile} elevation={5}>
        {!this.state.isLoadImage ? (
          <Image source={this.state.image} resizeMode="cover" style={{ width: '100%', height: 120, marginTop: -2 }} />
        ) : null}
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={{ uri: `http://skin.vimeworld.ru/head/${data.username}.png` }}
            resizeMode="contain"
            style={{ width: 100, height: 100 }}
            onLoadEnd={res => this.setState({ test: res })}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.nickname}>{data.username}</Text>
            <Text style={{ ...styles.role, color: rolesMap[data.rank].color }}>{rolesMap[data.rank].text}</Text>
            <Text>{data.level} уровень</Text>
            <View style={styles.levelContainer}>
              <View style={{ ...styles.loading, width: `${+data.levelPercentage.toFixed(2) * 100}%` }} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ProfileCardComponent;
