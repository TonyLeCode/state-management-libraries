import { proxy } from 'valtio'

const store = proxy({
  data: [],
  displayCount: 0,
})

export const increaseCount = () => {
  store.displayCount = store.displayCount + 5;
}
export const resetCount = () => {
  store.displayCount = 0;
}
export const setData = (data) => {
  store.data = data;
}

export default store;