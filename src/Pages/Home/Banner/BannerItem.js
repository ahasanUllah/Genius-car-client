import React from 'react';
import { Link } from 'react-router-dom';
import './bannerItem.css';

const BannerItem = ({ slider }) => {
   const { img, id, next, prev } = slider;
   return (
      <div id={`slide${id}`} className="carousel-item relative w-full anchor">
         <div className="img-gradient ">
            <img src={img} className="w-[1280px] max-h-[38rem]" alt="img1" />
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-20   top-1/3">
            <div className="space-y-6">
               <h1 className="text-6xl text-white font-bold">
                  Affordable <br />
                  Price for car <br />
                  Servicing
               </h1>
               <p className="text-gray-200 w-3/5">
                  There are many variations of passages of available, but the majority have suffered alteration in some
                  form
               </p>
               <button className="btn btn-error mr-5">Discover More</button>
               <button className="btn btn-outline btn-warning">Latest Projects</button>
            </div>
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2  right-12 bottom-6">
            <a href={`#slide${prev}`} className="btn btn-circle btn-error mr-5 text-white">
               ❮
            </a>
            <a href={`#slide${next}`} className="btn btn-circle btn-error mr-5 text-white">
               ❯
            </a>
         </div>
      </div>
   );
};

export default BannerItem;
