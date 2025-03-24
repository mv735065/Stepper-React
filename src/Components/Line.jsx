import React from 'react'

const Line = ({presentStep,number}) => {
    const colorClasses = {
   

        green: "bg-green-500",
        white: "bg-white",
      };
    
    let color=(presentStep>number) ?'green':'white';
    
  return (
    <div className= {`border border-gray-300  w-full h-0.5 p-0.5  ${colorClasses[color]}`}></div>
  )
}

export default Line