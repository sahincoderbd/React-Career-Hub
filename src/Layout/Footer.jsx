import React from 'react';

const Footer = () => {
    return (
        <div className='py-5'>
           <footer className=" bg-base-200 ">
           <div className="flex flex-col container mx-auto justify-between lg:flex-row gap-4 lg:gap-10 bg-base-200 text-base-content py-10">
            <div className='flex-[30%] space-y-3 pr-8'>
                <h2 className='text-3xl font-bold'>Career Hub</h2>
                <p>
                There are many variations of 
                passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                </p>

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
           </footer>
        </div>
    );
};

export default Footer;