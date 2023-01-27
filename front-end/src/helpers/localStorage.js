const getData = (key) => JSON.parse(localStorage.getItem(key));
const setData = (key, obj) => localStorage.setItem(key, JSON.stringify(obj));
const removeItem = (key) => localStorage.removeItem(key);
const removeAll = () => localStorage.clear();

const verifyStorage = (key) => {
  if (!getData(key)) setData(key, {});
  getData(key);
};

module.exports = {
  getData,
  setData,
  removeItem,
  removeAll,
  verifyStorage,
};
