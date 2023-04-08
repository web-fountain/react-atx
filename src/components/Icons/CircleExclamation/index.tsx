export default function CircleExclamation({ className='', fill='' }) {
  const inlineFill = fill.length === 0
    ? { fill: 'var(--text-primary)' }
    : { fill };

  return (
    <svg
      className={className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        style={inlineFill}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25 16C25 20.9706 20.9706 25 16 25C11.0294 25 7 20.9706 7 16C7 11.0294 11.0294 7 16 7C20.9706 7 25 11.0294 25 16ZM27 16C27 22.0751 22.0751 27 16 27C9.92487 27 5 22.0751 5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16ZM14.8889 20.3333C14.8889 20.9469 15.3864 21.4444 16 21.4444C16.6136 21.4444 17.1111 20.9469 17.1111 20.3333V15.8888C17.1111 15.2752 16.6136 14.7777 16 14.7777C15.3863 14.7777 14.8889 15.2752 14.8889 15.8888L14.8889 20.3333ZM14.8889 12.5555C14.8889 13.1691 15.3863 13.6666 16 13.6666C16.6136 13.6666 17.1111 13.1691 17.1111 12.5555V11.9999C17.1111 11.3863 16.6136 10.8888 16 10.8888C15.3863 10.8888 14.8889 11.3863 14.8889 11.9999V12.5555Z'
      />
    </svg>
  );
}