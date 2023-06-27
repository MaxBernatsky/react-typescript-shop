import { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
      <img className='w-1/6 ' src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p className='font-bold'>Price: {product.price}$</p>
      <button
        onClick={() => setOpenDetails((prev) => !prev)}
        className={`py-2 px-4 border ${
          !openDetails ? 'bg-yellow-400' : 'bg-blue-400'
        }`}>
        {!openDetails ? 'Show Details' : 'Hide Details'}
      </button>
      {openDetails && <p>{product.description}</p>}
      <p>
        Rate:{' '}
        <span style={{ fontWeight: 'bold' }}>{product.rating?.rate}/5</span>
      </p>
    </div>
  );
};
