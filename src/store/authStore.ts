import { create } from 'zustand';

interface User {
  userId: number;
  name: {
    first: string;
    last: string;
  };
}

export interface AuthStoreInterface {
  authenticated: boolean;
  setAuthentication: (val: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStoreInterface>((set) => ({
  authenticated: false,
  user: null,
  setAuthentication: (val) => set({ authenticated: val }),
  setUser: (user) => set({ user }),
  logout: () => {
    set({ user: null });
    set({ authenticated: false });
  },
}));
