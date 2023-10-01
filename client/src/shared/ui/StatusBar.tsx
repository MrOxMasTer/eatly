import { match } from 'ts-pattern';
import { cn } from '../lib/utils/cn';

interface IStatusBarPros {
    status: string;
    className: string;
}

export const StatusBar = ({ status, className }: IStatusBarPros) => (
    <>
        {match(status)
            .with('healthy', () => (
                <div
                    className={cn(
                        'flex w-fit items-center rounded-[4.3px] bg-coconutCream text-goldenGrass',
                        className,
                    )}>
                    Healthy
                </div>
            ))
            .with('trending', () => (
                <div
                    className={cn(
                        'flex w-fit items-center rounded-[4.3px] bg-mandysPink text-pomegranate',
                        className,
                    )}>
                    <span>Trending</span>
                </div>
            ))
            .with('supreme', () => (
                <div
                    className={cn(
                        'flex w-fit items-center rounded-[4.3px] bg-chateauGreen text-seaGreen',
                        className,
                    )}>
                    <span>Trending</span>
                </div>
            ))
            .otherwise(() => null)}
    </>
);
