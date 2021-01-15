import React from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";

import CustomFoodBlock from "../../../../components/CustomFoodBlock";

import './index.scss';

const MainSwiper = (props) => {

    const {t} = useTranslation();

    return (
        <div className={'main-swiper'}>
            {props.slider && 
            <>
                <div className={'main-swiper_header'}>
                    <h1>
                        {props.slider.categoryId.name_ru}
                    </h1>
                </div>
                    <div className={'wrapper'}>
                        {
                            props.slider.items.map(el =>
                                <CustomFoodBlock
                                    {...props}
                                    key={el._id}
                                    food={el}
                                    style={false}
                                />
                            )
                        }
                    </div>
                <div className={'main-swiper_footer'}>
                    <button>
                        <Link to={props.match.path.slice(0, 3) + '/' + props.slider.categoryId.route}>
                            {t('button.more')}
                        </Link>
                    </button>
                </div>
            </>
            }
        </div>

    )
}

export default MainSwiper;