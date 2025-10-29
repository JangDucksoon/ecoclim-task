import { cn } from '@/lib/style-utils';

export function H1({ children, className, ...props }: React.ComponentPropsWithoutRef<'h1'>) {
    return (
        <h1
            className={cn(
                'text-(length:--font-size-heading-medium) pb-(--padding-07) border-b-(--color-border-gray-subtle) mb-(--padding-08) border-b font-bold',
                className
            )}
            {...props}
        >
            {children}
        </h1>
    );
}
