export type SelectedItemsCardProps = {
  items: Array<{name: string; quantity: number}>;
  type: 'ped' | 'dailyPed' | 'tampon';
  title: string;
};
