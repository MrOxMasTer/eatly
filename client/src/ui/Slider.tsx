import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '@/helpers/utils';

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn(
            'relative flex w-full touch-none select-none items-center',
            className,
        )}
        {...props}>
        <SliderPrimitive.Track className="relative h-[5px] w-full grow overflow-hidden rounded-full bg-primary">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="ring-offset-background focus-visible:ring-ring block h-5 w-5 rounded-full border-[3.7px] border-solid border-lavenderGray bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
));

SliderPrimitive.Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
