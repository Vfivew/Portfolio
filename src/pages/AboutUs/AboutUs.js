import React from 'react';
import Represent from '../../components/Represent/Represent';
import itsMe from '../../resources/image/its-me.jpg'
import Gallery from '../../components/Gallery/Gallery';
import Slider from '../../components/Slider/Slider';
import useSlider from '../../hook/UseSlider';

const AboutUs = () => {

 const { showSlider, selectedImage, openSlider, closeSlider } = useSlider(); 

    return (
        <div>
        <Represent
        representStyle='left'
        title='Мене звати Імя'
        text='Професійний візажист з великим досвідом у створенні неперевершених образів. Моє завдання - підкреслити вашу красу та підняти настрій, залишаючи вам яскраві спогади.'
        image={itsMe}
        />
        <Gallery openSlider={openSlider} />
        {showSlider && selectedImage && <Slider image={selectedImage} closeSlider={closeSlider} />}
        </div>
    );
};

export default AboutUs;