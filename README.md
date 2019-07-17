# Crossfade Slider

[![npm (scoped)](https://img.shields.io/npm/v/@fiveem/react-crossfade-slider.svg)](https://www.npmjs.com/package/@fiveem/react-crossfade-slider)

## Screenshots

![React Crossfade Slider](./docs/captured.gif)


## Install

```
npm i @fiveem/react-crossfade-slider
```

## Usage

```JSX
import Slider from '@fiveem/react-crossfade-slider'

<Slider images={this.state.images} period={2000} animationDuration={1000} containerStyle={this.state.containerStyle} imageStyle={this.state.imageStyle} />
```

## API
|name|type|sample value|description|
|----|----|------------|-----------|
|images|Array|`['url_image1', 'url_image2', 'url_image3']`|Images that will be displayed inside the slider|
|period|Number|`2000`|Duration of auto play (should be specified in miliseconds)|
|animationDuration|Number|`1000`|Duration of slide animation/transition (should be specified in miliseconds)`|
|containerStyle|Object||Style that will be applied on the container (slider)|
|imageStyle|Object||Style that will be applied on the image (slide)|

## License

react-crossfade-slider is released under the MIT license.