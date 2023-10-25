import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
//import nextjs from '../assets/nextjs.png'
import github from '../assets/github.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import django from '../assets/django.png'
import database from '../assets/database.png'
function Experience() {

     const techs = [
        {
            id:1,
            src:html,
            title:'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'React JS',
            style: 'shadow-blue-500'
        },
        {
            id:5,
            src:tailwind,
            title:'TAILWIND',
            style: 'shadow-sky-400'
        },
        {
            id:6,
            src:node,
            title:'Node JS',
            style: 'shadow-orange-500'
        },
        {
            id:7,
            src:django,
            title:'Django',
            style: 'shadow-green-500'
        },
        {
            id:8,
            src:database,
            title:'MySQL',
            style: 'shadow-gray-900'
        },
        {
            id:8,
            src:github,
            title:'GitHub',
            style: 'shadow-gray-500'
        },
     ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-auto text-white md:h-screen'>
      <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full  text-white'>
        <div className=''>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
             <p className=' py-6'>These are the technologies I've worked with</p>
        </div>


        <div className=' w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-2 sm:px-0'>
        {techs.map(({id,src,title,style})=>(
          <div 
          key={id}
          className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
          <img src={src} alt="" className=' w-20 mx-auto'/>  
          <p className=' mt-4'>{title}</p>
        </div>
        ))}

           
        </div>
      </div>
    </div>
  )
}

export default Experience