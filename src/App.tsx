import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Product } from './components/Product';
import { useProducts } from './hooks/useProducts';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';
import { useContext } from 'react';
import { IProduct } from './models';
import { ModalContext } from './context/ModalContext';

export const App = () => {
  const { products, error, loading, addProduct } = useProducts();

  const { modal, open, close } = useContext(ModalContext);

  const handleCreate = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
      {modal && (
        <Modal title='Create new product' onClose={close}>
          <CreateProduct onCreate={handleCreate} />
        </Modal>
      )}
      <button
        onClick={open}
        className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'>
        +
      </button>
    </div>
  );
};
