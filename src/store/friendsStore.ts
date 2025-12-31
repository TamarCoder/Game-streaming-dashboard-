import { create } from "zustand";

interface Friend {
  id: string;
  name: string;
  avatarUrl: string;
  isOnline: boolean;
  status: string;
  currentGame?: string;
}

interface FriendsStore {
  friends: Friend[];  
  addFriend: (friend: Friend) => void; 
  removeFriend: (id: string) => void;
  updateStatus: (id: string, isOnline: boolean) => void;
  updateGame: (id: string, currentGame: string) => void;
  updateAllStatuses: (statuses: { id: string; isOnline: boolean }[]) => void;
  getFriendById: (id: string) => Friend | undefined;
}
export const useFriendsStore = create<FriendsStore>((set, get) => ({
  friends: [],
  addFriend: (friend) =>
    set((state) => ({
      friends: [...state.friends, friend],
    })),

  removeFriend: (id) =>
    set((state) => ({
      friends: state.friends.filter((f) => f.id !== id),
    })),

  updateStatus: (id, isOnline) =>
    set((state) => ({
      friends: state.friends.map((f) => (f.id === id ? { ...f, isOnline } : f)),
    })),
  updateGame: (id, currentGame) =>
    set((state) => ({
      friends: state.friends.map((f) =>
        f.id === id ? { ...f, currentGame } : f
      ),
    })),

  updateAllStatuses: (statuses) =>
    set((state) => ({
      friends: state.friends.map((f) => {
        const statusUpdate = statuses.find((s) => s.id === f.id);
        return statusUpdate ? { ...f, isOnline: statusUpdate.isOnline } : f;
      }),
    })),
  getFriendById: (id) =>
    get().friends.find((f) => f.id === id), 


}));
