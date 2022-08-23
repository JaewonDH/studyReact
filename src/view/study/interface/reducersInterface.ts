export interface ICounterInitValue {
  counter: number;
  value: number;
}

export interface ITodoItem {
  id: number;
  label: string;
  toogle: boolean;
}

export interface ITodoProps {
  todoArray: Array<ITodoItem>;
  onAdd: Function;
  onRemove: Function;
  onToggle: Function;
}
