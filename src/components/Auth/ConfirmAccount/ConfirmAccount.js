import React from 'react';
import store from 'store';
import axios from 'axios';
import { backendUrl } from '../../../config/config';

class ConfirmAccount extends React.Component {

    componentDidMount() {
        const token = this.props.match.params.token;
        axios.get(backendUrl + `/signup/confirm/${token}`)
            .then(result => {
                if (result.status === 200 ) {
                    const storage = store.get('24rolls');
                    storage.user = {
                        token: token
                    };
                    store.set('24rolls', storage);
                    this.props.history.push(this.props.mathc.path.slice(0, 3) + '/?log-up-success=true');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <>
            </>
        );
    }
}

export default ConfirmAccount;