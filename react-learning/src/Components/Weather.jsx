import React from 'react'

const Weather = ({temparature}) => {
 
    if(temparature<15){
        return <h4>Its Cold Outside</h4>
    }else if(temparature<=16 && temparature>=25){
        return <h4>Its Nice Outside</h4>
    }else{
        return <h4>Its Hot Outside</h4>
    }
 
}

export default Weather