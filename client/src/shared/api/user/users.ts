import { CreateUser } from 'contracts';
import { api } from '../api';

export const usersServices = {
    async createUser(data: CreateUser) {
        return api.post<unknown>(`/auth/registration`, data);
    },
};
