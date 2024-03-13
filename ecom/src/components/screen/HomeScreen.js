import React, {useState, useEffect} from 'react'
//import products from '../../products'
import { Row,Col } from 'react-bootstrap'
import Product from '../Product'
import { useDispatch, useSelector } from "react-redux";
//import axios from 'axios'
import { listProducts } from '../../actions/productAction';
import Loader from '../Loader';
import Message from '../Message';

function HomeScreen({history}) {
  const dispatch = useDispatch();
  const productList = useSelector((state)=>state.productList);
  const {error,loading,products} =productList;
  useEffect(()=>{
      dispatch(listProducts());
  },[dispatch])
  // const [products,setProducts]= useState([])
  // useEffect(()=>{
  //   async function fetchProducts(){
  //     const {data} = await axios.get('/api/products/')
  //     setProducts(data) 
  //   }
  //   fetchProducts()
  // },[])

  return (
    <div>
      <h1 className='text-center'>Latest Product</h1>
      {loading?(
        <Loader/>
      ):error?(
        <Message variant='danger'>{error}</Message>
      ) :
      <Row>
        {products.map((product)=>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product  product={product}/>
            </Col>
        ))}
      </Row>
      }
    </div>
  )
}

export default HomeScreen
