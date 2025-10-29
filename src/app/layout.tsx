import type { Metadata } from 'next';
import './css/globals.css';
import React from 'react';
import Header from '@/components/template/header/header';
import { TooltipProvider } from '@/components/ui/tooltip';
import Footer from '@/components/template/footer/footer';
import { AlertBox } from '@/components/common/message-box';

export const metadata: Metadata = {
    title: {
        template: '%s | 생태계 기후대응 통합정보 관리시스템',
        default: '생태계 기후대응 통합정보 관리시스템'
    },
    description: '생태계 기후대응 통합정보 관리시스템입니다.'
};

export default async function RootLayout({ children, modal }: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <head></head>
            <body>
                <AlertBox />
                <TooltipProvider>
                    <header className="border-b-(--color-border-gray-subtle) bg-(--color-background-white-subtle) py-(--padding-04) sticky top-0 z-20 border-b px-0">
                        <Header />
                    </header>
                    {children}
                    <footer className="bg-(--footer-color-background) mt-32 block">
                        <Footer />
                    </footer>
                </TooltipProvider>
            </body>
        </html>
    );
}
