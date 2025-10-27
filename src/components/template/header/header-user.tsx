import UserMenu from '@/components/user/user-menu';
import { getUrlWithBasePath } from '@/lib/util';

export default function HeaderUser() {
    return (
        <div className="relative flex flex-row items-center justify-start gap-4">
            <div>
                <button className="h-(--icon-size-medium) w-(--icon-size-medium) flex cursor-default flex-row items-center justify-center rounded-lg bg-[#00c9c8]">
                    <img src={getUrlWithBasePath('/images/common/ico-user.svg')} alt="사용자 이미지" />
                </button>
            </div>
            <div>
                <div className="text-(--color-text-basic) text-(length:--font-size-body-xsmall) max-w-[170px] overflow-hidden text-ellipsis whitespace-nowrap">
                    <span>테스트</span> / <span>시스템관리자</span>
                </div>
                <div>
                    <button className="cursor-default font-semibold text-[#1E2124FF]">관리자</button>
                </div>
            </div>
            <UserMenu />
        </div>
    );
}
