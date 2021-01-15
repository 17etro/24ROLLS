import React, { useEffect } from 'react';
import store from 'store';


const LogOut = (props) => {

    const path = props.match.path.slice(0, 3);

    useEffect(() => {
        const storage = store.get('24rolls');
        delete storage.user;
        store.set('24rolls', storage);

        props.history.push(path + '/?logout');
    }, []);

    return (
        <>
        </>
    );
};

export default LogOut;