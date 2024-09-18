import styles from './Styles/Products.module.css'
import ProductDetail from '../Data/ProductDetail'
import Card2 from '../Layout/Card2'


const Products = () => {
    return(
        <div className={styles.products}>
            <h1>Produtos</h1>
            <div className={styles.container}>
            {ProductDetail.product.map((product, index) =>{
                return(
                    <Card2 id={product.id} img={product.img} name={product.name} price={product.price} description={product.description} key={index} />
                )
            })}
            </div>
        </div>
    )
}

export default Products;