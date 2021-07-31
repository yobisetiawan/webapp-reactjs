export const getDefValue = (dt: any, field: string, def: any = "") => {
  if (dt && dt[field]) {
    return dt[field];
  }
  return def;
};

export const getErr422 = (err: any) => {
  if (err && err.response.status == 422) {
    return err.response.data.errors;
  }
  return null;
};
