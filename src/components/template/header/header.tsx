import { TASK_ECOCLIM_MAIN } from '@/lib/env';
import Link from 'next/link';
import HeaderTool from './header-tool';
import HeaderUser from './header-user';
import { getTree, getUrlWithBasePath } from '@/lib/util';
import HeaderMenu from './header-menu';
import { static_menu } from '@/lib/temp-data';

export default function Header() {
    const menuTree = getTree(static_menu, 'menuNo', 'upperMenuId');

    return (
        <div className="max-w-(--main-wrap) px-(--padding-07) gap-(--padding-09) mx-auto flex flex-row items-center justify-between">
            <div className="flex h-full flex-1 flex-row items-center justify-between">
                <Link href={TASK_ECOCLIM_MAIN || ''}>
                    <img
                        src={getUrlWithBasePath('/images/common/img-main-logo.png')}
                        alt="생태계 기후대응 통합정보 관리시스템"
                        className="border-none align-bottom"
                    />
                </Link>
                <HeaderMenu menuTree={menuTree} />
            </div>
            <div className="flex h-full flex-row items-center justify-start">
                <HeaderUser />
                <HeaderTool />
            </div>
        </div>
    );
}
