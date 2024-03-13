import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image}/>
        </Link>
        <CardBody>
        <Link to={`/product/${product._id}`}>
            <CardTitle as="div">
                <strong>
                {product.name}
                </strong>
            </CardTitle>
        </Link>
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
