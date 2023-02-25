import { useParams,Link} from 'react-router-dom'
import { useEffect,useState } from 'react';
import { ProductsData } from '../../data/ProductsData';
import { fetchCopy } from './fetchCopy';

const ItemDetailContainer = () => {
  const {productId} = useParams({});
  const product = ProductsData.find((product)=>product.nombre.toLocaleLowerCase() === productId.toLocaleLowerCase());
  
  const item = product
  const [products,setProduct] = useState({})
  useEffect(()=>{
    fetchCopy(item).then((result)=>setProduct(result))
  },[item])

  return (
    <div className='flex-container'>
      <div className='card'>
          <img src={products.imagen} alt={products.nombre}/>
        <div>
          <h1>
            {products.nombre}
          </h1>
          <h5>PRECIO:{products.precio}</h5>
          <div>
            <Link to={"/tienda"}>Volver atras</Link>
          </div>
        </div>
      </div>
    </div>    
      );
};

export default ItemDetailContainer;