import React from 'react';
import { useTranslation } from 'react-i18next';

import MainSlider from "./MainSlider";
import MainSwiper from "./components/MainSwiper";
import ConstructorSlider from '../../components/ConstructorSlider';
import SetsSlider from '../../components/SetsSlider';
import MainPopularGoods from './MainPopularGoods';
import MainWhyUs from "./MainWhyUs";
import MainFeedback from "./MainFeedback";
import MainBlog from './MainBlog';
import './index.scss';
import MainHeader from "./components/MainHeader";
import MainSocialNetworks from "./MainSocialNetworks";
import MainBottomBlock from "./MainBottomBlock";

const MainPage = (props) => {
    const {t} = useTranslation();

    return(
        <>
            <div className={'main'}>
                <MainSlider />
                { props.sliders && <MainSwiper {...props} slider={ props.sliders[0] } /> }
                <MainHeader title={t('main.title.1')} />
                { props.rollGoods && 
                    <>
                        <SetsSlider list={props.rollGoods} title={false} />
                        <ConstructorSlider items={props.rollGoods}/>
                    </>
                }
                <MainHeader title={t('main.title.2')} />
                {/* <MainPopularGoods /> */}
                <MainHeader title={t('main.title.3')} />
                <MainWhyUs />
                { props.sliders && <MainSwiper {...props} slider={ props.sliders[1] } /> }
                <MainFeedback />
                { props.sliders && 
                <>
                    <MainSwiper {...props} slider={ props.sliders[2] } />
                    <MainSwiper {...props} slider={ props.sliders[3] } />
                </> }
                {/* <MainBlog /> */}
                <MainHeader title={t('main.title.4')} />
                <MainSocialNetworks />
                <MainHeader title={t('main.title.5')} />
                <MainBottomBlock />
            </div>
        </>
    )
}

export default MainPage;