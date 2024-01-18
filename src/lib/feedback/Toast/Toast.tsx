type TToast = {
  icon?: string;
};

export const Toast = (props: TToast) => {
  const { icon } = props;
  return (
    <div className='toast-04hl bg-tertiary--200'>
      <span className={`icon icon-${icon}`} />
    </div>
  );
};
