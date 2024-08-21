export type Room = {
  id: string;
  name: string[];
  area: number;
  bed: string;
  price: {
    hour: number;
    hourStep: number;
    night: number;
    day: number;
  };
  cover: string;
};
