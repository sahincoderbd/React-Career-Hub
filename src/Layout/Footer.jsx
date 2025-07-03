import React from 'react';

import Instagram from '../assets/Group.svg'
import Twiter from '../assets/Vector (1).svg'
import Facebook from '../assets/Group 10022.svg'


const Footer = () => {
    return (
        <div className='py-5 bg-[#1A1919]'>
           <footer className="">
           <div className="flex flex-col  text-secondary container mx-auto border-b border-secondary dark:border-secondary justify-between lg:flex-row gap-4 lg:gap-10 text-base-content py-10">
            <div className='flex-[30%] space-y-3 pr-8 '>
                <h2 className='text-3xl font-bold '>Career Hub</h2>
                <p>
                There are many variations of 
                passages of Lorem Ipsum but the majority have suffered alteration in some form.
                </p>
                <div className='flex gap-5 text-2xl text-center'>
                    
                    <a className='p-3 bg-secondary rounded-full w-14 h-14' href="#"><img className='w-full h-full' src={Facebook} alt="" /></a>
                    <a className='p-3 bg-secondary rounded-full w-14 h-14' href="#"><img className='w-full ' src={Twiter} alt="" /></a>
                    <a className='p-3 bg-secondary rounded-full w-14 h-14' href="#"><img className='w-full ' src={Instagram} alt="" /></a>
                </div>
            </div>
            <nav className='space-y-4 flex flex-col flex-nowrap flex-2/12'>
                <h6 className="footer-title">Services</h6>
                <a className="">Branding</a>
                <a className="">Design</a>
                <a className="">Marketing</a>
                <a className="">Advertisement</a>
            </nav>
            <nav className='space-y-2 flex flex-col flex-nowrap flex-2/12'>
                <h6 className="footer-title">Company</h6>
                <a className="">About us</a>
                <a className="">Contact</a>
                <a className="">Jobs</a>
                <a className="">Press kit</a>
            </nav>
            <nav className='space-y-2 flex flex-col flex-nowrap flex-2/12'>
                <h6 className="footer-title">Legal</h6>
                <a className="">Terms of use</a>
                <a className="">Privacy policy</a>
                <a className="">Cookie policy</a>
            </nav>
            <nav className='space-y-2 flex flex-col flex-nowrap flex-2/12'>
                <h6 className="footer-title">Legal</h6>
                <a className="">Terms of use</a>
                <a className="">Privacy policy</a>
                <a className="">Cookie policy</a>
            </nav>
            </div>
            {/* copy right section  */}
            <div className="">
            <div className='footer sm:footer-horizontal container mx-auto text-neutral-content items-center p-4'>
            <aside className="grid-flow-col items-center">
                
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <p>Powered by Career Hub</p>
            </nav>
            </div>
            </div>
           </footer>
        </div>
    );
};

export default Footer;