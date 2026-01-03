import { User } from "@/store/userStore";


const defaultMockUser: User = {
    id: "1",
    username: "William_Prince",
    avatarUrl: "/avatars/9.png",
    email: "william@example.com",
    stats: {
        recentProgress: 436,
        recentProgressMax: 10000,
        streakActivity: 15,
        totalPlaytime: 1200,
        achievementsUnlocked: 45,
    },
    preferences: {
        theme: "dark",
        language: "en",
        notifications: {
            email: true,
            push: false,
            streamStatus: true,
        },
        privacy: {
            profileVisibility: "public",
            showOnlineStatus: true,
        },
    }
}

export const createMockUser = (overrides?: Partial<User>): User => {
    return {
        ...defaultMockUser,
        ...overrides,
    };
}

export default defaultMockUser;