'use client';

import { useCreateUser } from '@/entities/user/model/users';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateUser, CreateUserSchema } from 'contracts';
import { useForm } from 'react-hook-form';

export const SignUpForm = () => {
    const { mutateAsync: createUser, error } = useCreateUser();

    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm<CreateUser>({
        resolver: zodResolver(CreateUserSchema),
    });

    const onSubmit = async (data: CreateUser) => {
        if (isValid) {
            const user = await createUser(data);

            if (user?.response) {
                console.log(user?.response?.data?.message);
            }
        }
    };

    return (
        <form className="mt-7 grid gap-5" onSubmit={handleSubmit(onSubmit)}>
            <label className="label label-human">
                <div className="h-5 w-5" />
                <input
                    {...register('name')}
                    placeholder="full name"
                    type="text"
                    name="name"
                />
            </label>
            <label className="label label-email">
                <div className="h-5 w-5" />
                <input
                    {...register('email')}
                    placeholder="email"
                    type="email"
                    name="email"
                />
            </label>
            <label className="label label-password">
                <div className="icon-password h-5 w-5" />
                <input
                    {...register('password')}
                    placeholder="password"
                    type="password"
                    name="password"
                />
                <div className="icon-not-prominent h-5 w-5" />
            </label>

            <button
                disabled={!isValid}
                className="btn min-h-[60px] w-full text-sm font-semibold uppercase text-pureWhite disabled:bg-nobel"
                type="submit">
                sign up
            </button>
        </form>
    );
};
