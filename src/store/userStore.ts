import { create } from "zustand";

interface User {
    id: string;
    username: string;
    avatarUrl: string;
    email: string;
    stats: {
        recentProgress: number;
        recentProgressMax: number;
        streakActivity: number;
        totalPlaytime: number;
        achievementsUnlocked: number;
    };
    preferences: {
        theme: 'light' | 'dark';
        language: string;
        notifications: {
            email: boolean;
            push: boolean;
            streamStatus: boolean;
        };
        privacy: {
            profileVisibility: 'public' | 'friends' | 'private';
            showOnlineStatus: boolean;
        };
    };
}

interface UserStore {
    currentUser: User | null;
    login: (user: User) => void;
    logout: () => void;
    updateStats: (stats: Partial<User['stats']>) => void;
    updatePreferences: (preferences: Partial<User['preferences']>) => void;
    setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    currentUser: null,

    login: (user) => set({ currentUser: user }),

    logout: () => set({ currentUser: null }),

    setUser: (user) => set({ currentUser: user }),

    updateStats: (stats) =>
        set((state) => ({
            currentUser: state.currentUser
                ? { ...state.currentUser, stats: { ...state.currentUser.stats, ...stats } }
                : null,
        })),

    updatePreferences: (preferences) =>
        set((state) => ({
            currentUser: state.currentUser
                ? { ...state.currentUser, preferences: { ...state.currentUser.preferences, ...preferences } }
                : null,
        })),
})); 