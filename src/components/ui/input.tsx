import * as React from 'react';

import { cn } from '@/lib/style-utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                'text-(length:--font-size-label-small) rounded-(--input-text-border-radius) py-(--input-padding-y) px-(--input-padding-x) w-full max-w-full border',
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = 'Input';

export { Input };
