import React from 'react'
import {View, Text} from 'react-native'
import NextTextInput from 'react-native-next-input'
import styles from './style';

const NextInput = () => {

   const inputFromChildComponent = (combinedValueArray:Array<string>, currentValue:string, refForTheCurrentValue:number) => {
			console.log(combinedValueArray, currentValue,  refForTheCurrentValue)
	}

    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter One Time Password</Text>
            <NextTextInput 
            noOfTextInput={4}
            textInputStyle={styles.textBox}
            onChangeValue={inputFromChildComponent}
            />
        </View>
    )
}

export default NextInput