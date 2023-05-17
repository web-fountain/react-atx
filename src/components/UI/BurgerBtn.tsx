import { Dispatch, SetStateAction } from 'react';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerBtn({ show, setShow }: Props) {
  return (
    <button
      type='button'
      className='flex h-8 w-8 flex-col justify-center border relative lg:hidden'
      onClick={() => setShow((prev) => !prev)}
    >
      <span
        className={`bg-black absolute h-1 w-full transition-transform rounded-lg ${
          show ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-2'
        }`}
      ></span>
      <span
        className={`bg-black absolute h-1 w-full transition-transform ${
          show && 'scale-0'
        }`}
      ></span>
      <span
        className={`bg-black absolute h-1 w-full transition-transform rounded-lg ${
          show ? '-rotate-45 translate-y-0' : 'rotate-0 translate-y-2'
        }`}
      ></span>
    </button>
  );
}
