const OperatorButton = (props: any) => {
  const {
    children, format, active, ...rest
  } = props;
  return (
    <button
      type="button"
      className={`${active ? 'bg-stone-500 dark:bg-stone-700' : 'border-none '} rounded-md flex justify-center p-1 transition-all`}
      title={format}
      {...rest}
      style={{ margin: ' 0 2px' }}
    >
      {children}
    </button>
  );
};

export default OperatorButton;
