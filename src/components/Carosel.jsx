import React from 'react'
import image1 from "./../assets/image1.jpg";
import "./../App.css";

const Carosel = () => {
  return (
    <>
    <section>
        <div className="mx-[7em]">
        <div className="  p-5 flex justify-between">
          <h3 className="text-4xl uppercase">
            Join <span className="lowercase italic">our</span> community
          </h3>

          <button className="uppercase text-2xl border-b-2 border-[#363636]">
            Follow us on instagram
          </button>
        </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto w-auto">
            <div className="product-card__image">
              <img src={image1} alt="product" />
            </div>
            <div className="product-card__image">
              <img src={image1} alt="product" />
            </div>
            <div className="product-card__image">
              <img src={image1} alt="product" />
            </div>
            <div className="product-card__image">
              <img src={image1} alt="product" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Carosel