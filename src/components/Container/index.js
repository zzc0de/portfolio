const Container = ({ children, className }) => {
  return (
    <>
      <div className={`w-full px-40 ${className}`}>{children}</div>
    </>
  );
};

export default Container;
