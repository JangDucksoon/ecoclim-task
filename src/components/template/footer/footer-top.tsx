'use client';
import { TASK_ECOCLIM_MAIN } from '@/lib/env';
import { cn } from '@/lib/style-utils';

function openExternalSystem(url: string) {
    if (url) {
        window.open(url, '_blank');
    }
}

export default function FooterTop() {
    return (
        <div className="py-(--padding-03) border-b border-b-[#666] px-0">
            <div className="text-(--color-text-basic) py-(--padding-03) px-(--padding-07) max-w-(--main-wrap) relative mx-auto my-0 flex flex-row items-center">
                <label className="hidden">관련기관선택</label>
                <select
                    onChange={(e) => openExternalSystem(e.target.value)}
                    className={cn(
                        'pt-(--select-padding-left-medium) pr-(--select-padding-right-medium) pb-(--select-padding-left-medium) pl-(--select-padding-left-medium)',
                        'rounded-(--select-border-radius) border-(--select-color-border) absolute right-[2.4rem] w-[20rem] border',
                        'text-(length:--select-font-size-medium)',
                        'focus:outline-(--color-background-primary)',
                        'focus:ring-(--color-background-primary) focus:outline-none focus:ring-1 focus:ring-offset-0',
                        `bg-position-[center_right_8px] appearance-none bg-white bg-[url('/mng/images/common/ico-select-arrow.svg')] bg-no-repeat`
                    )}
                >
                    <option value="">관련기관</option>
                    <option value="https://www.nie.re.kr/">국립생태원</option>
                    <option value="https://www.knps.or.kr/portal/main.do">국립공원</option>
                    <option value="https://www.weather.go.kr/w/index.do">기상청</option>
                    <option value="https://www.nibr.go.kr/">기후에너지환경부 국립생물자원관</option>
                    <option value="https://mcee.go.kr/home/web/main.do">기후에너지환경부</option>
                    <option value="https://kaccc.kei.re.kr/">국가기후위기적응센터</option>
                </select>
                <a
                    href={`${TASK_ECOCLIM_MAIN}/uss/umt/selectPolicyVw.do?screenType=user`}
                    className="mr-(--padding-10) text-(--footer-color-text-subtle) text-(length:--font-size-label-medium) cursor-pointer font-semibold"
                >
                    개인정보 처리방침
                </a>
                <a
                    href={`${TASK_ECOCLIM_MAIN}/uss/umt/selectPolicyVw.do?screenType=policy`}
                    className="text-(--footer-color-text-subtle) text-(length:--font-size-label-medium) cursor-pointer font-semibold"
                >
                    저작권 정책
                </a>
            </div>
        </div>
    );
}
