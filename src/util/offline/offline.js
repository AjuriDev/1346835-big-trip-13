import "./offline.css";

const SHOW_TIME = 5000;

const offlineContainer = document.createElement(`div`);
let offlineElement = null;
offlineContainer.classList.add(`offline-container`, `visually-hidden`);
document.body.append(offlineContainer);

const setOffline = () => {
  offlineElement = document.createElement(`div`);
  offlineElement.classList.add(`offline-item`);
  offlineElement.innerText = `offline`;
  offlineContainer.append(offlineElement);
  offlineContainer.classList.remove(`visually-hidden`);
};

const removeOffline = () => {
  offlineContainer.classList.add(`visually-hidden`);
  offlineElement.remove();
};

const toast = (message) => {
  const toastItem = document.createElement(`div`);
  toastItem.textContent = message;
  toastItem.classList.add(`toast-item`);

  offlineContainer.append(toastItem);

  setTimeout(() => {
    toastItem.remove();
  }, SHOW_TIME);
};

export {setOffline, removeOffline, toast};
