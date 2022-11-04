import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import './Banner.css';
import BannerItem from './BannerItem';

const bannerData = [
   {
      img: img1,
      prev: 6,
      id: 1,
      next: 2,
   },
   {
      img: img2,
      prev: 1,
      id: 2,
      next: 3,
   },
   {
      img: img3,
      prev: 2,
      id: 3,
      next: 4,
   },
   {
      img: img4,
      prev: 3,
      id: 4,
      next: 5,
   },
   {
      img: img5,
      prev: 4,
      id: 5,
      next: 6,
   },
   {
      img: img6,
      prev: 5,
      id: 6,
      next: 1,
   },
];

const Banner = () => {
   return (
      <div className="carousel w-full max-h-128">
         {bannerData.map((slider) => (
            <BannerItem key={slider.id} slider={slider}></BannerItem>
         ))}
         {/* <div id="slide1" className="carousel-item relative w-full">
            <div className="img-gradient ">
               <img src={img1} className="w-[1280px] max-h-[38rem]" alt="img1" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-20   top-1/3">
               <div className="space-y-6">
                  <h1 className="text-6xl text-white font-bold">
                     Affordable <br />
                     Price for car <br />
                     Servicing
                  </h1>
                  <p className="text-gray-200 w-3/5">
                     There are many variations of passages of available, but the majority have suffered alteration in
                     some form
                  </p>
                  <button className="btn btn-error mr-5">Discover More</button>
                  <button className="btn btn-outline btn-warning">Latest Projects</button>
               </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2  right-12 bottom-6">
               <a href="#slide4" className="btn btn-circle btn-error mr-5 text-white">
                  ❮
               </a>
               <a href="#slide2" className="btn btn-circle btn-error mr-5 text-white">
                  ❯
               </a>
            </div>
         </div> */}
      </div>
   );
};

export default Banner;
