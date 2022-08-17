export function Input({
  label,
  type,
  key,
  value,
  row,
  placeholder,
  name,
}: any) {
  return (
    <div className={`input-unit ${row ? "row" : "column"}`}>
      {label !== "" && type !== "submit" && (
        <label htmlFor={`input-${key}`}>{label}</label>
      )}
      <input
        type={type}
        name={name}
        id={`input-${key}`}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
