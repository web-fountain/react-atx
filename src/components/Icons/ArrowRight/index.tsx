function ArrowRight({ className='', color='', size='32' }) {
  const inlineFill = color.length > 0
    ? { stroke: color }
    : { stroke: 'var(--text-white)' };

  return (
    <svg
      className={className}
      width="23"
      height="17"
      viewBox="0 0 23 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={inlineFill}
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.16602 8.71818H20.8327M20.8327 8.71818L13.8327 2.05151M20.8327 8.71818L13.8327 15.3848" stroke="#2658CB"
      />
    </svg>
  );
}

export default ArrowRight;
