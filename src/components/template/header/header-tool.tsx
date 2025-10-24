'use client';

import { PUBLIC_ECOCLIM_MAIN } from '@/lib/env';

export default function HeaderTool() {
    return (
        <div className="ml-[1.6rem] flex flex-row items-center justify-start gap-4">
            <a
                href={PUBLIC_ECOCLIM_MAIN || ''}
                className="rounded-(--border-radius-small) h-(--icon-size-medium) w-(--icon-size-medium) flex flex-row items-center justify-center bg-[#DAE0E7ff]"
            >
                <img src="/images/common/ico-link_gray.svg" alt="대민포털" />
            </a>
            <button className="rounded-(--border-radius-small) h-(--icon-size-medium) w-(--icon-size-medium) flex cursor-pointer flex-row items-center justify-center bg-[#DAE0E7ff]">
                <img src="/images/common/ico-header-search.svg" alt="통합검색" />
            </button>
            <button className="rounded-(--border-radius-small) h-(--icon-size-medium) w-(--icon-size-medium) flex cursor-pointer flex-row items-center justify-center bg-[#DAE0E7ff]">
                <img src="/images/common/ico-header-sitemap_gray.svg" alt="사이트맵" />
            </button>
        </div>
    );
}
