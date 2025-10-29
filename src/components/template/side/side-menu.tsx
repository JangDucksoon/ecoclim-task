'use client';

import { cn } from '@/lib/style-utils';
import { getUrlWithBasePath, getUrlWithoutBasePath } from '@/lib/util';
import { headerMenuType } from '@/type/menuType';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function SideMenu({ menuTree }: { menuTree: headerMenuType[] }) {
    const pathname = usePathname();
    const pathnameWithBasePath = getUrlWithBasePath(pathname);
    const menuData = findFirstDepthMenu();
    const [selectedMenu, setSelectedMenu] = useState<number[]>([findActiveMenu()]);

    function isSelected(menuNo: number) {
        return selectedMenu.includes(menuNo);
    }

    function expandMenuHandler(menuNo: number) {
        if (selectedMenu.includes(menuNo)) {
            setSelectedMenu((prev) => prev.filter((m) => m !== menuNo));
        } else {
            setSelectedMenu((prev) => [...prev, menuNo]);
        }
    }

    function findFirstDepthMenu() {
        for (const first of menuTree) {
            for (const second of first.children || []) {
                if (pathnameWithBasePath.startsWith(second.chkUrl)) {
                    return first;
                }

                for (const third of second.children || []) {
                    if (pathnameWithBasePath.startsWith(third.chkUrl)) {
                        return first;
                    }
                }
            }
        }
    }

    //현재 페이지 상위 뎁스 메뉴 찾음
    function findActiveMenu() {
        let selectedSubMenu = 0;
        menuData?.children?.some((sub) => {
            sub.children?.some((item) => {
                if (pathnameWithBasePath.startsWith(item.chkUrl)) {
                    selectedSubMenu = sub.menuNo;
                    return true;
                } else {
                    return false;
                }
            });

            return false;
        });
        return selectedSubMenu;
    }

    return (
        <>
            <div className="text-(--color-text-inverse-static) flex h-[150px] flex-row items-center justify-center rounded-[0_0_var(--border-radius-small)_var(--border-radius-small)] bg-[#6D7882]">
                <h1 className="text-(length:--font-size-heading-medium) font-bold">{menuData?.menuNm || ''}</h1>
            </div>
            <ul className="mt-(--padding-07)">
                {menuData?.children &&
                    menuData.children.map((sub: headerMenuType) => (
                        <li key={sub.menuNo} className="float-none w-full">
                            {(sub.children?.length ?? 0) > 0 ? (
                                <button
                                    onClick={() => expandMenuHandler(sub.menuNo)}
                                    className={cn(
                                        'text-(length:--font-size-heading-xsmall) rounded-(--border-radius-small) bg-(--color-background-gray-subtler) mb-(--padding-02) py-(--padding-04) px-(--padding-05)',
                                        'hover:bg-(--color-background-primary-subtler-hover) flex w-full cursor-pointer flex-row items-center justify-between border-0 font-semibold',
                                        `after:w-(--icon-size-small) after:h-(--icon-size-small) after:bg-[url('/mng/images/common/ico-accordion-right.svg')] after:bg-no-repeat after:transition-transform after:duration-300`,
                                        isSelected(sub.menuNo) &&
                                            `bg-(--color-background-secondary-subtle) hover:bg-(--color-background-secondary-subtle) after:rotate-90`
                                    )}
                                >
                                    {sub.menuNm}
                                </button>
                            ) : (
                                <Link
                                    href={getUrlWithoutBasePath(sub.chkUrl)}
                                    className={cn(
                                        'text-(length:--font-size-heading-xsmall) rounded-(--border-radius-small) bg-(--color-background-gray-subtler) mb-(--padding-02) py-(--padding-04) px-(--padding-05)',
                                        'hover:bg-(--color-background-primary-subtler-hover) flex w-full cursor-pointer flex-row items-center justify-between border-0 font-semibold',
                                        pathnameWithBasePath.startsWith(sub.chkUrl) &&
                                            `bg-(--color-background-secondary-subtle) hover:bg-(--color-background-secondary-subtle)`
                                    )}
                                    onClick={() => setSelectedMenu([])}
                                >
                                    {sub.menuNm}
                                </Link>
                            )}

                            <ul
                                className={cn(
                                    'overflow-hidden transition-all duration-700 ease-in-out',
                                    isSelected(sub.menuNo) ? 'mb-(--padding-04) pb-(--padding-02) max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                )}
                            >
                                {sub.children &&
                                    sub.children.map((item: headerMenuType) => (
                                        <li key={item.menuNo} className="w-full">
                                            <Link
                                                href={getUrlWithoutBasePath(item.chkUrl)}
                                                className={cn(
                                                    'before:mr-(--padding-02) before:inline-block before:content-["·"]',
                                                    'hover:bg-(--color-background-gray-subtler) rounded-(--border-radius-small) text-(--color-text-basic) py-(--padding-02) px-(--padding-05) text-(length:--font-size-label-medium) flex w-full cursor-pointer flex-row items-center justify-start border-0 bg-transparent',
                                                    pathnameWithBasePath.startsWith(item.chkUrl) &&
                                                        'text-(--color-text-primary) bg-(--color-background-primary-subtler) rounded-(--border-radius-small) hover:bg-(--color-background-primary-subtler)'
                                                )}
                                            >
                                                {item.menuNm}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </li>
                    ))}
            </ul>
        </>
    );
}
