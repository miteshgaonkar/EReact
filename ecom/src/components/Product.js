import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
import Rating from './Rating'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}><Card.Img src={product.image}/></a>
        {/* <h1>{product.name}</h1> */}
        <CardBody>
        <a href={`/product/${product._id}`}>
            <CardTitle as="div">
                <strong>
                {product.name}
                </strong>
            </CardTitle>
        </a>
        <CardText as="div">
            <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
            </div>
        </CardText>
        <CardText as="h3">
            $ {product.price}
        </CardText>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} colour={"#f8e823"} />
        </CardBody>
    </Card>
  )
}

export default Product
