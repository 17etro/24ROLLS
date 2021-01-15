import React from 'react';

import defaultAvatar from '../../../../assets/page/Order/default-avatar.png';

import './singleComment.scss';

const SingleComment = React.memo((props) => {
    return (
        <div className="blog-single-comment-container">
            <div className="blog-single-comment-container__avatar">
                <img 
                    src={defaultAvatar} 
                    alt="default-avatar" 
                />
            </div>
            <div className="blog-single-comment-container__content">
                    <div className="blog-single-comment-container__content__header"> 
                        <p className="blog-single-comment-container__content__header__name">
                            {props.name ? props.name : 'Аноним'}
                        </p> 
                        <p className="blog-single-comment-container__content__header__date">
                            {props.data}
                        </p>
                    </div>
                    <div className="blog-single-comment-container__content__content">
                        {props.content}
                    </div>
            </div>
        </div>
    );
});

export default SingleComment;