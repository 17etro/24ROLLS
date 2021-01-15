import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import {backendUrl} from '../../config/config';

import HeadingBlock from "../../components/HeadingBlock";
import './index.scss';

import Spinner from "../../components/Spinner";
import ErrorIndicator from "../../components/Errors/ErrorIndicator";

const Shares = React.memo((props) => {

    const {t} = useTranslation();

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ shares, setShares ] = useState([]);

    useEffect(() => {
        axios.get(backendUrl + '/actions/')
        .then(res => {
            console.log(res);
            setShares(res.data);
            setError(false);
        })
        .catch(err => {
            console.log(err, err.response);
            setError(true);
        })
        .finally(() => setLoading(false));
        ;
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <HeadingBlock title={t('shares.title')} svg={true} />
             {loading && <Spinner /> }
             {error && <ErrorIndicator />}
            {shares[0] &&
                <div className="masonry-layout">
                    {
                        shares.map(action =>
                            <div className="masonry-layout__panel" key={action._id}>
                                <div className="masonry-layout__panel__header">
                                    <img src={backendUrl + `/${action.image}`} alt="rolls"/>
                                </div>
                                <div className="masonry-layout__panel__content">
                                    <h4>{action.title}</h4>
                                    <p>{action.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            }
            {
                !shares[0] && !loading && !error &&
                <p>{'Пока что акций нет'}</p>
            }
        </div>
    );
});

export default Shares;