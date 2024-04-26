import { create } from 'zustand';

const useChatStore = create((set) => ({
  readySend: false,
  sendingMessage: '',
  setReadySend: (ready) => set({ readySend: ready }),
  setSendingMessage: (message) => set({ sendingMessage: message })
}));

export default useChatStore;