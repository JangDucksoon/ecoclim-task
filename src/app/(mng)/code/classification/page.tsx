import { H1 } from '@/components/common/heading';
import { Metadata } from 'next';
import ClientCompoent from './client-component';

export const metadata: Metadata = {
    title: '공통분류코드 관리',
    description: '공통분류코드 관리입니다.'
};

export default function Page() {
    return (
        <>
            <H1>공통분류코드관리 목록</H1>
            <ClientCompoent />
        </>
    );
}
