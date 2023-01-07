import create from 'zustand'

const useStore = create((set) => ({
  data: [],
  displayCount: 0,
  increaseCount: () => set((state) => ({ displayCount: state.displayCount <= 100 ? state.displayCount + 5 : 100 })),
  resetCount: () => set({ displayCount: 0 }),
  setData: (data) => set({data: data}),
}))

export default useStore;