import React from 'react'
import styles from "./Home.module.css";
import { PRODUCTS } from '../../products';
import Product from './Product';
const Home = () => {
  return (
    <div className={styles.home}>
        <div className='styles.title'>
            <h1>Shopping Cart</h1>
        </div>
        <div className={styles.products}>
            {
                PRODUCTS.map(function(product){
                    return(
                        <>
                        <Product data = {product} />
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home;