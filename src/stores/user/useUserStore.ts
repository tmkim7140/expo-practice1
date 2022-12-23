import create from 'zustand'

interface User {
    id: string
    name: string
}

export interface useUserStateType {
    user: any,
    setUser: (user: User) => void,
}

const useUserStore = create((set) => ({
    user: { id: "0", name: "name_0" },
    setUser: (user: User) => set({ user: user }),
}));

export default useUserStore;