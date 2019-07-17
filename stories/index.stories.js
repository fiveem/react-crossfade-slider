import React from 'react';

import { storiesOf } from '@storybook/react';

import Slider from '../src';


storiesOf('Slider', module)
    .add('simple crossfade slider', () => {
        const images = [
           "https://cdn.pixabay.com/photo/2016/09/30/22/23/autumn-landscape-1706549_960_720.jpg",
           "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
           "https://live.staticflickr.com/5346/8760725526_a53124b1b5_b.jpg",
        ];
        const containerStyle = {};
        const imageStyle = {};

        return <Slider images={images} period={2000} animationDuration={1000} containerStyle={containerStyle} imageStyle={imageStyle}/>
    });