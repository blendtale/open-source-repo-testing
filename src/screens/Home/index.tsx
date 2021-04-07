import React from 'react'
import {View, Pressable, Text } from "react-native";
import {Screens} from '@src/types/screens'
import Actions from '@src/util/routes'
import styles from './style'


const ScreenMap:Screens = {
    nextInput: 'Next Input', 
    progressBarExample: 'Progress Bar'
}
const HomeScreen = () => {
    return (
        <View style={styles.ParentView}> 
            {Object.keys(ScreenMap).map((el:string) => (
                <Pressable onPress={() => Actions.navigate(el)} style={styles.PressableButton} key={el}>
                    <Text style={styles.PressableText}> {ScreenMap[el]} </Text>
                </Pressable>
            ))}
        </View>
    )
}

export default HomeScreen

