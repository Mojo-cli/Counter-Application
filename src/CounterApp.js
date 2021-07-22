import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

class CounterApp extends React.Component{

  render(){

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.counterContainer}>

          <TouchableOpacity onPress={()=>this.props.increaseCount()}>
            <Text style={{fontSize:20}}>Increase</Text>
          </TouchableOpacity>

          <Text style={{fontSize:20, color:"black"}}>{this.props.counter}</Text>

          <TouchableOpacity onPress={() => this.props.decreaseCount()}>
            <Text style={{fontSize:20}}>Decrease</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

function mapStateToProps(state){
    return{
        counter:state.counter
    }
}

function mapDispatchedToProps(dispatch){
    return{
        increaseCount:() => dispatch({type:"INCREASE_COUNTER"}),
        decreaseCount: () => dispatch({type:"DECREASE_COUNTER"})
    }
}

export default connect(mapStateToProps, mapDispatchedToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    width:200
  }
});