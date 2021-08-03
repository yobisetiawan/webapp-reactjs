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

export const getServerErr = (dt: any, field: string, status = false) => {
  let res = undefined;
  if (dt && dt[field]) {
    res = dt[field];
    if (Array.isArray(dt[field])) {
      res = dt[field][0];
    }
  }
  if (status) {
    return res ? "error" : undefined;
  }
  return res;
};
