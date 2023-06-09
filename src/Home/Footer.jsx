import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-zinc-800 text-white">
  <div>
    <img className='w-1/4 rounded-2xl' src="https://th.bing.com/th/id/OIP.V4n4RRWhkY_FcPr3ZJ9-CgHaHa?pid=ImgDet&rs=1" alt="" />
    <p>Comic Verse.<br/>Action Figure Toy Seller.</p>
  </div> 
  <div>
    <span className="footer-title text-white">Comic Verse</span> 
    <a className="link link-hover text-white">Branding</a> 
    <a className="link link-hover text-white">Design</a> 
    <a className="link link-hover text-white">Marketing</a> 
    <a className="link link-hover text-white">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;