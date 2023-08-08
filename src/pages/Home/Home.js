import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Represent from '../../components/Represent/Represent'
import Slider from '../../components/Slider/Slider';
import itsMe from '../../resources/image/its-me.jpg'
import Button from '../../components/Button.js/Button';
import useSlider from '../../hook/UseSlider';
import RepresentTools from '../../components/RepresentTools/RepresentTools';

import './Home.css'
import Tabs from '../../components/Tabs/Tabs';

const Home = () => {

const { showSlider, selectedImage, openSlider, closeSlider } = useSlider();

return (
<div>
    <section className='welcome-part'>
      <div className='welcome-slogan-wrapper'>
        <h2 className='welcome-slogan'>"Втілюємо твої мрії в неповторний образ"</h2>
          <Button className="" text="Записатися" />
      </div>
    </section>
        <Represent
        representStyle='left'
        title='Мене звати Імя'
        text='Професійний візажист з великим досвідом у створенні неперевершених образів. Моє завдання - підкреслити вашу красу та підняти настрій, залишаючи вам яскраві спогади.'
        image={itsMe}
        />
      <RepresentTools/>
      <Gallery openSlider={openSlider} />
      {showSlider && selectedImage && <Slider image={selectedImage} closeSlider={closeSlider} />}
      <Tabs/>  
      <Represent
        representStyle='right'
        title='Оберіть мене для особливих моментів вашого життя.'
        text='Моя стильна робота та уважність до деталей зроблять вас неперевершеною на будь-якому заході. Довірте мені створення неповторного образу, який залишить яскраві спогади назавжди.'
        image={itsMe}
      />
</div>
  );
};

export default Home;