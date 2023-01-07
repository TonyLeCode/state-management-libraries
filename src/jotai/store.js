import { atom, useAtom } from 'jotai'

export const dataAtom = atom([]);
export const displayCountAtom = atom(0);

export const incrementCountAtom = atom(
  null,
  (get, set) => {
    set(displayCountAtom, get(displayCountAtom) + 5)
  }
)

export const resetCountAtom = atom(
  null,
  (get, set) => {
    set(displayCountAtom, 0)
  }
)