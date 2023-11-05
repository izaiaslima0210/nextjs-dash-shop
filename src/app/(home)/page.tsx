import Image from 'next/image';
import Categories from './components/Categories';


export default function Home() {

  return (
    <div>
      <div className='p-5 flex row lg:flex-row content-center justify-center'>
        <Image suppressHydrationWarning
          src="/banner-home-01.png"
          height={0}
          width={0}
          className='h-auto w-full lg:max-w-2xl xl:max-w-4xl'
          sizes='100vw'
          alt='Até 55% de desconto!'
        />
      </div>
      <div className="p-5 mt-2 flex justify-items-center justify-center">
        <Categories />
      </div>
    </div>
  )
}
