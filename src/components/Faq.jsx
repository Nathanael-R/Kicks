import {FaArrowDown} from 'react-icons/fa'
import coloured from '../assets/colourful.png'
const Faq = () => {
  return (
    <section className="px-[10%] h-[100vh] flex justify-center items-center"> 
        <div className="flex">
            <div className="">
                <img src={coloured} alt="" srcset="" />
            </div>
            <div className="bg-white flex flex-col p-12 justify-evenly">
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer"><p className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer"><p className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer"><p className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer"><p className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer"><p className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
            </div>
        </div>
    </section>
  )
}

export default Faq