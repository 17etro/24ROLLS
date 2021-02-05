import axios from 'axios';
import React from 'react';
import { Route, Switch } from 'react-router';

const backendUrl = 'https://backend.24rolls.com.ua';

const blockedFilters = [
    '60129318205af05787df2f6f',
    '60129301205af05787df2f6e',
    '6012924b205af05787df2f6d'
];

const blockedCategories = [
    '5ff17a7f6158c22e503feaa1',
]

const func = async () => {

    try {
        const categoriesRes = await axios.get(backendUrl + '/products/categories'); 
        const categories = categoriesRes.data.cats;

        const filtersRes = await axios.get(backendUrl + '/products/filters');
        const filters = filtersRes.data.fils;

        const postsRes = await axios.get(backendUrl +'/posts');
        const posts = postsRes.data;

        const allProductsRes = await axios.get(backendUrl + '/products/');
        const allProducts = allProductsRes.data.message;

        return (
            <Switch>
                <Route path='/' />
                <Route path='/zp/' />
                <Route path='/dp/' />
                <Route path='/kh/' />

                <Route path="/zp/shares" />
                <Route path="/dp/shares" />
                <Route path="/kh/shares" />

                <Route path="/zp/delivery" />
                <Route path="/dp/delivery" />
                <Route path="/kh/delivery" />

                <Route path="/zp/about-us" />
                <Route path="/dp/about-us" />
                <Route path="/kh/about-us" />

                <Route path="/zp/posts" />
                <Route path="/dp/posts" />
                <Route path="/kh/posts" />

                <Route path="/zp/log-in" />
                <Route path="/dp/log-in" />
                <Route path="/kh/log-in" />

                <Route path="/zp/favourite" />
                <Route path="/dp/favourite" />
                <Route path="/kh/favourite" />

                {filters.map(el => blockedFilters.includes(el._id) ? null :
                [
                    <Route path={'/zp/' + el.route} />,
                    <Route path={'/dp/' + el.route} />,
                    <Route path={'/kh/' + el.route} />
                ])
                }
                {categories.map(el => blockedCategories.includes(el._id) ? null : 
                [
                    <Route path={'/zp/' + el.route} />,
                    <Route path={'/dp/' + el.route} />,
                    <Route path={'/kh/' + el.route} />
                ])
                }
                {posts.map(el => 
                [
                    <Route path={'/zp/posts/' + el.route} />,
                    <Route path={'/dp/posts/' + el.route} />,
                    <Route path={'/kh/posts/' + el.route} />
                ])
                }
                {allProducts.map(el => {
                    if (el.categoryId.route === 'presents') {
                        return null;
                    } else {
                        let routes = [];
                        el.shop.map(shop => {
                            if (shop.name === 'Kh') {
                                routes.push(<Route path={`/kh/${el.categoryId.route}/` + el.route} />);
                            } else if (shop.name === 'Zp') {
                                routes.push(<Route path={`/zp/${el.categoryId.route}/` + el.route} />);
                            } else {
                                routes.push(<Route path={`/dp/${el.categoryId.route}/` + el.route} />);
                            }
                        })
                        return routes;
                    } 
                })}
            </Switch> 
        );
    }
    catch (err) {
        console.log('something went wrong');
    }
}
export default func;