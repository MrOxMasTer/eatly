import { useEffect, useLayoutEffect, useState } from 'react';

interface IUseMatchMediaArgs {
    [name: string]: string;
}

interface IMediaQueryLists {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    [name: string]: boolean;
}

type TMediaQueryLists = [string, MediaQueryList];
// type TMediaQueryValues = [
//     ['isMobile', boolean],
//     ['isTablet', boolean],
//     ['isDesktop', boolean],
//     [string, boolean],
// ];

const createStateMediaQuery = (mediaQueryLists: TMediaQueryLists[]) => {
    const getValues = mediaQueryLists.map((mql) => [mql[0], mql[1].matches]);

    const ObjectMediaQueryLists: IMediaQueryLists =
        Object.fromEntries(getValues);

    return ObjectMediaQueryLists;
};

const createMediaQueryLists = (
    standartQueries: IUseMatchMediaArgs,
): TMediaQueryLists[] =>
    Object.entries(standartQueries).map((keyAndValue: [string, string]) => [
        keyAndValue[0],
        window.matchMedia(keyAndValue[1]),
    ]);

// TODO: доделать выходную типизацию
const useMatchMedia = (queries?: IUseMatchMediaArgs) => {
    const initialValue = {
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    };

    const standartQueries: IUseMatchMediaArgs = {
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px) and (max-width: 1023px)',
        isDesktop: '(min-width: 1024px)',
        ...queries,
    };

    const [value, setValue] = useState<IMediaQueryLists>(initialValue);

    useEffect(() => {
        const mediaQueryLists = createMediaQueryLists(standartQueries);

        setValue(createStateMediaQuery(mediaQueryLists));
    }, []);

    useLayoutEffect(() => {
        const mediaQueryLists = createMediaQueryLists(standartQueries);
        const handler = () => setValue(createStateMediaQuery(mediaQueryLists));

        mediaQueryLists.forEach((keyAndMql) =>
            keyAndMql[1].addEventListener('change', handler),
        );

        return () =>
            mediaQueryLists.forEach((keyAndMql) =>
                keyAndMql[1].removeEventListener('change', handler),
            );
    });

    return value;
};

export default useMatchMedia;
