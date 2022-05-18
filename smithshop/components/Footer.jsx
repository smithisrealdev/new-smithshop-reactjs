import React from 'react'
import FacebookIcon from '../assets/images/facebook.png'
import TwitterIcon from '../assets/images/twitter.png'
import LinksedInIcon from '../assets/images/Linkedin.png'
import GithubIcon from '../assets/images/github.png'
import AnimationLottie from '../utility/animationLottie'
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
const Links = styled(Link)(({ theme }) => ({
    color: '#475569'
}));

const ContactList = [
    {
        id: 1,
        img: FacebookIcon,
        source: 'https://www.facebook.com/apichat.naumtoon'
    },
    {
        id: 2,
        img: TwitterIcon,
        source: 'https://twitter.com/l_smithisreal'
    },
    {
        id: 3,
        img: LinksedInIcon,
        source: 'https://www.Linksedin.com/in/apichet-nuamtun-10a3841b3/'
    },
    {
        id: 4,
        img: GithubIcon,
        source: 'https://github.com/smithisreal'
    },
]

export default function Footer() {
    return (
            <div className="grid grid-cols-4 border-t-2 border-bottom-nav px-20 py-10">
                <div className="flex">
                    <div className='flex w-full h-2/6 items-center'>
                        <div className='w-24 h-20'>
                            <AnimationLottie />
                        </div>
                        <h1 className=' font-extrabold text-rose-500 text-2xl'>
                            SmithShop
                    </h1>
                    </div>

                </div>
                <div className='flex gap-2 flex-col text-slate-600'>
                    <h1 className=" font-bold text-black">
                        SmithShop
                </h1>
                    <Links href="#" underline="none">
                        <a>
                            About Us
                    </a>
                    </Links>
                    <Links href="#" underline="none">
                        <a>
                            Support Hub
                    </a>
                    </Links>
                    <Links href="#" underline="none">
                        <a>
                            Contact
                    </a>
                    </Links>
                    <Links href="#" underline="none">
                        <a>
                            FAQ
                    </a>
                    </Links>
                </div>
                <div className='flex gap-2 flex-col text-slate-600'>
                    <h1 className=" font-bold text-black">
                        Our Product
                    </h1>
                    <Links href="#" underline="none">
                        <a>
                            Games
                    </a>
                    </Links>
                    <Links href="#" underline="none">
                        <a>
                            Cards and Points
                    </a>
                    </Links>
                    <Links href="#" underline="none">
                        <a>
                            Subscriptions
                    </a>
                    </Links>
                    <Links href="#" underline="none">
                        <a>
                            DLC
                    </a>
                    </Links>
                    <Links href="#" underline="none">
                        <a>
                            Software
                    </a>
                    </Links>
                </div>

                <div className='flex gap-2 flex-col text-slate-600'>
                    <h1 className=" font-bold text-black">
                        Follow Us
                </h1>
                    <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-3'>
                            {ContactList.map((list) => {
                                return (
                                    <Links key={list.id} href={list.source} underline="none" target='_blank'>
                                        <a className="border-1 rounded-full flex items-center justify-center p-4">
                                            <img src={list.img} className=" object-cover" width={28} height={28} />
                                        </a>
                                    </Links>
                                )
                            })}
                        </div>
                        <div className="flex flex-1 gap-2">
                            <h1 className=" font-bold text-black">
                                Credit design by
                        </h1>
                            <Links href="https://dribbble.com/selecto" underline="none" target='_blank'>
                                <a >
                                    SELECTO
                            </a>
                            </Links>

                        </div>
                    </div>
                </div>
            </div>

    )
}
