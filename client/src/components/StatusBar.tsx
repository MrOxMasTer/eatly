import { match } from 'ts-pattern';

const StatusBar = ({
    status,
    className,
}: {
    status: string;
    className: string;
}) => (
    <>
        {match(status)
            .with('healthy', () => (
                <div
                    className={`${className} flex w-fit items-center rounded-[4.3px] bg-coconutCream text-goldenGrass`}>
                    Healthy
                </div>
            ))
            .with('trending', () => (
                <div
                    className={`${className} flex w-fit items-center rounded-[4.3px] bg-mandysPink text-pomegranate`}>
                    <span>Trending</span>
                </div>
            ))
            .with('supreme', () => (
                <div
                    className={`${className} flex w-fit items-center rounded-[4.3px] bg-chateauGreen text-seaGreen`}>
                    <span>Trending</span>
                </div>
            ))
            .otherwise(() => null)}
    </>
);

export default StatusBar;
