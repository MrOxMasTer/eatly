'use client';

import { usersServices } from '@/shared/api/user/users';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateUser } from 'contracts';

export const useCreateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: CreateUser) => {
            const res = await usersServices.createUser(data);

            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user'],
            });
        },
    });
};
