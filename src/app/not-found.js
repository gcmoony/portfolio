import Image from 'next/image'
import cantFind from '/public/assets/doggoCantFind.png'

export default function PageNotFound() {
  return (
    <main className='text-center p-4'>
      <Image className='p-5' src={cantFind} alt="Image of something that can't find something"/>
      <h1 className='text-3xl m-2'>Uh oh!</h1>
      <p>We couldn&apos;t find what you&apos;re looking for. Maybe it&apos;s best we return home.</p>
      <a className='my-3 mx-auto p-3 rounded bg-yellow-300 opacity-80 hover:opacity-100 transition duration-200 block w-fit' href='/'>Go Home</a>
    </main>
  )
}