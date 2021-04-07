import React from 'react'
import ProgressBar from 'react-native-form-progress'


const ProgressBarExample = () => {
    return (
        <ProgressBar 
		    currentProgress={6} 
			totalNumberOfProgressBars={8}
			colorOfProgressBar="#2E7D32"
		/>
    )
}


export default ProgressBarExample