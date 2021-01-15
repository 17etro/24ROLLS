import React from 'react';
import { backendUrl } from '../../config/config';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTranslation} from "react-i18next";
import LazyLoad from 'react-lazy-load';

import './index.scss';
import {useCustomStore} from "../../context/useStore";
import {ACTIONS} from "../../context/providerContext";

const SetsSlider = (props) => {
    const {dispatch} = useCustomStore();
    const {t} = useTranslation()
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1550,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1060,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
            ]
        };
        return (
            <div
                itemProp={'setsSlider'}
                itemScope
                className={'sets_slider'}
            >
                {
                    props.title && (
                        <div
                            itemProp={'headerBlog'}
                            itemScope
                            className={'header-block'}
                        >
                            <div
                                itemProp={'title'}
                                className={'header-block_title'}
                            >
                                <h3 itemProp={'name'}>
                                    {t('components.setsSlider.title')}
                                </h3>
                            </div>
                        </div>
                    )
                }
                <Slider
                    {...settings}
                    itemProp={'sliderBlock'}
                    itemScope
                    className={'slider-block'}
                >
                    {
                        props.list.map(el =>
                            <div
                                itemProp={'sliderBlockList'}
                                key={el._id}
                                className={'list'}
                            >
                                <div
                                    itemProp={'sliderBlockImage'}
                                    className={'image'}
                                >
                                    <LazyLoad
                                    debounce={false}
                                    offsetVertical={500}
                                    >
                                        <img
                                            itemProp={'img'}
                                            itemType={'url'}
                                            src={backendUrl + '/' + el.image}
                                            alt=""
                                            width={'120px'}
                                            height={'80px'}
                                        />
                                    </LazyLoad>
                                </div>
                                <p>{el.name_ru}</p>
                                <span
                                    onClick={() => dispatch({type: ACTIONS.ADD_TO_BASKET_YOUR_SET, payload: el})}
                                >+</span>
                            </div>
                        )
                    }

                </Slider>
            </div>
        );
}

export default SetsSlider;