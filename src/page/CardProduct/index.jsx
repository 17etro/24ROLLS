import React from 'react';

import HeaderBlock from "./HeaderBlock";
import SetsSlider from '../../components/SetsSlider'
import './index.scss'
import {useCustomStore} from "../../context/useStore";
import {constructorSliderList} from "../../components/ConstructorSlider/list";
import useFetch from "../../api/useFetch";
import Spinner from "../../components/Spinner";
import ErrorIndicator from "../../components/Errors/ErrorIndicator";

const CardProduct = (props) => {
    const [response, error, isLoading] = useFetch(props.match.url)
    return (
        <div
            itemProp={'cardProduct'}
            itemScope
            className={'card-product'}
        >
            {isLoading && <Spinner /> }
            {error && <ErrorIndicator />}
            {
                response && <HeaderBlock food={response}/>
            }
            <SetsSlider list={constructorSliderList} title={true} />
        </div>
    )
}

export default CardProduct;