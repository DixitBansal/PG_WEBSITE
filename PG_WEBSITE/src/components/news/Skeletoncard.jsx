import React from 'react'
import { Placeholder } from 'react-bootstrap'
import Card from "react-bootstrap/Card"

const Skeletoncard = () => {
  return (
    <>
      <Card variant={"top"}>
        <Placeholder animation='wave'>
          <Placeholder className="h-[7rem] w-full" />
        </Placeholder>
        <Card.Body>
          <Placeholder as={Card.Title} animation='wave'>
            <Placeholder xs="6" />
          </Placeholder>
          <Placeholder as={Card.Text} animation='wave'>
            <Placeholder xs="9" />
          </Placeholder>
        </Card.Body>
      </Card>
    </>
  )
}

export default Skeletoncard