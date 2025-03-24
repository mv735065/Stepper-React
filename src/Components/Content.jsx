import React from 'react'

const Content = ({presentStep}) => {
   let contentText=[
    "Add contact details for further communication.",
    "Add shipping address for delivery. ",
    "Complete Payment to the order. ",
    "Ready to get deliverd .",
    "Order Deliverd successfully "
   ]

  return (
   
    <p  className='text-center mt-4 font-bold text-xl'>{contentText[presentStep-1]}</p>
   
   
  )
}

export default Content