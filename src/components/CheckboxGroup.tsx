import { Input } from "./Input";

export function CheckboxGroup({ items, name, title }: any) {
  return (
    <div className="checkbox-group">
      <h1>{title}</h1>
      {items.map((item: any) => (
        <Input
          label={item}
          type="checkbox"
          name={name}
          key={item}
          row
          value={item}
        />
      ))}
    </div>
  );
}
