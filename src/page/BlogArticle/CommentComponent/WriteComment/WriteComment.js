import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../../../../config/config';
import { checkValidaty } from '../../../../tools/checkValidaty';

import './writeComment.scss';

const WriteComment = (props) => {

    const [ content, setContent ] = useState({
        value: '',
        valid: false,
        validation: {
            required: true,
            maxLength: 300
        }
    });

    return (
        <div className="blog-yours-comment">
            <textarea
                value={content.value}
                onChange={(e) => {
                    setContent({
                        ...content,
                        value: e.target.value,
                        valid: checkValidaty(e.target.value, content.validation)
                    })
                }}
                placeholder="Оставьте комментарий"
            />
            <div className="blog-yours-comment-buttons">
                <button className="blog-yours-comment-cancel-button">
                    {'Отменить'}
                </button>
                <button 
                className={
                    content.valid ? "blog-yours-comment-submit_button"
                                  : "blog-yours-comment-cancel-button"
                    }
                style={{
                    marginLeft: '10px'
                }}
                >
                    {'Оставить комментарий'}
                </button>
            </div>
        </div>
    );
};

export default WriteComment;