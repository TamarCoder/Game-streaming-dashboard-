import { create } from "zustand";

interface Stream {
    id: string;
    title: string;
    game: string;
    streamerName: string;
    streamerAvatar: string;
    viewers: number;
    duration: string;
    thumbnail: string;
    isLive: boolean;
}

interface Channel {
    id: string;
    name: string;
    avatar: string;
    isOnline: boolean;
    viewers?: number;
}

interface StreamsStore {
    streams: Stream[];
    channels: Channel[];
    activeFilter: string;

    addStream: (newStream: Stream) => void;
    removeStream: (streamId: string) => void;
    addChannel: (newChannel: Channel) => void;
    removeChannel: (channelId: string) => void;
    setActiveFilter: (filter: string) => void;
    updateViewers: (streamId: string, viewers: number) => void;
    toggleFavorite: (channelId: string) => void;
    clearFilters: () => void;
}

export const useStreamsStore = create<StreamsStore>((set) => ({
    streams: [],
    channels: [],
    activeFilter: "All",

    addStream: (newStream) =>
        set((state) => ({ streams: [...state.streams, newStream] })),

    removeStream: (streamId) =>
        set((state) => ({
            streams: state.streams.filter((stream) => stream.id !== streamId),
        })),

    addChannel: (newChannel) =>
        set((state) => ({ channels: [...state.channels, newChannel] })),

    removeChannel: (channelId) =>
        set((state) => ({
            channels: state.channels.filter(
                (channel) => channel.id !== channelId
            ),
        })),

    setActiveFilter: (filter) => set(() => ({ activeFilter: filter })),

    updateViewers: (streamId, viewers) =>
        set((state) => ({
            streams: state.streams.map((stream) =>
                stream.id === streamId ? { ...stream, viewers } : stream
            ),
        })),

    toggleFavorite: (channelId) =>
        set((state) => ({
            channels: state.channels.map((channel) =>
                channel.id === channelId
                    ? { ...channel, isOnline: !channel.isOnline }
                    : channel
            ),
        })),

    clearFilters: () => set(() => ({ activeFilter: "All" })),
}));