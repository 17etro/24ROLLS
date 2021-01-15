import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backendUrl } from '../../config/config';

import './index.scss';
import ReactStars from 'react-rating-stars-component';
import HeadingBlock from '../../components/HeadingBlock';
import Comments from './CommentComponent/Comments/Comments';
import Spinner from "../../components/Spinner";
import ErrorIndicator from "../../components/Errors/ErrorIndicator";
import dayjs from 'dayjs';

const BlogArticle = React.memo((props) => {

    const [ loading, setloading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ post, setPost ] = useState(null);
    const [ showComm, setShowComm ] = useState(false);

    useEffect(() => {
        setloading(true);
        const postId = props.match.params.id;

        axios.get(backendUrl + `/posts/${postId}`)
            .then(res => {
                console.log(res);
                setError(false);
                setloading(false);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err, err.repsponse);
                setError(true);
                setloading(false);
            })
    }, [props]);

    const onChangeCommMode = () => {
        setShowComm(!showComm);
    }

    return (
        <div
            itemProp={'blogArticle'}
            itemScope
            className={'blog-article_section'}
        >
            {loading && <Spinner /> }
            {error && <ErrorIndicator />}
            {
                post &&
                <>  
                    <HeadingBlock title={'Блог'}/>
                    <div
                        itemProp={'contaiter'}
                        itemScope
                        className={'blog_container'}
                    >
                        <div className={'imageTitle'}>
                            <img
                                itemProp={'image'}
                                itemType={'url'}
                                itemScope
                                src={backendUrl + `/${post.image}`}
                                alt={post.alt}
                            >
                            </img>
                        </div>
                        <div
                            itemProp={'filling'}
                            itemScope
                            className={'blog_container_filling'}
                        >
                            <div
                                itemProp={'filling_header'}
                                className={'blog_container_filling_header'}
                            >
                                <h4 itemProp={'name'}>
                                    {post.title}
                                </h4>
                                <p itemProp={'date'}>
                                    {dayjs(post.date).format('DD.MM.YYYY')}
                                </p>
                            </div>
                            <div
                                itemProp={'filling_center'}
                                className={'blog_container_filling_center'}
                            >
                        <span itemProp={'text'}>
                            {post.content}
                        </span>
                            </div>
                            <div
                                itemProp={'filling_bottom'}
                                className={'blog_container_filling_bottom'}
                            >
                                <div className="blog_container_filling_bottom__rate">
                                    <ReactStars
                                    count={5}
                                    value={post.rate}
                                    edit={false}
                                    size={20} 
                                    isHalf={true}
                                    />
                                    <span className="blog_container_filling_bottom__rate__label">
                                        ({post.rate.toFixed(1)})
                                    </span>
                                </div>
                                <p itemProp={'text'} onClick={onChangeCommMode}>
                                    {'Комментарии '}{`(${post.comments.length})`}
                                </p>
                            </div>
                        </div>
                        <Comments 
                            opened={showComm} 
                        />
                    </div>
                </>
            }
        </div>
    )
});

export default BlogArticle;