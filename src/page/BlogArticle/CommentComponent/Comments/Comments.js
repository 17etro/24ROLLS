import React from 'react';
import SingleComment from '../SingleComment/SingleComment';
import WriteComment from '../WriteComment/WriteComment';

import './comments.scss';

const Comments = React.memo((props) => {
    return (
        <div className={
            props.opened ? "blog-comments-container blog-comments-container-opened" :
                           "blog-comments-container blog-comments-container-closed"
        }>
            <WriteComment />
            <SingleComment
                data={'01.01.2021'} 
                name={'Petro11111111111111111111111111111111111111111111111111111111111111'}
            />
            <SingleComment 
                data={'01.01.2021'} 
                content={'213123123131231231231231231231231231231231231231231231231231231231312'}
            />
        </div>
    );
});

export default Comments