import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function EcoclimTooltip({
    children,
    content,
    duration = 0,
    side = 'bottom',
    sideOffset = 5,
    contentStyle
}: {
    children: React.ReactNode;
    content: React.ReactNode | string;
    duration?: number;
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
    contentStyle?: string;
}) {
    return (
        <Tooltip delayDuration={duration}>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
            <TooltipContent side={side} sideOffset={sideOffset} className={contentStyle}>
                {content}
            </TooltipContent>
        </Tooltip>
    );
}
