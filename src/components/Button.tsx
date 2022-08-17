// import "styles.css";

export function Button({ children, variant, disabled, size }: any) {
  return (
    <button className={`button ${variant} ${size}`} disabled={disabled}>
      {children}
    </button>
  );
}
