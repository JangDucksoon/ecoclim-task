'use client';

import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../ui/breadcrumb';
import { getUrlWithBasePath, getUrlWithoutBasePath } from '@/lib/util';
import { useParams, usePathname } from 'next/navigation';
import { headerMenuType } from '@/type/menuType';
import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function EcoclimBreadCrumb({ menuTree }: { menuTree: headerMenuType[] }) {
    const pathname = usePathname();
    const routeParams = useParams();
    const pathnameWithBasePath = getUrlWithBasePath(pathname);
    const activeMenu = findActiveMenuList();
    const [dropOpen, setDropOpen] = useState<boolean>(false);

    function findActiveMenuList() {
        for (const first of menuTree) {
            for (const second of first.children || []) {
                if (pathnameWithBasePath.startsWith(second.chkUrl)) {
                    return [first, second];
                }

                for (const third of second.children || []) {
                    if (pathnameWithBasePath.startsWith(third.chkUrl)) {
                        return [first, second, third];
                    }
                }
            }
        }
    }

    function getFindFirstMenuLink(menu: headerMenuType) {
        if (menu.chkUrl !== 'dir') {
            return getUrlWithoutBasePath(menu.chkUrl);
        } else {
            const second = menu?.children || [];
            if (second[0].chkUrl !== 'dir') {
                return getUrlWithoutBasePath(second[0].chkUrl);
            } else {
                const third = second[0].children || [];
                return getUrlWithoutBasePath(third[0].chkUrl);
            }
        }
    }

    function subPageRender() {
        const subPageArray = [
            { name: '등록', lastSegment: 'create' },
            { name: '수정', lastSegment: 'modify' }
        ];

        const subPath = pathnameWithBasePath.split('/').at(-1);
        let subPage = subPageArray.find((p) => p.lastSegment === subPath);

        if (subPage) {
            return (
                <>
                    <BreadcrumbSeparator />
                    <BreadcrumbPage className="cursor-default">{subPage.name}</BreadcrumbPage>
                </>
            );
        } else if (Object.entries(routeParams).length !== 0) {
            return (
                <>
                    <BreadcrumbSeparator />
                    <BreadcrumbPage className="cursor-default">상세조회</BreadcrumbPage>
                </>
            );
        } else {
            return null;
        }
    }

    function breadCrumbListRender(menu: headerMenuType, idx: number, activeMenuLength: number) {
        const isFirst = idx === 0;
        const isLast = idx === activeMenuLength - 1;
        const isDropdown = idx === activeMenuLength - 2;

        if (isFirst) {
            return (
                <BreadcrumbLink asChild>
                    <Link className="hover:underline" href={getFindFirstMenuLink(menu)}>
                        {menu.menuNm}
                    </Link>
                </BreadcrumbLink>
            );
        } else if (isLast) {
            return <BreadcrumbPage className="cursor-default">{menu.menuNm}</BreadcrumbPage>;
        } else if (isDropdown) {
            return (
                <DropdownMenu modal={false} open={dropOpen} onOpenChange={setDropOpen}>
                    <DropdownMenuTrigger>
                        <BreadcrumbLink asChild>
                            <span className="cursor-pointer hover:underline">{menu.menuNm}</span>
                        </BreadcrumbLink>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="z-10">
                        {(menu?.children || []).map((item) => (
                            <DropdownMenuItem key={`drop-${item.menuNo}`} className="cursor-pointer" onClick={() => setDropOpen(false)}>
                                <Link href={getUrlWithoutBasePath(item.chkUrl)}>{item.menuNm}</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        } else {
            return null;
        }
    }

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link className="w-(--icon-size-xxsmall) h-(--icon-size-xxsmall)" href={'/'}>
                            <img src={getUrlWithBasePath('/images/common/ico-breadcrumb-home.svg')} className="h-full w-full" alt="home" />
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {activeMenu?.map((menu, idx) => (
                    <React.Fragment key={menu.menuNo}>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>{breadCrumbListRender(menu, idx, activeMenu.length)}</BreadcrumbItem>
                    </React.Fragment>
                ))}
                {/* 메뉴 데이터 breadcrump 이후 파생 페이지 (등록|상세|수정) */}
                {subPageRender()}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
