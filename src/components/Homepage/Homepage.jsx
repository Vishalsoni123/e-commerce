import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import Slider from './Slider';
import './Homepage.css'
function Homepage({item}) {
    
      const data=[
    {
      imgUrl:'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg' ,    
        title:'Apple mackbook',
        description:'4gb ram , 128gb hard disk'
    },


    {
      imgUrl:'https://cdn.pixabay.com/photo/2016/03/06/02/27/lipsticks-1239622_640.png' ,    
        title:'lipstick',
        description:'black, blue shades'
    },
    {
      imgUrl:'https://cdn.pixabay.com/photo/2022/11/16/13/39/cuddly-toys-7596017_640.jpg',
      title:' Toys',
      description:' soft toys for kids '
    },
    {
      imgUrl:'https://cdn.pixabay.com/photo/2017/02/20/15/28/home-2082922_640.jpg',
      title:'Decorative',
      description:'Home decors',
    },
    {
      imgUrl:'https://cdn.pixabay.com/photo/2016/12/23/07/49/table-setting-1926936_640.jpg',
      title:'Kitchen acessories ',
      description:' Dining set ',
    },
    {
      imgUrl:'https://cdn.pixabay.com/photo/2015/05/07/13/43/watch-756487_640.jpg',
      title:' I watch ',
      description:'I watch , 3inch display'

    },
    {
      imgUrl:'https://cdn.pixabay.com/photo/2015/08/05/09/55/mens-shoes-875950_640.jpg',
      title:'men shoes ',
      description:'casual and formal shoes'
    },
    {
      imgUrl:'https://cdn.pixabay.com/photo/2021/02/07/14/18/earbuds-5991409_640.jpg',
      title:'earbuds',
      description:'dolby sound, active noise cancelation'
    }

  ]
  const [product, setproduct] = useState([data])
  
  item = product

console.log(item);
   return(
    <>
    <div className='slider-space' >
    <Slider/>
    </div>
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
  );

  
}

export default Homepage

