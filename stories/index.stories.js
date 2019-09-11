import React from 'react';

import { storiesOf } from '@storybook/react';

import Slider from '../src';


storiesOf('Slider', module)
    .add('simple crossfade slider', () => {
        const images = [
           "https://www.emiandtabita.com/wp-content/uploads/2018/08/Alex-Cristina-_2.jpg",
           "https://www.emiandtabita.com/wp-content/uploads/2018/08/Alex-Cristina-_3.jpg",
           "https://www.emiandtabita.com/wp-content/uploads/2018/08/Alex-Cristina-_1.jpg",
        ];
        const containerStyle = {};
        const imageStyle = {};

        return <Slider images={images} period={2000} animationDuration={1000} containerStyle={containerStyle} imageStyle={imageStyle}/>
    });