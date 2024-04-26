import React from 'react'

function Wishlist({addCart}) {

  console.log(addCart)
  return (
   <>
   <h1>Wishlist</h1>

   
   {
        addCart.map((i)=>(
         <Card
         imgUrl={i.imgUrl}
         title={i.title}
         description={i.description}
         />
        ))
      }
   </>
  )
}

export default Wishlist
