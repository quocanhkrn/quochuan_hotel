export type Room = {
  name: string[];
  area: number;
  bed: string;
  price: {
    hourly: { anHour: number; step: number };
    night: number;
    day: number;
  };
  cover: string;
};
