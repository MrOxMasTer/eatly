'use client';

import { FormEvent } from 'react';

export const ContactForm = () => {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
    };

    return (
        <form onSubmit={onSubmit} className="mt-[46px]">
            <input
                className="input"
                type="text"
                placeholder="ENTER NANE"
                name="name"
            />
            <input
                className="input mt-3"
                type="email"
                placeholder="ENTER YOUR EMAIL"
                name="email"
            />
            <textarea
                placeholder="ENTER THE PROBLEM OR QUERY"
                className="input mt-[51px] min-h-[210px]"
                name="query"
            />
            <button
                type="submit"
                className="btn mt-[22px] w-full py-[17px] font-poppins text-[13px] font-medium capitalize">
                send now
            </button>
        </form>
    );
};
