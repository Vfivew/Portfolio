import React from 'react';
import './Represent.css'
import backgroundItem from '../../resources/image/bg-color-component.png'
import backgroundItemLine from '../../resources/image/bg-color-component-line.png'

const Represent = ({  representStyle, title, text, image }) => {
    if(representStyle === 'left') 
    return (
        <div className='introduce-myself-wrapper'>
            <section className='introduce-myself'>
                <h2 className='title-introduce'>{title}</h2>
                <p className='text-introduce'>{text}</p>
            </section>
            <div className='introduce-myself-image-wrapper'>
                <img className='introduce-myself-image' src={image} alt='Це я' />
                <img className='backgroundItem' src={backgroundItem} alt='stylebackground' />
                <img className='backgroundItemLine' src={backgroundItemLine} alt='stylebackgroundtwo' />
            </div>
        </div>
        );
    else return (
        <div className='introduce-myself-wrapper'>
             <div className='introduce-myself-image-wrapper'>
                <img className='introduce-myself-image' src={image} alt='Це я' />
                <img className='backgroundItem' src={backgroundItem} alt='stylebackground' />
                <img className='backgroundItemLine' src={backgroundItemLine} alt='stylebackgroundtwo' />
            </div>
            <section className='introduce-myself'>
                <h2 className='title-introduce'>{title}</h2>
                <p className='text-introduce'>{text}</p>
            </section>
        </div>
    )
};

export default Represent;