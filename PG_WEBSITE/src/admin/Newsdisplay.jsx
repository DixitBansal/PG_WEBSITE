import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Newscard from '../components/news/Newscard'
import Skeletoncard from '../components/news/Skeletoncard'
import { setAlert, unsetAlert } from '../reducer/alertslice'
import { appendNews, deleteNews, stopFetching, incPageNumber } from '../reducer/newsdata.slice'
import { useDispatch, useSelector } from 'react-redux'

const Newsdisplay = ({ className, cont_id, classNameInfinte, showDelButton = true }) => {


    const posts = useSelector(state => state.newsData)
    const [limit, setLimit] = useState(5)

    const dispatch = useDispatch()

    async function fetchNextPage() {
        return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/news/get/${posts.pageNumber}/${limit}`).then((response) => {
            return response.json()
        }).then((response) => {
            if (response.data.length < 4) {
                dispatch(stopFetching())
            }
            dispatch(incPageNumber())
            dispatch(appendNews(response.data))
            return posts
        })
    }

    async function deletePostHandel(event, element) {
        let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/news/delete`, {
            credentials: "include",
            body: JSON.stringify({ post_ids: [element._id], image_url: element.image_url }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "DELETE"
        })
        if (response.status === 200) {
            response = await response.json()
            dispatch(deleteNews(element._id))
            dispatch(setAlert({
                variant: "success",
                message: "Your Post Has Been Deleted Successfully!"
            }))
            setTimeout(() => {
                dispatch(unsetAlert())
            }, 3000)
            return response
        }
        dispatch(setAlert({
            variant: "error",
            message: "Error! Unable To Delete the Post."
        }))
        setTimeout(() => {
            dispatch(unsetAlert())
        }, 3000)
    }

    return (
        <>
            <div className={className} id={cont_id}>
                <InfiniteScroll
                    next={fetchNextPage}
                    hasMore={posts.hasMore}
                    dataLength={posts.length}
                    loader={Array.from({ length: 3 }).map((element, index) => {
                        return (<Skeletoncard key={index} />)
                    })}
                    endMessage={<div className='flex justify-center bg-gray-light text-[1.5rem] text-gray p-2 font-bold'>No More Updates</div>}
                    scrollThreshold={0.8}
                    scrollableTarget={"posts__container"}
                    className={classNameInfinte}
                >
                    {

                        posts.news.map((element, index) => {
                            return (
                                <Newscard element={element} key={index} showDelButton={showDelButton} deletePostHandel={deletePostHandel} />
                            )
                        })
                    }
                </InfiniteScroll>
            </div>
        </>
    )
}

export default Newsdisplay