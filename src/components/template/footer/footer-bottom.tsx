import { getUrlWithBasePath } from '@/lib/util';

export default function FooterBottom() {
    return (
        <div className="py-(--padding-04) px-(--padding-07)">
            <div className="m-h-[78px] max-w-(--main-wrap) px-(--padding-07) mx-auto my-0 flex flex-row items-center justify-between py-0">
                <div className="relative">
                    <a href="" className="absolute left-0 top-[50%] translate-y-[-50%]">
                        <img src={getUrlWithBasePath('/images/common/img-main-logo-gray.png')} alt="생태계 기후대응 통합정보 관리시스템" />
                    </a>
                    <div className="mb-(--padding-03) text-(--footer-color-text-basic) pl-[300px]">
                        <span>[33657]</span>
                        <span>충남 서천군 마서면 금강로 1210 국립생태원</span>
                        <span>대표전화 (041)950-5300</span>
                        <span>대표자 : 이창석</span>
                    </div>
                    <div className="text-(--footer-color-text-basic) pl-[300px]">
                        <span>COPYRIGHT ⓒ 2017 National Institude of Ecology</span>
                        <span>ALL RIGHT RESERVED.</span>
                    </div>
                </div>
                <div className="relative"></div>
            </div>
        </div>
    );
}
