import { create } from 'zustand';

const useAuthStore = create((set) => ({
  chooseRoleSenior: false,
  chooseRoleCaregiver: false,
  uid: "",
  accessToken: "",
  setRole: (sorc) => set(sorc == true ? { chooseRoleSenior: true, chooseRoleCaregiver: false } : { chooseRoleSenior: false, chooseRoleCaregiver: true }),
  setUid: (str) => set({ uid: str }),
  setAccessToken: (str) => set({ accessToken: str }),
}));

export default useAuthStore;