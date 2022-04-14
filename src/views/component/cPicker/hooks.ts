export interface ICity {
  code: string;
  name: string;
  spell: string;
  label: string;
}
export interface ICityOption {
  value: string;
  label: string;
}
export function useCity(cities: any) {
  const options: ICityOption[] = [];
  for (const key in cities) {
    if (Object.prototype.hasOwnProperty.call(cities, key)) {
      const list: ICity[] = cities[key];
      list.forEach((item: ICity) => {
        const opt: ICityOption = { value: "0", label: "null" };
        opt.value = item.code;
        opt.label = item.name;
        options.push(opt);
      });
    }
  }
  return options;
}
