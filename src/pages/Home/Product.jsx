import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from "./Product.module.css";
const Product = ({data}) => {
  return (
    <div key={data.id} className={styles.cards} >
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.productImage} />
      <Card.Body>
        <Card.Title>{data.productName}</Card.Title>
        <Card.Text>{data.price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product;