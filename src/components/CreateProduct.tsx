import { useState } from 'react';
import { IProduct } from '../models';
import axios from 'axios';
import { ErrorMessage } from './ErrorMessage';

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 5,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct: React.FC<CreateProductProps> = ({ onCreate }) => {
  const [value, setValue] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (value.trim().length === 0) {
      setError('Please enter valid title.');
      return;
    }

    productData.title = value;

    const response = await axios.post<IProduct>(
      'https://fakestoreapi.com/products',
      productData,
    );

    onCreate(response.data);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='border py-2 px-4 mb-2 w-full outline-0'
        placeholder='Enter product title...'
        value={value}
        onChange={handleInputChange}
      />
      {error && <ErrorMessage error={error} />}
      <button
        className='border py-2 px-4 bg-yellow-400 hover:text-white'
        type='submit'>
        Create
      </button>
    </form>
  );
};
