import React from 'react';
import style from './Slider.scss';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeImage: 0
        };

        console.log('perios ', props.period);

        this.period = setInterval(() => {
            this.setState((state) => ({
                activeImage: state.activeImage === props.images.length - 1 ? 0 : state.activeImage + 1
            }))
        }, props.period)
    }

    render() {
        const { images, animationDuration } = this.props;
        const { activeImage } = this.state;

        return (
            <div className={style.crossfadeSlider}>
                {
                    images.map((image, index) => {
                        const customStyle = {
                            backgroundImage: `url(${image})`,
                            animationDuration: `${animationDuration}s`
                        };

                        return (
                            <div className={`${style.image} ${activeImage === index ? style.active : style.hidden }`}
                                 style={customStyle}
                                 key={index}/>
                        );
                        
                    })
                }
            </div>
        );
    }

    componentWillUnmount() {
        clearInterval(this.period);
    }
}