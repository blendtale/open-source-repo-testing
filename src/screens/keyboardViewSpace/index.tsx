import React from 'react'
import {
	View,
	Text,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native'
import styles from './style'
import NextTextInput from 'react-native-next-input'
import KeyboardViewSpacer from 'react-native-keyboard-view-space'

const KeyboardViewSpacerExample = () => {

	const otpInputHandler =  (combinedValueArray:Array<string>, currentValue:string, refForTheCurrentValue:number) => {
			console.log(combinedValueArray, currentValue,  refForTheCurrentValue)
	}

		return (
			<KeyboardViewSpacer>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.container}>
						<Text style={[styles.title]}>Enter One Time Password</Text>
						<NextTextInput
							noOfTextInput={4}
							textInputStyle={styles.textBox}
							onChangeValue={otpInputHandler}
							parentViewStyle={styles.textBoxes}
						/>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardViewSpacer>
		)
	
}

export default KeyboardViewSpacerExample