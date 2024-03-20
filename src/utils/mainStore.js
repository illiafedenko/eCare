import { create } from 'zustand';

const useMainStore = create((set) => ({
  preferPhone: false,
  preferEmail: false,
  setContactMethod: (pore) => set( pore == true ? {preferPhone: true, preferEmail: false} : {preferPhone: false, preferEmail: true}),
}));

export default useMainStore;