export const getDefValue = (dt: any, field: string, def: any = "") => {
  if (dt && dt[field]) {
    return dt[field];
  }
  return def;
};
