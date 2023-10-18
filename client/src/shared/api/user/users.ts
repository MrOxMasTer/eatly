import { api } from '../api';

export const usersServices = {
    async createUser<T>(data: T) {
        return api
            .post<T>(`/auth/registration`, data)
            .then((resp) => resp)
            .catch((error) => error);
    },
};
