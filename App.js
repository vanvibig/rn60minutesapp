import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { ChildComponent } from './ChildComponent';

const WIDTH = Dimensions.get('window').width;
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 'RN state',
      text: ''
    }
  }

  onChangeTextInput = (text) => {
    this.setState({value: text})
  }

  render() {
    let {container, txtStyle, txtInput} = styles;
    let {value} = this.state;
    return(
      <View style={container}>
        <ChildComponent 
          data1={value}
          data2={"11"}
          data3={"33"}
        />
        <TextInput 
          style={txtInput}
          onChangeText={this.onChangeTextInput}
          value={value}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle: {
    fontSize: 20
  },
  txtInput: {
    borderWidth: 1,
    height: 50,
    width: WIDTH - 30,
    textAlign: 'center',
    fontSize: 20
  }
});
