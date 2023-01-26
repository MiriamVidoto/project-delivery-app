export function setDataToLocalStorage(nameKey, data) {
  const dataStr = JSON.stringify(data);
  localStorage.setItem(nameKey, dataStr);
}
export function getDataFromLocalStorage(nameKey) {
  if (localStorage.getItem(nameKey)) {
    return JSON.parse(localStorage.getItem(nameKey));
  }
  return undefined;
}
