import React,{} from 'react'
import ForwardIcon from '../assets/images/icon-forward.png'
import DownIcon from '../assets/images/downArrow.png'
import { motion } from "framer-motion";
import { item } from '../utility/motionVariants'


export default function CardCategory({ img, titlCategory }) {
    return (
        <motion.div  variants={item} className=' relative w-52 h-54 justify-center'>
            <div className='flex h-full items-end justify-center z-20'>
                <div className={`flex items-end shadow-xl cursor-pointer rounded-lg h-32 w-44
                ${
                    titlCategory === 'Arcade' ? 'bg-orange-400 shadow-orange-400/50' : 
                    titlCategory === 'Strategy' ? 'bg-rose-500 shadow-rose-400/50' : 
                    titlCategory === 'Action' ? 'bg-emerald-500 shadow-emerald-400/50' : 
                    null
                }`} >
                    <div className='h-20 font-extrabold text-white w-full px-5 flex justify-between items-center'>
                        <h1>
                            {titlCategory}
                        </h1>
                        <button className='bg-forward w-6 h-6 flex items-center justify-center rounded-full'>
                            <img  className=' object-cover w-3 h-3' src={ForwardIcon} />
                        </button>

                    </div>
                </div>
            </div>
            {!img &&
                <React.Fragment>
                    <div className='absolute top-16 mx-auto left-4 -z-0 flex items-end shadow-xl bg-blue-500  rounded-lg h-32 w-44' />
                    <div className='absolute top-18 left-4 mx-auto -z-0 flex items-end shadow-xl bg-emerald-500 rounded-lg h-32 w-44' />
                    <div className='absolute top-22 mx-auto left-4 -z-0 flex items-end shadow-xl bg-purple-500  shadow-purple-400/50 rounded-lg h-32 w-44' >
                        <div className='h-20 font-extrabold text-white w-full px-5 flex justify-between items-center'>
                            <h1>
                                {titlCategory}
                            </h1>
                            <button className='bg-forward w-6 h-6 flex items-center justify-center rounded-full'>
                            <img className='rotate-90 object-cover w-3 h-3' src={ForwardIcon} />
                            </button>
                        </div>
                    </div>
                </React.Fragment>
            }
            {img &&
                <div className='absolute top-0 mx-auto left-custom cursor-pointer'>
                    <div className='bg-forward rounded-full flex items-center justify-center'>
                        <img  className='object-cover bg-red-50 rounded-lg h-36 w-36' src={img} />
                    </div>
                </div>}
        </motion.div>
    )
}
