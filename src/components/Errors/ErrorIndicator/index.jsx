import React, {Component} from 'react';

import './index.scss';

export default class ErrorIndicator extends Component{
    render(){
        return(
            <div className="error-indicator">
                <span>
                    Что-то пошло не так
                </span>
                <span>
                    (Мы уже работаем над проблемой)
                </span>
            </div>
        )
    }
}