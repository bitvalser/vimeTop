import React from 'react';
import { Image, Text, View, TouchableNativeFeedback } from 'react-native';
import styles from './styles';

class SegmentedControlComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
    };
  }

  onChange = val => {
    this.setState({ selected: val });
    this.props.onChange(val);
  };

  render() {
    const { segments } = this.props;
    return (
      <View style={styles.container}>
        {segments.map((segment, i) => (
          <TouchableNativeFeedback onPress={() => this.onChange(i)}>
            <View style={[styles.button, this.state.selected === i ? styles.selected : {}]}>
              <Text style={[styles.text, this.state.selected === i ? styles.selectedText : {}]}>{segment}</Text>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
    );
  }
}

export default SegmentedControlComponent;
