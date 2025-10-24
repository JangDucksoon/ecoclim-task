import UserMenu from '@/components/user/user-menu';
import Link from 'next/link';

export default function HeaderUser() {
    return (
        <div className="relative flex flex-row items-center justify-start gap-4">
            <div>
                <button className="h-(--icon-size-medium) w-(--icon-size-medium) flex cursor-pointer flex-row items-center justify-center rounded-lg bg-[#00c9c8]">
                    <img src="/images/common/ico-user.svg" alt="사용자 이미지" />
                </button>
            </div>
            <div>
                <div className="text-(--color-text-basic) max-w-[170px] overflow-hidden text-ellipsis whitespace-nowrap [font-size:var(--font-size-body-xsmall)]">
                    <span>테스트</span> / <span>시스템관리자</span>
                </div>
                <div>
                    <Link href="" className="font-semibold text-[#1E2124FF]">
                        관리자
                    </Link>
                </div>
            </div>
            <UserMenu />
        </div>
    );
}
