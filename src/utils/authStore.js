import { create } from 'zustand';

const useAuthStore = create((set) => ({
  chooseRoleSenior: false,
  chooseRoleCaregiver: false,
  setRole: (sorc) => set( sorc == true ? {chooseRoleSenior: true, chooseRoleCaregiver: false} : {chooseRoleSenior: false, chooseRoleCaregiver: true}),
}));

export default useAuthStore;