import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card, Form } from "react-bootstrap";
//import products from "../../products";
import Rating from "../Rating";
//import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { listProductDetails } from "../../actions/productAction";
import { productDetailsReducer } from "../../reducers/productReducer";

function ProductScreen({match,history}) {
  const { id } = useParams();
  const nav = useNavigate();
  //const product = products.find((p) => String(p._id) === id);

  // const [product,setProduct]= useState([])
  // useEffect(()=>{
  //   async function fetchProduct(){
  //     const {data} = await axios.get(`/api/products/${id}`)
  //     setProduct(data)
  //   }
  //   fetchProduct()
  // },[])
  const [qty,setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, match]);

  const addToCartHandler = ()=>{
    nav(`/cart/${id}?qty=${qty}`);
  }
  //const product = productDetails;
  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name}></Image>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color={"f8e825"}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description : {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3} className="me-auto">
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price : </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status : </Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock >0 &&(
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col xs="auto" className="my-1">
                        <Form.Control 
                          as="select"
                          value={qty}
                          onChange={(e)=> setQty(e.target.value)}
                          >
                           {[...Array(product.countInStock).keys()].map((x)=>(
                              <option ky={x+1} value={x+1}>
                                {x+1}
                              </option>
                           ))} 
                          </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    disabled={product.countInStock === 0}
                    type="button"
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}

      {product.name}
    </div>
  );
}

export default ProductScreen;