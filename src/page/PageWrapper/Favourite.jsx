import React from 'react';
import { useTranslation } from 'react-i18next';
import {string} from "prop-types";

import './index.scss';
import CustomFoodBlock from "../../components/CustomFoodBlock";
import HeadingBlock from '../../components/HeadingBlock';
import {useCustomStore} from "../../context/useStore";

const Favourite = React.memo((props) => {
    const {state} = useCustomStore();
    const {t} = useTranslation();
    return (
        <div
            itemProp={'rollsContainer'}
            itemScope
            className={'rolls_container'}
        >
            <>
                <HeadingBlock title={t(props.title)} svg={true} />

                <div
                    itemProp={'rollsContainerBlock'}
                    itemScope
                    className={'rolls_container_block'}
                >
                    {
                        state.favourite.yourFavourite.length !== 0 ? state.favourite.yourFavourite.map(el =>
                                <CustomFoodBlock {...props} style={'open-modal'} key={el._id} food={el} />) :
                            <h3>{t('favourite.description')}</h3>
                    }
                </div>
            </>
        </div>
    )
});

Favourite.propTypes = {
    title: string.isRequired
}

export default Favourite;