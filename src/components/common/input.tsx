'useClient';

import React from 'react';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { EcoclimSelect, selectBoxType } from './select';
import { Search } from 'lucide-react';
import { cn } from '@/lib/style-utils';

type inputBoxType = React.ComponentProps<'input'> & { setValue: (value: string) => void; search: boolean; onClickSearch?: (e: React.MouseEvent) => void };

export function EcoclimInput({ value, setValue, search = false, onClickSearch, ...props }: inputBoxType) {
    const { className, ...rest } = props;
    const baseClass = 'text-(length:--input-font-size-medium) border-none px-0 py-0 outline-none focus:outline-none';
    const customClass = cn(baseClass, className);
    return (
        <div className="flex w-full flex-row items-center justify-between px-0 py-0">
            <Input className={customClass} value={value} onChange={(e) => setValue(e.target.value)} {...rest} />
            {search && (
                <button className="cursor-pointer" onClick={onClickSearch}>
                    <Search className="w-(--icon-size-medium) h-(--icon-size-medium)" />
                </button>
            )}
        </div>
    );
}

export function EcoclimInputWithLabel({ label }: { label: string }) {
    return <Input />;
}

export function EcoclimInputWithSelect({ selectProps, inputProps, className }: { selectProps: selectBoxType; inputProps: inputBoxType; className?: string }) {
    return (
        <div
            className={cn(
                'rounded-(--border-radius-small) border-(--color-border-gray-subtle) px-(--padding-04) gap-(--gap-03) py-(--padding-02) focus-within:border-(--color-background-primary) flex w-full items-center border bg-white',
                className
            )}
        >
            <EcoclimSelect
                className="pr-(--select-padding-right-medium) pl-(--padding-02) w-auto shrink-0 grow-0 basis-auto border-none py-0 focus:outline-none"
                {...selectProps}
            />
            <Separator orientation="vertical" className="h-8" />
            <EcoclimInput className="min-w-0 flex-1 border-none outline-none" {...inputProps} />
        </div>
    );
}
