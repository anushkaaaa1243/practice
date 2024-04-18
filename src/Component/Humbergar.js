
import React, { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5"

const Humbergar = () => {
    const [open, setOpen] = useState(false)
    const click=(()=>{
        if(open===true){
            setOpen(false)
        } else{
            setOpen(true)
        }
    })
   
    return (
    <div>
    <div  className=' md:hidden gap-5  text-4xl p-5  '>
 < IoReorderThreeOutline onClick={(()=>(click()))}/>
    </div>
    <div className={`md:flex-row gap-5  text-2xl  flex md:block p-5  flex-col h-48 ${open? '': "hidden"}  `}>
    <a href='/Home' className='mx-5'>Home</a>
    <a href='/Service ' className='mx-5'>Service</a>
    <a href='/Account' className='mx-5'>Account</a>
    <a href='/Login' className='mx-5'>Login</a>
    
    </div>
    </div>
  )
}

export default Humbergar