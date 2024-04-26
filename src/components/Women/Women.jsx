import React from 'react'
import Card from '../Card/Card'

function Women() {
    const data=[
        {
          imgUrl:'https://cdn.pixabay.com/photo/2015/08/10/20/14/purse-883112_640.jpg' ,    
            title:'Women purse',
            description:'leather purse'
        },
    
    
        {
          imgUrl:'https://cdn.pixabay.com/photo/2016/03/06/02/27/lipsticks-1239622_640.png' ,    
            title:'women lipstick',
            description:'lasts 24 hrs'
        },
        {
          imgUrl:'https://cdn.pixabay.com/photo/2022/08/16/04/52/jewel-7389356_640.jpg',
          title:' Diamond rings',
          description:'24 carat diamond'
    
        },
        {
          imgUrl:'https://cdn.pixabay.com/photo/2015/05/26/09/48/chain-784422_640.jpg',
          title:'women necklace',
          description:' silver casted necklace'
        },
        {
          imgUrl:'https://cdn.pixabay.com/photo/2015/01/31/11/55/jewelry-618429_640.jpg',
          title:'women bracelet',
          description:' gold and silver bracelets'
        },
        {
          imgUrl:'https://cdn.pixabay.com/photo/2015/03/20/22/08/eyeshadow-682998_1280.jpg',
          title:'Mekeup kit',
          description:'Women Makeup kit',
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

export default Women
