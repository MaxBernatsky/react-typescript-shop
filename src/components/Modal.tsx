interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, title, onClose }) => {
  return (
    <>
      <div
        className='fixed bg-black/50 top-0 left-0 right-0 bottom-0'
        onClick={onClose}></div>
      ;
      <div className='w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2'>
        <h2 className='text-2xl text-center mb-2'>{title}</h2>
        {children}
      </div>
    </>
  );
};
