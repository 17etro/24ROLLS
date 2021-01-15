import React, {Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from "./context/providerContext";
import store from 'store';
import './localization/i18n';

const Root = () => {

    // const city = store.get('24rolls') ? store.get('24rolls').customOptions.city : null;

    // let defaultBaseUrl;
    // if ( city === 'Dnipro' ) {
    //     defaultBaseUrl = '/dp';
    // } else if ( city === 'Zaporijja' ) {
    //     defaultBaseUrl = '/zp';
    // } else {
    //     defaultBaseUrl = '/';
    // };

    const [ currentUrl, setCurrentUrl ] = useState('/dp');

    const onSetCurrentUrl = (name) => {
        setCurrentUrl(name);
    }

    return (
        <BrowserRouter>
            <StateProvider>
                <Suspense fallback={<div>loading...</div>}>
                    <Route path={'/dp'} render={(props) => <App {...props} onSetBaseName={onSetCurrentUrl} />} 
                    />
                    <Redirect exact from="/" to={'/dp'} />
                </Suspense>
            </StateProvider>
        </BrowserRouter>
    );
};

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();