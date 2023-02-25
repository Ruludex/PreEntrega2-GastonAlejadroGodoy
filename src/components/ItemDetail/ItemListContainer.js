import { Link } from 'react-router-dom'
import { ProductsData } from '../../data/ProductsData';
import { fetchCopy } from './fetchCopy';
import { useEffect,useState } from 'react';
import "./Style.css"


const ItemDetailContainer = () => {
  
  
  const [products,setProduct] = useState([])
  useEffect(()=>{
    fetchCopy(ProductsData).then((result)=>setProduct(result))
  },[products])

  return(
    <div className='flex-container'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <Link to={`/tienda/${product.nombre}`}>  
              <img src={product.imagen} alt={product.nombre}/>
            <div>
              <p>
                {product.nombre}
              </p>
            </div>
          </Link>
          </div>
        ) )}
    </div>
)
};

export default ItemDetailContainer;