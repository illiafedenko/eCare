import { create } from 'zustand';

const useAuthStore = create((set) => ({
  userType: "",
  chooseRoleSenior: false,
  chooseRoleCaregiver: false,
  uid: "",
  accessToken: "",
  //caregiver
  caregiverPrimaryInfo: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
    birthday: "",
    gender: "man",
  },
  caregiverAddressInfo: {
    street: "",
    city: "",
    state: "",
    zipcode: "",
  },
  caregiverEducationInfo: {
    school: "",
    degree: "",
    graduationYear: "",
  },
  caregiverWorkHistoryInfo: {
    workingStatus: "FT",
    driverlicense: true,
    hourInWeek: "4",
    prefermorning: false,
    preferafternoon: false,
    preferevening: false,
    preferweekend: false,
    vaccinated: true,
  },
  caregiverMoreInfo: {
    coverletter: "",
  },
  //senior
  seniorType: "",
  seniorInfo: {
    phonenumber: "",
    birthday: "",
    gender: "man",
    street: "",
    city: "",
    state: "AL",
    zipcode: "",
  },
  //
  setUserType: (type) => set({ userType: type }),
  setRole: (sorc) => set(sorc == true ? { chooseRoleSenior: true, chooseRoleCaregiver: false } : { chooseRoleSenior: false, chooseRoleCaregiver: true }),
  setUid: (str) => set({ uid: str }),
  setAccessToken: (str) => set({ accessToken: str }),
  //setcaregiver
  setCaregiverPrimaryInfo: (obj) => set({ caregiverPrimaryInfo: obj }),
  setCaregiverAddressInfo: (obj) => set({ caregiverAddressInfo: obj }),
  setCaregiverEducationInfo: (obj) => set({ caregiverEducationInfo: obj }),
  setCaregiverWorkHistoryInfo: (obj) => set({ caregiverWorkHistoryInfo: obj }),
  setCaregiverMoreInfo: (obj) => set({ caregiverMoreInfo: obj }),
  //setsenior
  setSeniorType: (type) => set({ seniorType: type }),
  setSeniorInfo: (obj) => set({ seniorInfo: obj }),
}));

export default useAuthStore;