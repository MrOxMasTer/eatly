import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';
import { cn } from '../lib/utils/cn';

type ProgressAddProps = {
    classNameIndicator: string;
};

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> &
        ProgressAddProps
>(({ className, classNameIndicator, value, ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            'bg-neutral-100 dark:bg-neutral-800 relative h-4 w-full overflow-hidden rounded-full',
            className,
        )}
        {...props}>
        <ProgressPrimitive.Indicator
            className={cn(
                'bg-neutral-900 dark:bg-neutral-50 h-full w-full flex-1 transition-all',
                classNameIndicator,
            )}
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
    </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
