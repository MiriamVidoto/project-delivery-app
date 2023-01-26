function setDataToLocalStorage(nameKey, data) {
  const dataStr = JSON.stringify(data);
  localStorage.setItem(nameKey, dataStr);
}

export default setDataToLocalStorage;
