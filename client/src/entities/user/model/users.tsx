import { IUser } from '@/shared/api/user/models';
import { create } from 'zustand';

export const useUser = create<IUser>((set, get) => ({
    id: 0,
    selectedRestaurants: [],

    // addSelectedRestaurants: (sel) =>
    //     set((state) => ({
    //         ...state,
    //         selectedRestaurants: [...state.selectedRestaurants, sel],
    //     })),

    // removeSelectedRestaurants: (id) =>
    //     set((state) => ({
    //         ...state,
    //         selectedRestaurants: state.selectedRestaurants.filter(
    //             (item) => item.id !== id,
    //         ),
    //     })),
}));
