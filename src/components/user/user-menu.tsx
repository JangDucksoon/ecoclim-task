'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuSeparatorDashed,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { Info, Settings, LogOut } from 'lucide-react';
import { PUBLIC_ECOCLIM_MAIN } from '@/lib/env';

export default function UserMenu() {
    const [open, setOpen] = useState(false);

    function myMenuClickHandler() {
        setOpen(false);

        console.log('마이 메뉴 세팅 팝업 올릴것');
    }

    return (
        <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <button className="h-(--icon-size-small) w-(--icon-size-small) mr-(--padding-03) cursor-pointer bg-[#ffffff33]">
                    <img src="/images/common/ico-user-info-box-common.svg" alt="사용자 메뉴" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]" align="center" sideOffset={15}>
                <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link href={`${PUBLIC_ECOCLIM_MAIN}/uss/umt/myPageMain.do`}>
                        마이페이지
                        <DropdownMenuShortcut>
                            <Info />
                        </DropdownMenuShortcut>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparatorDashed />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="hover:bg-transparent focus:bg-transparent" asChild onClick={(e) => e.preventDefault()}>
                        <div>
                            <span className="opacity-50">마이메뉴</span>
                            <DropdownMenuShortcut className="cursor-pointer" onClick={myMenuClickHandler}>
                                <Settings />
                            </DropdownMenuShortcut>
                        </div>
                    </DropdownMenuItem>
                    {staticMyMenu.map((item) => (
                        <DropdownMenuItem key={item.menuNm} className="cursor-pointer" asChild>
                            <Link href={item.menuUrl}>{item.menuNm}</Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" asChild>
                    <button className="w-full">
                        로그아웃
                        <DropdownMenuShortcut>
                            <LogOut />
                        </DropdownMenuShortcut>
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

/* 1. 마이메뉴 하드코딩. 추후, 서버컴포넌트에서 패칭한 데이터를 prop으로 받아 처리할것
2. header-menu.tsx의 dynamic 컴포넌트로 링크 생성할 것 */

const staticMyMenu = [
    { menuNm: '메인', menuUrl: '/' },
    { menuNm: '공통분류코드 관리', menuUrl: '/mng/code/classification' }
];
