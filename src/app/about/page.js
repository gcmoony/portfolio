import Image from 'next/image'
import myImg from '/public/assets/workME.jpg'
import CardHolder from '../components/CardHolder/CardHolder'
import Carousel from '../components/Carousel/Carousel'


export default function About() {
  return (
    <main className="p-4">
      <div className='flex justify-between flex-col lg:flex-row items-center'>
        <Image
          src={myImg}
          alt='Picture of George'
          className='  w-64'
        />
        <div className="text-center m-10">
          <h1 className="text-4xl m-5">Hey there! <span className="inline-block">👋</span></h1>
          <p className='text-xl'>I&apos;m George Cadel-Munoz, an aspiring software developer.</p>
        </div>
      </div>

      <div className='m-10 '>

        <h2 className='text-center text-3xl'>About Me</h2>

        {/* Certificates */}
        <div className='flex items-center p-5 gap-4 flex-col lg:flex-row'>

          <div className='flex-1'>
            <h3 className='underline text-center m-2'>LEARNING</h3>
            <p>There&apos;s lots to learn out there, and I&apos;ve learned a lot. While I can&apos;t document every bit of knowledge I know, I can share some of the certifications I&apos;ve completed.</p>
          </div>

          <div className='self-stretch outline outline-1 hidden lg:block'></div>
          <CardHolder style='flex-1 flex flex-col gap-2'/>

        </div>

        {/* Experience */}
        <div className='flex items-center p-5 gap-4 flex-col-reverse lg:flex-row'>
          <div className='flex-1'> 
            <Carousel />
          </div>

          <div className='self-stretch outline outline-1 hidden lg:block'></div>

          <div className='flex-1'>
            <h3 className='underline text-center m-2'>EXPERIENCE</h3>
            <p>While there&apos;s plenty of information to read and study, many say nothing else beats experience, and I couldn&apos;t agree more. I believe the best way to learn is by doing.</p>
          </div>

        </div>

        
      </div>

      <div className='m-5'>
        <h2 className='text-center text-3xl'>Projects</h2>
      </div>
    </main>
  )
}