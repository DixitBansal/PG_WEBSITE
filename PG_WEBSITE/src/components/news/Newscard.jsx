import React, { useState } from 'react'
import Card from "react-bootstrap/Card"
import Spinner from 'react-bootstrap/Spinner'
import Dropdown from "react-bootstrap/Dropdown"
import HtmlToReactParser from "html-to-react"
import { toggleUpdateModel } from '../../reducer/updateModel.slice'
import { setOriginalData } from '../../reducer/updateModel.slice'
import { useDispatch } from 'react-redux'

const Newscard = ({ element, deletePostHandel, showDelButton }) => {

    const parser = new HtmlToReactParser.Parser()
    const [showDeleteButtonLoader, setShowDeleteButtonLoader] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <Card variant="top" className='hover:shadow-lg'>
                <div className='flex justify-center'>
                    <img className='w-full aspect-video object-cover' height={369} width={656} src={element.image_url} />
                </div>
                <Card.Body className='flex items-center justify-between'>
                    <div>
                        <Card.Title>
                            {element.title}
                        </Card.Title>
                        <Card.Text as='div' className='break-all'>
                            {parser.parse(element.description)}
                        </Card.Text>
                    </div>
                    {showDelButton ?
                        <>
                            {showDeleteButtonLoader ?
                                <Spinner variant="secondary" animation="border" />
                                :
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" className='rounded-md' id="dropdown-basic">
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={(event => {
                                            dispatch(toggleUpdateModel())
                                            dispatch(setOriginalData(element))
                                        })} >Update</Dropdown.Item>
                                        <Dropdown.Item onClick={async (event) => {
                                            setShowDeleteButtonLoader(true)
                                            const deleteResp = await deletePostHandel(event, element)
                                            setShowDeleteButtonLoader(false)
                                        }}>
                                            Delete
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>}
                        </> : null}
                </Card.Body>
            </Card>
        </>
    )
}

export default Newscard