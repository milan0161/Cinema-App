export const getTomorow = (stringDate: string): string => {
  return new Date(new Date(stringDate).getTime() + 60 * 60 * 24 * 1000)
    .toISOString()
    .substring(0, 10);
};

export const getYesterday = (stringDate: string): string => {
  return new Date(new Date(stringDate).getTime() - 60 * 60 * 24 * 1000)
    .toISOString()
    .substring(0, 10);
};
