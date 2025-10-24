import { TASK_ECOCLIM_MAIN } from '@/lib/env';
import Link from 'next/link';
import { HeaderMenu } from '../../menu/header-menu';
import HeaderTool from './header-tool';
import HeaderUser from './header-user';

export default function Header() {
    return (
        <div className="max-w-(--main-wrap) px-(--padding-07) gap-(--padding-09) mx-auto flex flex-row items-center justify-between">
            <div className="flex h-full flex-1 flex-row items-center justify-between">
                <Link href={TASK_ECOCLIM_MAIN || ''}>
                    <img src="/images/common/img-main-logo.png" alt="생태계 기후대응 통합정보 관리시스템" className="border-none align-bottom" />
                </Link>
                <HeaderMenu />
            </div>
            <div className="flex h-full flex-row items-center justify-start">
                <HeaderUser />
                <HeaderTool />
            </div>
        </div>
    );
}
