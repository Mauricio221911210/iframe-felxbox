import * as React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function InfoScreen(){
    return(
        <>
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.text}>Si tiene dudas o comentarios comunicate a: </Text>
                <Text style={styles.text}>al221911210.com</Text>
                <Text style={styles.text}>Version 1.1</Text>
            </View>

        </View>
        </>
    )
}
const styles=StyleSheet.create({
container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin: 0, 
  },
  info: {
    flex: .3,
    alignContent:'center',
    justifyContent: 'center',
    padding: 40,
    borderRadius: 10,
    borderWidth: 1,
    width:'98%'
  },
  text:{
    alignSelf:'center',
    margin: 3
  }
});