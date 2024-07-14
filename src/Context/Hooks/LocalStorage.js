const key = "LocalStorageKey";
export const LocalStorageHook = (id) => {
  if (id) {
    const data = localStorage.getItem(key);
    const localData = data ? JSON.parse(data) : [];
    if (localData.length < 1) {
      localStorage.setItem(key, JSON.stringify([id]));
    }
    localStorage.setItem(key, JSON.stringify([...localData, id]));
    const returnData = localStorage.getItem(key);
    const returnLocalData = returnData ? JSON.parse(returnData) : [];
    return [returnLocalData];
  }
};
