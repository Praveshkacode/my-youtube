import React from 'react'
import Button from './Button'

const list= ['All','Live','Gaming','Song','Comedy','AI','Tech','Cricket','News','Cooking']

const ButtonList = () => {

  return (
    <div className='flex'>
      {list.map((item,index)=>{
       return  <Button key={index} name={item}/>
      })}
      
      
      
    </div>
  )
}

export default ButtonList
