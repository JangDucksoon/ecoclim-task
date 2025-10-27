import { cn } from '@/lib/style-utils';

type selectDataType = {
    name: string | number;
    value: string | number;
    selected?: boolean;
    [key: string]: any;
};

export type selectBoxType = {
    data: selectDataType[];
    emptyOption: boolean;
    emptyLabel?: string;
    value: string;
    setValue: (value: string) => void;
    className?: string;
};

export function EcoclimSelect({
    data,
    emptyOption = true,
    emptyLabel = '전체',
    value,
    setValue,
    className,
    ...props
}: {
    data: selectDataType[];
    emptyOption: boolean;
    emptyLabel?: string;
    value: string;
    setValue: (value: string) => void;
    className?: string;
}) {
    return (
        /* TODO::추후 base path 제거 시, url에 mng지워야함 */
        <select
            className={cn(
                `text-(length:--select-font-size-medium) rounded-(--select-border-radius) border-(--select-color-border) bg-position-[center_right_8px] w-full appearance-none border bg-white bg-[url('/mng/images/common/ico-select-arrow.svg')] bg-no-repeat px-4 py-4`,
                className
            )}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            {...props}
        >
            {emptyOption && <option value="">{emptyLabel}</option>}
            {data.map((o) => (
                <option key={`${o.name}-${o.value}`} value={o.value}>
                    {o.name}
                </option>
            ))}
        </select>
    );
}
