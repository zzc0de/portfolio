const Card = ({ children, className }) => {
  return (
    <div
      className={`rounded-lg border-slate-400 shadow-2xl border-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
