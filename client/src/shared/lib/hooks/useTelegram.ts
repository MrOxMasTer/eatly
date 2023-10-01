'use client';

import { useEffect, useState } from 'react';

const useTelegram = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [wa, setWa] = useState<WebApp | undefined>(undefined);

    const webAppUrl = process.env.TG_WEBAPPURL;

    useEffect(() => {
        setWa(() => window.Telegram.WebApp);

        if (wa && wa?.platform === 'unknown') {
            setIsError(true);
        }

        if (wa && wa?.platform !== 'unknown') {
            setIsLoading(() => false);
        }
    }, [wa]);

    return {
        isLoading,
        isError,
        wa,
        webAppUrl,
    };
};

export default useTelegram;
