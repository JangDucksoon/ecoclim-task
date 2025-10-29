'use client';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { TASK_ECOCLIM_MAIN } from '@/lib/env';
import { headerMenuType } from '@/type/menuType';
import { getUrlWithoutBasePath } from '@/lib/util';
import Link from 'next/link';
import React, { useState } from 'react';

export default function HeaderMenu({ menuTree }: { menuTree: headerMenuType[] }) {
    const [openMenu, setOpenMenu] = useState<string>('');

    return (
        <NavigationMenu value={openMenu} onValueChange={setOpenMenu}>
            <NavigationMenuList>
                {menuTree.map((m) => (
                    <NavigationMenuItem key={m.menuNm}>
                        <NavigationMenuTrigger className="h-[60px] cursor-pointer text-[1.9rem] font-bold">{m.menuNm}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="z-99 fixed inset-0 top-[85px] bg-black/50" onClick={() => setOpenMenu('')} role="presentation" aria-hidden="true" />
                            <div className="z-100 fixed left-0 right-0 top-[85px] block bg-white shadow-md">
                                <ul className="gap-(--padding-07) p-(--padding-07) relative mx-auto grid min-h-0 w-[calc(1440px-var(--padding-07))] grid-cols-4 bg-white">
                                    {(m.children || []).length > 0 &&
                                        m.children?.map((sub: headerMenuType) => (
                                            <li className="rounded-(--border-radius-small) float-none" key={sub.menuNm}>
                                                {sub.children && sub.children.length > 0 ? (
                                                    <>
                                                        <button className="px-(--padding-07) rounded-(--border-radius-small) text-(length:--font-size-label-medium) h-[4.6rem] w-full cursor-default items-center break-keep border border-[#cdd1d5ff] bg-[#ffffffff] text-left font-semibold">
                                                            {sub.menuNm}
                                                        </button>
                                                        <div className="py-(--padding-05) static block bg-white">
                                                            <h3 className="hidden">
                                                                <span>{sub.menuNm}</span>
                                                            </h3>
                                                            <ul className="grid grid-cols-1 gap-0">
                                                                {sub.children.map((item: headerMenuType) => (
                                                                    <li className="float-none" key={item.menuNm}>
                                                                        <DynamicLink
                                                                            url={item.chkUrl}
                                                                            label={item.menuNm}
                                                                            menuTy={item.menuTy}
                                                                            className="hover:bg-(--color-background-gray-subtler) rounded-(--border-radius-small) py-(--padding-02) px-(--padding-05) text-(length:--font-size-label-medium) flex h-fit flex-row items-center gap-[0.8rem] whitespace-nowrap before:inline-block before:content-['·']"
                                                                        />
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </>
                                                ) : (
                                                    /* 2뎁스가 끝인 메뉴 */
                                                    <DynamicLink
                                                        url={sub.chkUrl}
                                                        label={sub.menuNm}
                                                        menuTy={sub.menuTy}
                                                        className="px-(--padding-07) rounded-(--border-radius-small) cursor-point hover:text-(--color-primary-60) text-(length:--font-size-label-medium) flex h-[4.6rem] w-full items-center break-keep border border-[#cdd1d5ff] bg-[#ffffffff] text-left font-semibold"
                                                    />
                                                )}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

{
    /* next 내부 url 은 Link (/mng로 시작), 외부 url은 a 반환, -> 추후 완전 전환되면 Link로 통일할것(서식지 복원 제외) */
}
function DynamicLink({ url, label, menuTy, className = '' }: { url: string; label: string; menuTy: string; className?: string }) {
    if (!url) {
        return null;
    }

    const target = menuTy === '02' ? '_blank' : undefined;

    const openWindowPopup = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (menuTy === '03') {
            e.preventDefault();

            window.open(url, label, 'width=1300,height=600,left=350,top=200');
        }
    };

    if (url.startsWith('/mng')) {
        //포털관리 - 전환대상 base path 제거 후, 바인딩
        return (
            /* 클릭시 메뉴 컨텐츠를 닫기 위해서 navlink로 감쌈 */
            <NavigationMenuLink asChild>
                <Link href={getUrlWithoutBasePath(url)} className={className}>
                    {label}
                </Link>
            </NavigationMenuLink>
        );
    } else if (url.startsWith('http')) {
        //서식지 복원
        return (
            <a href={url} target={target} onClick={openWindowPopup} className={className}>
                {label}
            </a>
        );
    } else {
        //업무지원
        return (
            <a href={TASK_ECOCLIM_MAIN + url} target={target} onClick={openWindowPopup} className={className}>
                {label}
            </a>
        );
    }
}
