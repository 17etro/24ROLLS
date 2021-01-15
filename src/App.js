import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { backendUrl } from './config/config';
import { Switch, Route, Redirect } from 'react-router-dom';
import store from 'store';
import Modal from './components/UI/Modal/Modal';
import ScrollToTop from './tools/ScrollToTop';
import ErrorBoundary from "./components/Errors/ErrorBoundary";
import ErrorIndicator from './components/Errors/ErrorIndicator/index';
import Spinner from './components/Spinner/index';

//wrapper 
import Wrapper from './components/Wrapper/Wrapper';
//wrapper for mobile menu
import WrapperForMobile from './components/Wrapper/WrapperForMobile/WrapperForMobile';

//pages

import Main from './page/Main';
import Order from './page/Order/index';

//auth
import LogOut from './components/Auth/LogOut/LogOut';
import ConfirmAccount from './components/Auth/ConfirmAccount/ConfirmAccount';
import RecoverPassword from './components/Auth/RecoverPassword/RecoverPassword';

import './app.scss';

// lazy
const Delivery = React.lazy(() => import('./page/Delivery/index'));
const AboutUs = React.lazy(() => import('./page/AboutUs/index'));
const Shares = React.lazy(() => import('./page/Shares/index'));
const Favourite = React.lazy(() => import('./page/PageWrapper/Favourite'));
const BlogAll = React.lazy(() => import('./page/BlogAll/index'));
const BlogArticle = React.lazy(() => import('./page/BlogArticle/index'));

const PageWrapper = React.lazy(() => import('./page/PageWrapper'));
const CardProduct = React.lazy(() => import('./page/CardProduct'));

const MobileMenu = React.lazy(() => import('./page/MobileMenu/MobileMenu'));
const MobileOrder = React.lazy(() => import('./page/MobileOrder/MobileOrder'));

const Auth = React.lazy(() => import('./page/Auth/Auth'));


function App(props) {

    const [ isAuthorized, setAuthorized ] = useState(false);
    const [ city, setCity ] = useState(null);
    const [ lang, setLang ] = useState(null);
    const [ cityModal, setcityModal ] = useState(false);

    const [ categories, setCategories ] = useState(null);
    const [ filters, setFilters ] = useState(null);
    const [ sliders, setSliders ] = useState(null);
    const [ rollGoods, setRollsGoods ] = useState(null);

    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    useEffect(() => {

            setLoading(true);
            setError(false);

            axios.get(backendUrl + '/products/filters')
                    .then(res => {
                        setFilters(res.data.fils)
                        setError(false);
                    })
                    .catch(err => {
                        console.log(err, err.response);
                        setError(true);
                        setLoading(false);
            })

            axios.get(backendUrl + '/products/categories')
                .then(res => {
                    setCategories(res.data.cats);
                    setError(false);
                })
                .catch(err => {
                    console.log(err, err.response);
                    setError(true);
                    setLoading(false);
                })

            axios.get(backendUrl + '/products/category/5ff435d877251627045ffbaf')
                    .then(res => {
                        setRollsGoods(res.data.slice(0, 12));
                        setError(false);
                    })
                    .catch(err => {
                        setLoading(false);
                        setError(true);
            });

            axios.get(backendUrl + '/sliders/')
                .then(res => {
                    console.log(res);
                    setSliders(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err, err.response);
                    setLoading(false);
                    setError(true);
                });

    }, [ ]);

    useEffect(() => {

        const data = store.get('24rolls');
        if ( data ) {
            if ( data.user && isAuthorized === false ) {
                setAuthorized(true);
            }
            if ( data.customOptions ) {
                switch ( data.customOptions.city ) 
                {
                    case 'Dnipro': {
                        if ( city !== 1 ) {
                            setCity(1);
                            props.onSetBaseName('/dp');
                        }
                        break;
                    }
                    case 'Zaporijja': {
                        if ( city !== 2 ) {
                            setCity(2);
                            props.onSetBaseName('/zp');
                        }
                        break;
                    }
                    default: break;
                }
            }
        } else {
            setcityModal(true);
            setCity(1);
        }

        const language = store.get('i18nextLng') ? store.get('i18nextLng') : 'ru';
        if (!lang) {
            setLang(language);
        }

    }, [isAuthorized, city, props, lang]);

    useEffect(() => {
        if (props.location.search === '?redirectpersonal=true') {
            props.history.push(props.match.path + '/order/personal');
        } else if ( props.location.search === '?log-up-success=true' ) {
            props.history.push(props.match.path + '/order/personal?signup=true');
        } else if ( props.location.search === '?logout' ) {
            setAuthorized(false);
            props.history.push(props.match.path + '/');
        }

    }, [props]);

    const onCityModalClosed = () => {
        setcityModal(false);
        setCity(1);
        props.onSetBaseName('/dp');
        store.set('24rolls', {
            customOptions : {
                city: 'Dnipro'
            } 
        });
    };

    const onSetCustomCity = (cityName) => {
        setcityModal(false);
        switch (cityName) {
            case 'Dnipro': {
                setCity(1);
                store.set('24rolls', {
                    customOptions : {
                        city: 'Dnipro'
                    } 
                });
                props.onSetBaseName('/dp');
                break;
            }
            case 'Zaporijja': {
                setCity(2);
                store.set('24rolls', {
                    customOptions : {
                        city: 'Zaporijja'
                    } 
                });
                props.onSetBaseName('/zp');
                break;
            }
            default: break;
        }
    };

    const path = props.match.path.slice(0, 3);

    //routes for big screens
    const routesBig = (
        <ErrorBoundary>
        <ScrollToTop />
        <Switch>
            <Route exact path={path + "/"} render={(props) => 
                <Main {...props} sliders={sliders} rollGoods={rollGoods} />
                } />
            <Route path={path + "/shares"} render={() => (
                <Suspense fallback={<Spinner />}>
                    <Shares />
                </Suspense>
            )} />
            <Route path={path + "/about-us"} render={() => (
                <Suspense fallback={<Spinner />}>
                    <AboutUs />
                </Suspense>
            )} />
            <Route path={path + "/delivery"} render={() => (
                <Suspense fallback={<Spinner />} >
                    <Delivery/>
                </Suspense>
            )} />
            <Route path={path + "/favourite"} render={() =>(
                <Suspense fallback={<Spinner />} >
                    <Favourite {...props} title={'title.favourite'} />   
                </Suspense> 
            )} />

            {/* Категории */}
            {categories && filters && categories.map(el => {
              if (el._id === '5ff17a7f6158c22e503feaa1')  return null;
              else return (
                <Route 
                key={el._id}
                path={path + '/' + el.route} 
                render={() => (
                    <Suspense fallback={<Spinner />} >
                        <PageWrapper 
                        {...props}
                        title={el.name_ru} 
                        filters={filters}
                        categoryId={el._id} 
                        url={`/products/category/${el._id}`} 
                        /> 
                    </Suspense>
                )} 
                />
              );
            })}

            {/* Фильтры */}
            {filters && filters.map(el => (
               <Route
               key={el._id}
               path={path + '/' + el.route}
               render={() => (
                   <Suspense fallback={<Spinner />}>
                        <PageWrapper title={el.name_ru} url={`/products/filter/${el._id}`} />
                   </Suspense>
               )} 
               /> 
            ))}

            <Route path={path + "/posts/:id"} render={(props) => 
                <Suspense fallback={<Spinner />}>
                    <BlogArticle {...props} />
                </Suspense>
            }/>
            <Route path={path + "/posts"} render={() => 
                <Suspense fallback={<Spinner />}>
                    <BlogAll {...props} />
                </Suspense>
            }/>
            <Route path={path + "/products/id/:id"} render={() => 
                <Suspense fallback={<Spinner />}>
                    <CardProduct />
                </Suspense>
            }/>
            { isAuthorized ? 
            ([
                <Route 
                key='3-route'
                path={path + "/order"}
                component={Order} />,
                <Route
                key='4-route'
                path={path + "/logout"}
                component={LogOut} 
                />
            ])   
            :
            (
                <Route 
                key='1-route'
                path={path + "/log-in"}
                exact 
                render={(props) => 
                    <Suspense fallback={<Spinner />}>
                        <Auth {...props}/>
                    </Suspense>
                } 
                />
            )}
        </Switch>
        </ErrorBoundary>
    );
    
    //routes for small screens
    const routesSmall = (
        <Switch>
            <Route path={path +  "/main-mobile/menu"} exact render={() => 
                <Suspense fallback={<Spinner />}>
                    <MobileMenu {...props}/>
                </Suspense>
            }/>
            <Route path={path + "/main-mobile/order"} exact render={() => 
                <Suspense fallback={<Spinner />}>
                    <MobileOrder {...props}/>
                </Suspense>
            } />
            <Route 
            path={path + "/main-mobile/log-in"} 
            render={(props) => 
                <Suspense fallback={<Spinner />}>
                    <Auth {...props}/>
                </Suspense>
            } 
            />
            <Redirect to={path + "/main-mobile/menu"} />
        </Switch>
    );
    
    //global routes
    const routes = (
        <Switch>
            <Route path={path + "/main-mobile"} render={(props) => {
                return (
                    <WrapperForMobile 
                    {...props}>
                        {routesSmall}
                    </WrapperForMobile>
                );
            }} />
            <Route exact path={path + "/signup/confirm/:token"} component={ConfirmAccount} />
            <Route exact path={path + "/reset/toUser/:token"} component={RecoverPassword} />
            <Route render={() => {
                return (
                    <Wrapper
                    {...props}
                    categories={categories}
                    filters={filters}
                    onSetBaseName={props.onSetBaseName}
                    isAuthorized={isAuthorized}
                    city={city}
                    lang={lang}
                    setCity={setCity}
                    setLang={setLang}>
                        {routesBig}
                    </Wrapper>
                );
            }}/>
        </Switch>
    );

    const modalContent = 
    <div className="modal-for-change-start-city">
        <p>
            {'Вы из Днепра?'}
            <span onClick={()=>onSetCustomCity('Dnipro')}>
                {'Да'}
            </span>
        </p>
        <p>
            {'Выбрать другой город:'}
        </p>
        <ul>
            <li onClick={()=>onSetCustomCity('Zaporijja')}>
                {'Запорожье'}
            </li>
        </ul>
    </div>

    return (
        <>  
            { error && <ErrorIndicator /> }
            { loading && 
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Spinner /> 
            </div>
            }
            { !error && !loading && 
                <>
                    <Modal
                        show={cityModal}
                        modalClosed={onCityModalClosed}>
                        {modalContent}
                    </Modal>
                    {routes}
                </>
            }
        </>
    )
}

export default App;