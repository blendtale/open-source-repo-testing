import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    ParentView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    PressableButton: {
        marginTop: 10, 
        marginBottom: 10,
        width: 120,
        height: 30, 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4caf50',
        borderRadius: 5
    },
    PressableText: {
        color: 'white'
    }

});

export default styles;