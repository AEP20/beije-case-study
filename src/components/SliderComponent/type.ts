export type SliderComponentProps = {
  title: string;
  minValue: number;
  maxValue: number;
  value: number;
  onValueChange: (value: number) => void;
  step?: number;
};
