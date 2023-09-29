import { cn } from '@/helpers/utils';

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'bg-neutral-100 dark:bg-neutral-800 animate-pulse rounded-md bg-mercury',
                className,
            )}
            {...props}
        />
    );
}

export { Skeleton };
