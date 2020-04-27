import React from 'react'

import ImageSlider from './imgView/imgSlider'
import HorizontalSlider from './imgView/HorizontalSlider'
//overview
import FeatureIcons from './overview/featureIcons'
//detail
import MinorDetails from './productMinorDetails/minorDetails'

export default () => {
    return (
        <>
        <div className="row">
            <section className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <ImageSlider />
                <HorizontalSlider />
            </section>
            
            <section className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <MinorDetails />
            </section>
            </div>


            <div className="row">
            <section className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <FeatureIcons />
            </section>
            
            </div>
        </>
    )
}