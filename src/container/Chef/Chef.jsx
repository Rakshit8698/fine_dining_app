import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div >

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word " />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>Anyday is a Brisbane based collective of restaurants founded by </p>
        </div>
        <p className='p__opensans'>Tyron Simon, Bianca Marchi, Ben Williamson and Frank Li. First founded in 2014 with a single venue, it has now grown to several, all based in Brisbane’s Fortitude Valley, with plans for many more. The existing venues are some of Brisbane’s most critically acclaimed establishments; that individually embody the values and the culinary culture of Brisbane, through their unique individual personalities. They include award-winning restaurants, bars and a bakery. </p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef and Founder</p>
        <img src={images.sign} alt='sign' />
      </div>


    </div>
  </div>
)

export default Chef;
