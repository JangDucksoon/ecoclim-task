'use client';

import { alertBox } from '@/lib/store/alert-store';
import { useEffect } from 'react';

const temp_message = [
    '사용통계',
    '데이터 요청 관리',
    '회원관리',
    '권한/그룹 관리',
    '화면 및 메뉴',
    '코드 및 인증키 관리',
    '게시판 관리',
    '콘텐츠 관리',
    '사용통계',
    '데이터 요청 관리',
    '회원관리',
    '권한/그룹 관리',
    '화면 및 메뉴',
    '코드 및 인증키 관리',
    '게시판 관리',
    '콘텐츠 관리',
    '사용통계',
    '데이터 요청 관리',
    '회원관리',
    '권한/그룹 관리',
    '화면 및 메뉴',
    '코드 및 인증키 관리',
    '게시판 관리',
    '콘텐츠 관리'
];
export default function ClientCompoent() {
    const message = temp_message.map((m) => `· ${m}`).join('\r\n');

    useEffect(() => {
        alertBox.show(message);
    });
    return <div></div>;
}
