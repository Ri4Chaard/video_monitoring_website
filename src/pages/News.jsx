import React, { useEffect, useState } from "react";
import { Container } from "../components/UI/container/Container";
import { news } from "../news";
import { usePagination } from "../components/hooks/usePagination";
import { useItemPages } from "../components/hooks/useItemPages";
import { Pagination } from "../components/UI/pagination/Pagination";
import { CSSTransition } from "react-transition-group";
import { useWindowSize } from "../components/hooks/useWindowSize";

export const News = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const { totalPages, currentPage, currentIndex, changePage } = usePagination(
        news.length,
        5
    );
    const currentItems = useItemPages(news, currentIndex, 5);

    const currentWindowSize = useWindowSize(window.innerWidth);

    useEffect(() => {
        setSelectedPost(null);
    }, [currentPage]);

    return (
        <div className="news-list">
            <Container>
                <div className="news-list__content">
                    <div className="news-list__header header">
                        <h1>Company's news</h1>
                    </div>
                    <div className="news__posts">
                        {currentItems.map((post, index) => (
                            <div className="news__post" key={post.id}>
                                {selectedPost == post.id && (
                                    <span
                                        className="news-list__line"
                                        style={
                                            currentWindowSize > 720
                                                ? {
                                                      top: "-1px",
                                                      opacity: 1,
                                                  }
                                                : {
                                                      opacity: 0,
                                                  }
                                        }
                                    />
                                )}
                                {currentWindowSize > 720 && (
                                    <div className="news-list__image">
                                        <CSSTransition
                                            in={selectedPost == post.id}
                                            timeout={500}
                                            classNames="news-image"
                                            mountOnEnter
                                            unmountOnExit
                                        >
                                            <div>{post.image}</div>
                                        </CSSTransition>
                                    </div>
                                )}
                                <div
                                    className="news__text"
                                    onClick={() => {
                                        selectedPost == post.id
                                            ? setSelectedPost(null)
                                            : setSelectedPost(post.id);
                                    }}
                                    style={
                                        currentWindowSize < 992 &&
                                        selectedPost == post.id
                                            ? {
                                                  minHeight:
                                                      currentWindowSize <= 720
                                                          ? "auto"
                                                          : "374px",
                                              }
                                            : {}
                                    }
                                >
                                    {index == 0 && (
                                        <span
                                            className="news-list__line"
                                            style={{ top: "-1px" }}
                                        />
                                    )}
                                    {post.title}
                                    <div className="news__text-content">
                                        <div className="news__date">
                                            <div className="blue-tag">
                                                {post.date}
                                            </div>
                                        </div>
                                        {selectedPost == post.id
                                            ? post.content
                                            : post.previewContent}
                                    </div>
                                    {selectedPost == post.id ? null : (
                                        <span
                                            className="news-list__line"
                                            style={{ bottom: "-16.5px" }}
                                        />
                                    )}
                                </div>
                                {selectedPost == post.id && (
                                    <span
                                        className="news-list__line"
                                        style={
                                            currentWindowSize > 720
                                                ? { bottom: 0, opacity: 1 }
                                                : { bottom: 0 }
                                        }
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="news-list__pagination">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            currentIndex={currentIndex}
                            count={5}
                            changePage={changePage}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};
