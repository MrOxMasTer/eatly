'use client';

export const SignUpForm = () => {
    const onSubmit = () => {};

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="password" name="password" />

            <button type="submit">sign up</button>
        </form>
    );
};
