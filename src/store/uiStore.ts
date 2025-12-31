import { create } from "zustand";

interface UIStore {
  isSettingsOpen: boolean;
  isNotificationOpen: boolean;
  isProfileDropdownOpen: boolean;
  activeTab: string;
  activeStatTab: "daily" | "month" | "year";
  isSidebarCollapsed: boolean;

  openSettings: () => void;
  closeSettings: () => void;
  toggleSettings: () => void;
  setActiveTab: (tab: string) => void;
  toggleNotification: () => void;
  toggleProfileDropdown: () => void;
  setActiveStatTab: (tab: "daily" | "month" | "year") => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  closeAllModals: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isSettingsOpen: false,
  isNotificationOpen: false,
  isProfileDropdownOpen: false,
  activeTab: "home",
  activeStatTab: "daily",
  isSidebarCollapsed: false,

  openSettings: () => set({ isSettingsOpen: true }),
  closeSettings: () => set({ isSettingsOpen: false }),

  toggleSettings: () =>
    set((state) => ({ isSettingsOpen: !state.isSettingsOpen })),

  setActiveTab: (tab: string) => set({ activeTab: tab }),

  toggleNotification: () =>
    set((state) => ({ isNotificationOpen: !state.isNotificationOpen })),

  toggleProfileDropdown: () =>
    set((state) => ({ isProfileDropdownOpen: !state.isProfileDropdownOpen })),

  setActiveStatTab: (tab: "daily" | "month" | "year") =>
    set({ activeStatTab: tab }),

  toggleSidebar: () =>
    set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
  
  closeSidebar: () => set({ isSidebarCollapsed: false }),

  closeAllModals: () => set({
    isSettingsOpen: false,
    isNotificationOpen: false,
    isProfileDropdownOpen: false,
  }),
}));
