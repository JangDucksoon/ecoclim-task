'use client';

import EcoclimTooltip from '@/components/common/tooltip';
import { PUBLIC_ECOCLIM_MAIN } from '@/lib/env';
import { getUrlWithBasePath } from '@/lib/util';
import HeaderSearch from './header-search';
import { useState } from 'react';

export default function HeaderTool() {
    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    return (
        <div className="ml-[1.6rem] flex flex-row items-center justify-start gap-4">
            <EcoclimTooltip content={'대민포털'}>
                <a
                    href={PUBLIC_ECOCLIM_MAIN || ''}
                    className="rounded-(--border-radius-small) h-(--icon-size-medium) w-(--icon-size-medium) flex flex-row items-center justify-center bg-[#DAE0E7ff]"
                >
                    <img src={getUrlWithBasePath('/images/common/ico-link_gray.svg')} alt="대민포털" />
                </a>
            </EcoclimTooltip>
            <EcoclimTooltip content={'통합검색'}>
                <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="rounded-(--border-radius-small) h-(--icon-size-medium) w-(--icon-size-medium) flex cursor-pointer flex-row items-center justify-center bg-[#DAE0E7ff]"
                >
                    <img src={getUrlWithBasePath('/images/common/ico-header-search.svg')} alt="통합검색" />
                </button>
            </EcoclimTooltip>
            {searchOpen && <HeaderSearch open={searchOpen} setOpen={setSearchOpen} />}
            <EcoclimTooltip content={'사이트 맵 메뉴열기'}>
                <button className="rounded-(--border-radius-small) h-(--icon-size-medium) w-(--icon-size-medium) flex cursor-pointer flex-row items-center justify-center bg-[#DAE0E7ff]">
                    <img src={getUrlWithBasePath('/images/common/ico-header-sitemap_gray.svg')} alt="사이트맵" />
                </button>
            </EcoclimTooltip>
        </div>
    );
}
