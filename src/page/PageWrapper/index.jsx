import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../../config/config';
import { useTranslation } from 'react-i18next';
import { useCustomStore } from '../../context/useStore';
import {string} from "prop-types";

import './index.scss';
import CustomFoodBlock from "../../components/CustomFoodBlock";
import HeadingBlock from '../../components/HeadingBlock';
import MobileFilters from '../../components/MobileFilters/MobileFilters';
import useFetch from "../../api/useFetch";
import Spinner from "../../components/Spinner";
import ErrorIndicator from "../../components/Errors/ErrorIndicator";

const PageWrapper = React.memo((props) => {
    const {t} = useTranslation();
    const [ response, error, isLoading ] = useFetch(props.url);
    const [ filteredGoods, setFilteredGoods ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ err, setErr ] = useState(false);

    const { state, dispatch } = useCustomStore();


    useEffect(() => {

        if (response) {
            setFilteredGoods(response);
        }

        if (state.filterMode) {
            setLoading(true);
            axios.get(backendUrl + `/products/filter/category/${props.categoryId}/${state.filterMode}`)
                .then(res => {
                    console.log(res);
                    setFilteredGoods(res.data);
                    setErr(false);
                })
                .catch(err => {
                    console.log(err, err.reponse);
                })
                .finally(() => setLoading(false));
        }
    }, [ state.filterMode, response ]);
    
    return (
        <div
            itemProp={'rollsContainer'}
            itemScope
            className={'rolls_container'}
        >
            {!err && !error &&
                <>
                    <HeadingBlock title={t(props.title)} svg={true} />
                    {<MobileFilters filters={props.filters} />}
                </>
            }
            {( isLoading || loading ) && <Spinner /> }
            {(error || err ) && !isLoading && !loading && <ErrorIndicator />}
            {
                filteredGoods 
                && !isLoading 
                && !loading 
                &&  !err
                && !error &&
                    <div
                        itemProp={'rollsContainerBlock'}
                        itemScope
                        className={'rolls_container_block'}
                    >
                        {
                            filteredGoods.map(el =>
                                <CustomFoodBlock {...props} style={'open-modal'} key={el._id} food={el} />
                            )
                        }
                    </div>
            }
            {
                !filteredGoods[0] 
                && !isLoading 
                && !loading 
                &&  !err
                && !error &&
                <p> {'В этой категории нет товаров с таким фильтром...'} </p>
            }
        </div>
    )
});

PageWrapper.propTypes = {
    title: string.isRequired,
    url: string
}

export default PageWrapper;