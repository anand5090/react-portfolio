import React from 'react'

function About() {
    return (
        <div name="about" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div  className=' pb-8'>
                <p className='text-4xl  font-bold inline border-b-4 border-gray-500'>
                   About
                </p>
                </div>
                <div>
                    <p className=' text-xl mt-20'>
                    As a recent MCA graduate and an aspiring full-stack developer, I am on an exciting journey to bridge the gap between theoretical knowledge and practical application. My academic journey has equipped me with a strong foundation in computer science and software development, and I am eager to channel this knowledge into real-world projects.
                    </p>

                    <br />

                    <p className='text-xl'>
                   
                    
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About
