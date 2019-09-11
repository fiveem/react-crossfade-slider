import React from 'react';
import PropTypes from 'prop-types';
import style from './Slider.scss';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeImage: 0
        };

        this.period = setInterval(() => {
            this.setState((state) => ({
                activeImage: state.activeImage === props.images.length - 1 ? 0 : state.activeImage + 1
            }))
        }, props.period)
    }

    render() {
        const { images, animationDuration, containerStyle, imageStyle } = this.props;
        const { activeImage } = this.state;

        return (
            <div className={style.crossfadeSlider} style={containerStyle}>
                {
                    images.map((image, index) => {
                        const customStyle = {
                            backgroundImage: `url(${image})`,
                            animationDuration: `${animationDuration / 1000}s`
                        };

                        return (
                            <div className={`${style.image} ${activeImage === index ? style.active : style.hidden }`}
                                 style={{...customStyle, ...imageStyle}}
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

Slider.defaultProps = {
    period: 2000,
    animationDuration: 1000
};

Slider.propTypes = {
    images: PropTypes.array.isRequired,
    period: PropTypes.number,
    animationDuration: PropTypes.number,
    containerStyle: PropTypes.oneOfType([
        PropTypes.object
    ]),
    imageStyle: PropTypes.oneOfType([
        PropTypes.object
    ])
};