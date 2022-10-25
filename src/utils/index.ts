export const createCountryLink = ({ name }: { name: string }) => {
  return `/${name.toLowerCase().replace(/ /g, '-')}`;
};
