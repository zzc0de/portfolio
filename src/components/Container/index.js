const Container = ({ children, className, id }) => {
  return (
    <>
      <div className={`w-full px-40 ${className}`} id={id}>
        {children}
      </div>
    </>
  );
};

export default Container;
