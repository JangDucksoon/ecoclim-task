'use client';

import { useAlertStore } from '@/lib/store/alert-store';
import { AlertCircleIcon } from 'lucide-react';
import { Separator } from '../ui/separator';
import { useEffect } from 'react';

export function AlertBox() {
    const { isOpen, message, hide } = useAlertStore();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="bg-background/50 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="p-6 max-w-1/2 flex min-w-[300px] flex-col gap-y-4 rounded-lg border border-red-500 bg-white shadow-xl dark:bg-gray-800">
                <div className="flex items-center justify-center gap-x-4">
                    <div className="rounded-full bg-red-100 p-2 text-red-600">
                        <AlertCircleIcon size={16} />
                    </div>
                    <h2 className="text-(length:--font-size-label-medium) font-semibold text-gray-800">Alert</h2>
                </div>

                <Separator />

                <div className="max-h-[300px] overflow-auto">
                    <p className="whitespace-pre-wrap break-all">{message}</p>
                </div>

                <Separator />

                <div className="flex w-full justify-center">
                    <button
                        className="min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-md bg-red-500 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-red-500"
                        onClick={hide}
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
}
