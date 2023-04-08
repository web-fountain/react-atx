function ArrowRight({ className = '', fill = '', size = '32' }) {
  const inlineFill = fill.length === 0
    ? { fill: 'var(--text-primary)' }
    : { fill };

  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={inlineFill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4378 9.67274C11.4176 8.84456 12.0726 8.15681 12.9007 8.13661L22.5645 7.90091C22.9749 7.8909 23.3715 8.04952 23.6618 8.3398C23.952 8.63008 24.1107 9.02664 24.1007 9.43704L23.865 19.1008C23.8448 19.929 23.157 20.584 22.3288 20.5638C21.5006 20.5436 20.8456 19.8559 20.8658 19.0277L21.0101 13.1128L10.4624 23.6604C9.87665 24.2462 8.9269 24.2462 8.34111 23.6604C7.75533 23.0747 7.75533 22.1249 8.34111 21.5391L18.8888 10.9915L12.9739 11.1357C12.1457 11.1559 11.458 10.5009 11.4378 9.67274Z"
      />
    </svg>
  );
}

export default ArrowRight;
