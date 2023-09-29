'use client';

import { useEffect, useState } from 'react';

const useTelegram = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [wa, setWa] = useState<WebApp>();

    const webAppUrl = process.env.TG_WEBAPPURL;

    useEffect(() => {
        setWa(() => window.Telegram.WebApp);
        setIsLoading(() => false);
    }, []);

    return {
        isLoading,
        wa,
        webAppUrl,
    };
};

export default useTelegram;
