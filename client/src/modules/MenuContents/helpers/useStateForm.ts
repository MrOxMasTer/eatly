import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TFormMenu } from '@/types/formMenu.types';

interface IUseStateForm {
    query: TFormMenu;
    setQuery: (newQuery: TFormMenu) => void;
}

const useStateForm = create<IUseStateForm>()(
    devtools((set, get) => ({
        query: {},

        setQuery: (newQuery: TFormMenu) =>
            set((state) => ({
                ...state,
                query: { ...get().query, ...newQuery },
            })),
    })),
);

export default useStateForm;
