import { Input } from "./Input";

export function RadioGroup({ items, name, title }: any) {
  return (
    <div className="checkbox-group">
      <h1>{title}</h1>
      {items.map((item: any) => (
        <Input
          label={item}
          type="radio"
          name={name}
          key={item}
          row
          value={item}
        />
      ))}
    </div>
  );
}
