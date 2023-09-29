import { create } from 'zustand';

import { IActionUser, IUser } from '@/types/user.types';

const useUser = create<IUser & IActionUser>((set, get) => ({
    id: 0,
    selectedRestaurants: [],

    addSelectedRestaurants: (sel) =>
        set((state) => ({
            ...state,
            selectedRestaurants: [...state.selectedRestaurants, sel],
        })),

    removeSelectedRestaurants: (id) =>
        set((state) => ({
            ...state,
            selectedRestaurants: state.selectedRestaurants.filter(
                (item) => item.id !== id,
            ),
        })),
}));

export { useUser };
