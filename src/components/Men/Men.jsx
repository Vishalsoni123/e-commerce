import React from 'react'
import Card from '../Card/Card'

function Men() {

    const data=[
        {
          imgUrl:'https://cdn.pixabay.com/photo/2015/01/07/18/11/shirts-591750_640.jpg' ,    
            title:'men shirts',
            description:'cotton shirts '
        },
    
    
        {
          imgUrl:'https://cdn.pixabay.com/photo/2017/06/21/20/51/tshirt-2428521_640.jpg' ,    
            title:' T shitrs ',
            description:' cotton t shirts '
        },
        {
          imgUrl:'https://cdn.pixabay.com/photo/2015/05/07/13/43/watch-756487_640.jpg',
          title:' men watches  ',
          description:'I watch , 3inch display'
    
        },
        {
          imgUrl:'https://cdn.pixabay.com/photo/2015/08/05/09/55/mens-shoes-875950_640.jpg',
          title:' men shoes ',
          description:' casual men shoes '
        },
        {
          imgUrl:'https://cdn.pixabay.com/photo/2014/08/10/18/00/razor-414909_640.jpg',
          title:'shaving kit',
          description:'nivea men shaving kit',
        },
        {
          imgUrl:'https://cdn.pixabay.com/photo/2015/09/06/00/55/sunglasses-926791_640.jpg',
          title:'Aviators',
          description:'mens sunglasses',
        },
        {
          imgUrl:'https://cdn.pixabay.com/photo/2017/10/13/05/26/silk-tie-2846862_640.jpg',
          title:"Men's tie",
          description:'Stylish formal tie for men',
        },
        {
          imgUrl:'https://cdn.pixabay.com/photo/2021/02/07/14/18/earbuds-5991409_640.jpg',
          title:'earbuds',
          description:'dolby sound, active noise cancelation'
        }
      ]
  return (
    <>
    <div className='container'>
      {
        data.map((i)=>(
         <Card
         imgUrl={i.imgUrl}
         title={i.title}
         description={i.description}
         />
        ))
      }
    </div>
    </>
  )
}

export default Men
