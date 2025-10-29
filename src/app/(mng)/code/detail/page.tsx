import { H1 } from '@/components/common/heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '상세코드 관리',
    description: '상세코드 관리입니다.'
};

export default function Page() {
    return <H1>공통상세관리 목록</H1>;
}
