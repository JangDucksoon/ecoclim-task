import { H1 } from '@/components/common/heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '공통분류코드 관리',
    description: '공통분류코드 관리입니다.'
};

export default function Page() {
    return <H1>분류코드 등록 페이지</H1>;
}
