import React from 'react'

//icons
import DriveEtaIcon from '@material-ui/icons/DriveEta';

//css
let flexStyle = {
    display: 'flex',
}

let textStyle = {
    color:'#414543'
}

export default () => {
    return (
        <div className="p-2">
            <h3>Overview</h3>
            <div className="row" style={{display:'flex' , flexWrap:'wrap'}}>
            <section className=" p-2 m-3" style={flexStyle}>
                <DriveEtaIcon  className="mr-1" />
                <h6 style={textStyle}>4 Wheel Drive</h6>
            </section>
            <section className=" p-2 m-3" style={flexStyle}>
                <DriveEtaIcon  className="mr-1" />
                <h6 style={textStyle}>4 Wheel Drive</h6>
            </section>
            <section className="p-2 m-3" style={flexStyle}>
                <DriveEtaIcon  className="mr-1" />
                <h6 style={textStyle}>4 Wheel Drive</h6>
            </section>
            <section className="p-2 m-3" style={flexStyle}>
                <DriveEtaIcon  className="mr-1" />
                <h6 style={textStyle}>4 Wheel Drive</h6>
                </section>
                <section className="p-2 m-3" style={flexStyle}>
                <DriveEtaIcon  className="mr-1" />
                <h6 style={textStyle}>4 Wheel Drive</h6>
            </section>
            <section className="p-2 m-3" style={flexStyle}>
                <DriveEtaIcon  className="mr-1" />
                <h6 style={textStyle}>4 Wheel Drive</h6>
            </section>
            <section className="p-2 m-3" style={flexStyle}>
                <DriveEtaIcon  className="mr-1" />
                <h6 style={textStyle}>4 Wheel Drive</h6>
            </section>
            <section className="p-2 m-3" style={flexStyle}>
                <DriveEtaIcon  className="mr-1" />
                <h6 style={textStyle}>4 Wheel Drive</h6>
            </section>
            </div>
        </div>
    )
}