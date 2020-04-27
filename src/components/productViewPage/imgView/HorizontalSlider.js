import React from 'react'
//css
import '../../../util/main.css'

let imgDataSet = [
    {id:'1' , imgPath:'/logo512.png'},
    {id:'2' , imgPath:'/logo1.png'},
    {id:'2' , imgPath:'/logo512.png'},
    {id:'3' , imgPath:'/logo512.png'},
    {id:'4' , imgPath:'/logo1.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
    {id:'5' , imgPath:'/logo512.png'},
]

export default () => {
    return (
        <div className="productViewPage">
        <div className="imgView">
        <div className="HorizontalSlider">
            <div className="flex-container ml-2 mr-2">
                {
                    imgDataSet.map(item => {
                        return <img id={item.id} src={item.imgPath} className="box" />
                    })
                }
                </div>
                </div>
                </div>
        </div>
    )
}