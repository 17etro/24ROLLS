import React from 'react';

import './wrapper.scss';
import '../../style/index.scss'

import Header from './Header/Header';
import Footer from './Footer/Footer';
import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu';
import MapBlock from './MapBlock/MapBlock';
import GreenTools from '../GreenTools/GreenTools';
import MobileCategories from './MobileCategories/MobileCategories';

const Wrapper = (props) => {

    const onCityChangeHandler = (cityName) => {
        props.setCity(cityName);
    }

    return (
        <>
        <div className="wrapper">
            <Header 
            {...props}
            onSetBaseName={props.onSetBaseName}
            city={props.city}
            setLang={props.setLang}
            onCityChange={onCityChangeHandler}
            isAuthorized={props.isAuthorized}
            />
            <GreenTools />
            <div className="custom-main">
                <LeftMenu 
                    {...props}
                    filters={props.filters}
                    categories={props.categories}
                    lang={props.lang}
                />
                <div className="content__column">
                    {props.children}
                    <div style={{marginTop: 'auto'}}>
                        <MapBlock
                        city={props.city} 
                        />
                    </div>
                </div>
                <RightMenu />
            </div>
            <MobileCategories 
            {...props}
            categories={props.categories}/>
            <Footer
            {...props}
            lang={props.lang}
            categories={props.categories} 
            />
        </div>
        </>
    );
};

export default Wrapper;