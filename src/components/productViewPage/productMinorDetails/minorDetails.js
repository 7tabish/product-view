import React from 'react'
//material ui
import { Button } from '@material-ui/core'

//css
let baseStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}
export default () => {
    return (
        <div style={baseStyle}>
            <h2>Vehicale Name</h2>
            <h3>37$ /day</h3>
            <div><Button color='primary' variant="contained" size="large">Continue</Button></div>
            
        </div>
    )
}