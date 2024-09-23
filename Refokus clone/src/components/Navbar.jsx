import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-3 py-6 flex justify-between items-center border-b-[1px] border-zinc-700 sticky top-0 z-50 bg-zinc-900'>
        <div className='nleft flex gap-32 items-center'>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='links flex gap-14'>
            {['Home', 'Work', 'Culture', '', 'News'].map((elem, index)=> elem.length === 0 ? <span key={index} className='w-[1.5px] h-7 bg-zinc-700'></span> : (<a key={index} className='flex items-center gap-1' href="#"> {index === 1 && <span style={{boxShadow : '0 0 0.25em #00FF19'}} className='inline-block w-1.5 h-1.5 rounded-full bg-green-500'></span>} {elem}</a>))}
            
        </div>
        </div>
        <Button/>
    </div>
    
  )
}

export default Navbar