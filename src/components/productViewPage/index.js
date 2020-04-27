import React from 'react'

//css
import '../../util/main.css'

//letView
import LeftView from './leftView/index'

export default () => (
    <div className="grid-Container">
        <section className="leftView">
            <LeftView />
        </section>

        <section className="rightView">
        </section>
    </div>
)