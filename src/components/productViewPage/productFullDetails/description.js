import React from 'react'

//css
let descripStyle = {
    fontSize: '1rem',
    letterSpacing: .5,
    color: '#414543',
    lineHeight:1.3
}

export default () => {
    return (
        <div className='p-2'>
            <h3>Description</h3>
            <section className='p-2'>
            <h6 style={descripStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
            </section>
        </div>
    )
}