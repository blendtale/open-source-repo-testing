import React from 'react';
import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import { connect } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import StackNavigator from './stackNavigator'

export const navigationRef = React.createRef<NavigationContainerRef>() 
//as React.MutableRefObject<>

enableScreens();

export const Routes = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <StackNavigator />
        </NavigationContainer>
    )

}

const mapStateToProps = (state: any) => state

  
export default connect(mapStateToProps, {})(Routes);