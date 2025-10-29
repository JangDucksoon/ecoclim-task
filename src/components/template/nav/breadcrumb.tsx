'use client';

import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../ui/breadcrumb';
import { getUrlWithBasePath, getUrlWithoutBasePath } from '@/lib/util';
import { usePathname } from 'next/navigation';
import { headerMenuType } from '@/type/menuType';
import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function EcoclimBreadCrumb({ menuTree }: { menuTree: headerMenuType[] }) {
    const pathname = usePathname();
    const activeMenu = findActiveMenuList();
    const [dropOpen, setDropOpen] = useState<boolean>(false);

    function findActiveMenuList() {
        for (const first of menuTree) {
            for (const second of first.children || []) {
                if (second.chkUrl.endsWith(pathname)) {
                    return [first, second];
                }

                for (const third of second.children || []) {
                    if (third.chkUrl.endsWith(pathname)) {
                        return [first, second, third];
                    }
                }
            }
        }
    }

    function getFindFirstMenuLink(menu: headerMenuType) {
        if (menu.chkUrl === 'dir') {
            const second = menu?.children || [];
            if (second[0].chkUrl === 'dir') {
                const third = second[0].children || [];
                return getUrlWithoutBasePath(third[0].chkUrl);
            } else {
                return getUrlWithoutBasePath(second[0].chkUrl);
            }
        } else {
            return getUrlWithoutBasePath(menu.chkUrl);
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
                        <BreadcrumbItem>
                            {idx === 0 ? (
                                <BreadcrumbLink asChild>
                                    <Link className="hover:underline" href={getFindFirstMenuLink(menu)}>
                                        {menu.menuNm}
                                    </Link>
                                </BreadcrumbLink>
                            ) : idx === activeMenu.length - 1 ? (
                                <BreadcrumbPage className="cursor-default">{menu.menuNm}</BreadcrumbPage>
                            ) : idx === activeMenu.length - 2 ? (
                                <DropdownMenu modal={false} open={dropOpen} onOpenChange={setDropOpen}>
                                    <DropdownMenuTrigger>
                                        <BreadcrumbLink asChild>
                                            <span className="cursor-pointer hover:underline">{menu.menuNm}</span>
                                        </BreadcrumbLink>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center">
                                        {(menu?.children || []).map((item) => (
                                            <DropdownMenuItem key={`drop-${item.menuNo}`} className="cursor-pointer" onClick={() => setDropOpen(false)}>
                                                <Link href={getUrlWithoutBasePath(item.chkUrl)}>{item.menuNm}</Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : null}
                        </BreadcrumbItem>
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
