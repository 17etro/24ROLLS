import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../../config/config';

import './index.scss';
import HeadingBlock from '../../components/HeadingBlock';
import dayjs from 'dayjs';
import {Link} from "react-router-dom";
import Spinner from "../../components/Spinner";
import ErrorIndicator from "../../components/Errors/ErrorIndicator";

const BlogAll = React.memo((props) => {

    const [ loading, setloading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ posts, setPosts ] = useState(null);

    useEffect(()=> {
        setloading(true);
        axios.get(backendUrl + /posts/)
            .then(res => {
                console.log(res);
                setPosts(res.data);
                setError(false);
                setloading(false);

            })
            .catch(err => {
                console.log(err, err.response);
                setError(true);
                setloading(false);
            });
    }, []);

    return(
        <div
            itemProp={'blogAll'}
            itemScope
            className={'blog-all'}
        >
            {loading && <Spinner /> }
            {error && <ErrorIndicator />}
            {posts &&
            <>
                <HeadingBlock
                    title={'Блог'}
                    svg={true}
                />
                <div
                    itemProp={'blogAllContent'}
                    itemScope
                    className="blog-all_content"
                >
                    {posts[0] && 
                        posts.map(post =>
                            <Link
                                to={`posts/${post._id}`}
                                itemProp={'list'}
                                className={'list'}
                                key={post._id}
                            >
                                <div
                                    itemProp={'list_context'}
                                    className={'list_context'}
                                >
                                    <img
                                        itemType={'url'}
                                        itemProp={'image'}
                                        src={backendUrl + `/${post.image}`}
                                        alt={post.alt}
                                    >
                                    </img>
                                    <div
                                        itemProp={'footer'}
                                        className={'footer'}
                                    >
                                        <h1
                                            itemProp={'name'}
                                        >
                                            {post.title}
                                        </h1>
                                        <p
                                            itemProp={'date'}
                                        >
                                            {dayjs(post.date).format('DD.MM.YYYY')}
                                        </p>
                                        <li
                                            itemProp={'description'}
                                            itemScope
                                        >
                                            <span
                                                itemProp={'text'}
                                                style={{fontSize: '14px'}}
                                            >
                                                {'Посмотреть больше...'}
                                            </span>
                                        </li>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                    {!posts[0] && <p>{'Пока что здесь ничего нет...'}</p>}
                </div>
            </>
            }
        </div>
    )
});

export default BlogAll;