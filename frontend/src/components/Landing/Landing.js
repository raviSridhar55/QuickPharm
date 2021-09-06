import React from 'react';
import pharamacyVector from '../../Assets/vectors/Pharmacist-amico.svg';
import typeface from '../../Assets/logos/typeface.png';

const Landing = () => {
  return (
    <>
      <section className='landing '>
        <img
          src={pharamacyVector}
          className='landing-vector'
          alt='pharamacy-Vector'
        />
        <aside className='landing-main'>
          <div className='landing-details'>
            <div className='landing-desc'>
              <img className='typeface' src={typeface} alt='typeface' />
              <p className='subtitle'>
                Find Your Medicines At Your Nearby Pharmacies
              </p>
            </div>
            <article className='landing-search'>
              <div className='pharmacy-search'>
                <input
                  className='pincode-search'
                  type='text'
                  placeholder='Enter Pincode'
                />
                <button className='btn btn-find'>Find</button>
              </div>
            </article>
            <div className='landing-auth-buttons'>
              <button className='btn btn-border log'>login</button>
              <button className='btn btn-solid signup'>sign up</button>
            </div>
          </div>
          <div className='ribbon' />
        </aside>
      </section>
      <div className='title'>
        <h1>Features</h1>
        <div className='title-underline' />
      </div>
      <section className='landing-showcase'>
        <div className='showcase-1'></div>
        <div className='showcase-2'></div>
        <div className='showcase-3'></div>
      </section>
    </>
  );
};

export default Landing;
