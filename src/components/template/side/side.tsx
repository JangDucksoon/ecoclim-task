import SideMenu from './side-menu';
import { headerMenuType } from '@/type/menuType';

export default function Aside() {
    return (
        <aside className="w-(--aside-width) block shrink-0">
            <div className="text-(--color-text-inverse-static) flex h-[150px] flex-row items-center justify-center rounded-[0_0_var(--border-radius-small)_var(--border-radius-small)] bg-[#6D7882]">
                <h1 className="text-(length:--font-size-heading-medium) font-bold">{side_temp_menu.menuNm}</h1>
            </div>
            <SideMenu menuData={side_temp_menu} />
        </aside>
    );
}

const full_menu_data: headerMenuType[] = [
    {
        menuNo: 11000000,
        menuOrdr: 1,
        menuNm: '데이터',
        upperMenuId: 1,
        chkUrl: 'dir',
        level: 1,
        menuOrdrArr: [1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 11010000,
        menuOrdr: 1,
        menuNm: '데이터 조회 및 다운로드',
        upperMenuId: 11000000,
        chkUrl: 'dir',
        level: 2,
        menuOrdrArr: [1, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 11010100,
        menuOrdr: 1,
        menuNm: '생태계 통합데이터 조회/다운로드',
        upperMenuId: 11010000,
        chkUrl: '/dta/dtd/selectEcsyUntyDataListVw.do',
        level: 3,
        menuOrdrArr: [1, 1, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 11020100,
        menuOrdr: 2,
        menuNm: '생태관측지소 데이터 조회/다운로드',
        upperMenuId: 11010000,
        chkUrl: '/dta/obs/obsvtrListVw.do',
        level: 3,
        menuOrdrArr: [1, 1, 2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 11020200,
        menuOrdr: 3,
        menuNm: '생태관측지소 데이터 변경이력 조회',
        upperMenuId: 11010000,
        chkUrl: '/dta/obs/obsvtrChgHistVw.do',
        level: 3,
        menuOrdrArr: [1, 1, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 11030000,
        menuOrdr: 3,
        menuNm: '데이터 요청',
        upperMenuId: 11000000,
        chkUrl: 'dir',
        level: 2,
        menuOrdrArr: [1, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 11030100,
        menuOrdr: 1,
        menuNm: '데이터 요청',
        upperMenuId: 11030000,
        chkUrl: '/ods/dpr/dataPublicListVw.do',
        level: 3,
        menuOrdrArr: [1, 3, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 11030300,
        menuOrdr: 2,
        menuNm: 'OpenAPI 안내 및 제공',
        upperMenuId: 11030000,
        chkUrl: '/ods/api/openApiIntroVw.do',
        level: 3,
        menuOrdrArr: [1, 3, 2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 11030200,
        menuOrdr: 3,
        menuNm: 'OpenAPI 인증키신청현황',
        upperMenuId: 11030000,
        chkUrl: '/ods/key/apiKeyListVw.do',
        level: 3,
        menuOrdrArr: [1, 3, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 16000000,
        menuOrdr: 2,
        menuNm: '공간정보 서비스',
        upperMenuId: 1,
        chkUrl: 'dir',
        level: 1,
        menuOrdrArr: [2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 16010000,
        menuOrdr: 1,
        menuNm: '공간정보 서비스',
        upperMenuId: 16000000,
        chkUrl: '/sis/selectSptinfSrvcVw.do',
        level: 2,
        menuOrdrArr: [2, 1],
        menuTy: '02',
        useAt: 'Y'
    },
    {
        menuNo: 17000000,
        menuOrdr: 3,
        menuNm: '분석 도구',
        upperMenuId: 1,
        chkUrl: 'dir',
        level: 1,
        menuOrdrArr: [3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 17010000,
        menuOrdr: 1,
        menuNm: 'MOTIVE',
        upperMenuId: 17000000,
        chkUrl: '/anu/mot/selectMotiveVw.do',
        level: 2,
        menuOrdrArr: [3, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 17020000,
        menuOrdr: 2,
        menuNm: 'ShinyBIOMOD',
        upperMenuId: 17000000,
        chkUrl: '/anu/sbm/selectShinyBioModVw.do',
        level: 2,
        menuOrdrArr: [3, 2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 17030000,
        menuOrdr: 3,
        menuNm: '종분포모델 입력 변수 선택 도구',
        upperMenuId: 17000000,
        chkUrl: '/anu/vcu/vrblChcUntVw.do',
        level: 2,
        menuOrdrArr: [3, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 17040000,
        menuOrdr: 4,
        menuNm: 'R을 이용한 분석 예제',
        upperMenuId: 17000000,
        chkUrl: 'dir',
        level: 2,
        menuOrdrArr: [3, 4],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 17040100,
        menuOrdr: 1,
        menuNm: '종 분포 모델',
        upperMenuId: 17040000,
        chkUrl: '/anu/rae/sda/selectSpecsDstbListVw.do',
        level: 3,
        menuOrdrArr: [3, 4, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 17040200,
        menuOrdr: 2,
        menuNm: '다변량 통계 분석',
        upperMenuId: 17040000,
        chkUrl: '/anu/rae/vqs/selectVrbltQntStatsListVw.do',
        level: 3,
        menuOrdrArr: [3, 4, 2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 17050000,
        menuOrdr: 5,
        menuNm: '기후변화 리스크 평가 도구',
        upperMenuId: 17000000,
        chkUrl: '/anu/cum/ccrEvlUntVw.do',
        level: 2,
        menuOrdrArr: [3, 5],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 14000000,
        menuOrdr: 4,
        menuNm: '데이터 관리',
        upperMenuId: 1,
        chkUrl: 'dir',
        level: 1,
        menuOrdrArr: [4],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 14010800,
        menuOrdr: 1,
        menuNm: '보유/연계 데이터 현황',
        upperMenuId: 14000000,
        chkUrl: '/dtm/dtm/dmp/selectDataMngPrcndVw.do',
        level: 2,
        menuOrdrArr: [4, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 14010100,
        menuOrdr: 2,
        menuNm: '데이터 관리/업로드',
        upperMenuId: 14000000,
        chkUrl: '/dtm/dmu/dataMngUldListVw.do',
        level: 2,
        menuOrdrArr: [4, 2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 14010700,
        menuOrdr: 3,
        menuNm: '생물종 조사자료 관리/업로드',
        upperMenuId: 14000000,
        chkUrl: '/dtm/dtm/bsm/selectBispSrmtMngListVw.do',
        level: 2,
        menuOrdrArr: [4, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 14010200,
        menuOrdr: 4,
        menuNm: '배경지도 관리',
        upperMenuId: 14000000,
        chkUrl: '/dtm/dtm/bmm/selectBcrnMapMngListVw.do',
        level: 2,
        menuOrdrArr: [4, 4],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 14010300,
        menuOrdr: 5,
        menuNm: '레이어 관리',
        upperMenuId: 14000000,
        chkUrl: '/dtm/dtm/lym/selectLayerListVw.do',
        level: 2,
        menuOrdrArr: [4, 5],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 14010400,
        menuOrdr: 6,
        menuNm: '메타데이터 관리',
        upperMenuId: 14000000,
        chkUrl: '/dtm/dtm/mdm/selectMtdtListVw.do',
        level: 2,
        menuOrdrArr: [4, 6],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 14010500,
        menuOrdr: 7,
        menuNm: '수집정보 관리',
        upperMenuId: 14000000,
        chkUrl: '/dtm/dtm/cim/selectClctInfoListVw.do',
        level: 2,
        menuOrdrArr: [4, 7],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 14020100,
        menuOrdr: 8,
        menuNm: '관측지소 변경/관리',
        upperMenuId: 14000000,
        chkUrl: '/dtm/obm/obsvtrMngListVw.do',
        level: 2,
        menuOrdrArr: [4, 8],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 14010000,
        menuOrdr: 9,
        menuNm: '자연환경복원사업 데이터 관리',
        upperMenuId: 14000000,
        chkUrl: 'https://devr.ecoclimate.or.kr/task/bcm/nrbci',
        level: 2,
        menuOrdrArr: [4, 9],
        menuTy: '02',
        useAt: 'Y'
    },
    {
        menuNo: 15000000,
        menuOrdr: 5,
        menuNm: '포털 관리',
        upperMenuId: 1,
        chkUrl: 'dir',
        level: 1,
        menuOrdrArr: [5],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15010000,
        menuOrdr: 1,
        menuNm: '사용통계',
        upperMenuId: 15000000,
        chkUrl: 'dir',
        level: 2,
        menuOrdrArr: [5, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15010100,
        menuOrdr: 1,
        menuNm: '로그인 이력',
        upperMenuId: 15010000,
        chkUrl: '/mng/use/clg/selectLoginLogList.do',
        level: 3,
        menuOrdrArr: [5, 1, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15010200,
        menuOrdr: 2,
        menuNm: '방문자 수',
        upperMenuId: 15010000,
        chkUrl: '/mng/use/vis/selectVisitorListVw.do',
        level: 3,
        menuOrdrArr: [5, 1, 2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15010300,
        menuOrdr: 3,
        menuNm: '개인정보 접근 이력',
        upperMenuId: 15010000,
        chkUrl: '/mng/use/plg/selectPrivacyLogList.do',
        level: 3,
        menuOrdrArr: [5, 1, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15010600,
        menuOrdr: 4,
        menuNm: '메뉴사용 이력 조회',
        upperMenuId: 15010000,
        chkUrl: '/mng/use/muh/selectMenuUserHistVw.do',
        level: 3,
        menuOrdrArr: [5, 1, 4],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15010500,
        menuOrdr: 5,
        menuNm: '데이터사용현황',
        upperMenuId: 15010000,
        chkUrl: '/mng/use/data/dataRecordListVw.do',
        level: 3,
        menuOrdrArr: [5, 1, 5],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15080000,
        menuOrdr: 2,
        menuNm: '데이터 요청 관리',
        upperMenuId: 15000000,
        chkUrl: 'dir',
        level: 2,
        menuOrdrArr: [5, 2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15080200,
        menuOrdr: 1,
        menuNm: 'OpenAPI 인증키 관리',
        upperMenuId: 15080000,
        chkUrl: '/mng/ods/key/apiKeyManageVw.do',
        level: 3,
        menuOrdrArr: [5, 2, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15080300,
        menuOrdr: 2,
        menuNm: 'OpenAPI 관리',
        upperMenuId: 15080000,
        chkUrl: '/mng/ods/api/openApiListVw.do',
        level: 3,
        menuOrdrArr: [5, 2, 2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15080100,
        menuOrdr: 3,
        menuNm: '데이터요청 관리',
        upperMenuId: 15080000,
        chkUrl: '/mng/ods/dpr/dataPublicMngListVw.do',
        level: 3,
        menuOrdrArr: [5, 2, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15020000,
        menuOrdr: 3,
        menuNm: '회원관리',
        upperMenuId: 15000000,
        chkUrl: 'dir',
        level: 2,
        menuOrdrArr: [5, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15020100,
        menuOrdr: 1,
        menuNm: '회원목록',
        upperMenuId: 15020000,
        chkUrl: '/uss/umt/EgovUserManage.do',
        level: 3,
        menuOrdrArr: [5, 3, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15020200,
        menuOrdr: 2,
        menuNm: '권한신청관리',
        upperMenuId: 15020000,
        chkUrl: '/mng/mbr/rrm/EgovAuthorRequestListView.do',
        level: 3,
        menuOrdrArr: [5, 3, 2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15020300,
        menuOrdr: 3,
        menuNm: '그룹관리',
        upperMenuId: 15020000,
        chkUrl: '/mng/mbr/gmt/EgovGroupListVW.do',
        level: 3,
        menuOrdrArr: [5, 3, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15030000,
        menuOrdr: 4,
        menuNm: '권한/그룹 관리',
        upperMenuId: 15000000,
        chkUrl: 'dir',
        level: 2,
        menuOrdrArr: [5, 4],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15030200,
        menuOrdr: 1,
        menuNm: '롤관리',
        upperMenuId: 15030000,
        chkUrl: '/mng/sec/rmt/EgovRoleList.do',
        level: 3,
        menuOrdrArr: [5, 4, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15030100,
        menuOrdr: 2,
        menuNm: '권한관리',
        upperMenuId: 15030000,
        chkUrl: '/mng/sec/ram/EgovAuthorList.do',
        level: 3,
        menuOrdrArr: [5, 4, 2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15030300,
        menuOrdr: 3,
        menuNm: '권한그룹관리',
        upperMenuId: 15030000,
        chkUrl: '/mng/sec/rgm/EgovAuthorGroupList.do',
        level: 3,
        menuOrdrArr: [5, 4, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15030400,
        menuOrdr: 4,
        menuNm: '조직관리',
        upperMenuId: 15030000,
        chkUrl: '/mng/mbr/org/selectOrgnztManageVw.do',
        level: 3,
        menuOrdrArr: [5, 4, 4],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15040000,
        menuOrdr: 5,
        menuNm: '화면 및 메뉴',
        upperMenuId: 15000000,
        chkUrl: 'dir',
        level: 2,
        menuOrdrArr: [5, 5],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15040100,
        menuOrdr: 1,
        menuNm: '메뉴 리스트 관리',
        upperMenuId: 15040000,
        chkUrl: '/mng/pnm/mpm/EgovMenuListSelect.do',
        level: 3,
        menuOrdrArr: [5, 5, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15040200,
        menuOrdr: 2,
        menuNm: '프로그램 관리',
        upperMenuId: 15040000,
        chkUrl: '/mng/pnm/prm/EgovProgramListManageSelect.do',
        level: 3,
        menuOrdrArr: [5, 5, 2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15040300,
        menuOrdr: 3,
        menuNm: '권한별 메뉴관리',
        upperMenuId: 15040000,
        chkUrl: '/mng/pnm/mcm/EgovMenuCreatManageSelect.do',
        level: 3,
        menuOrdrArr: [5, 5, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15050000,
        menuOrdr: 6,
        menuNm: '공통코드 관리',
        upperMenuId: 15000000,
        chkUrl: 'dir',
        level: 2,
        menuOrdrArr: [5, 6],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15050100,
        menuOrdr: 1,
        menuNm: '공통분류 코드 관리',
        upperMenuId: 15050000,
        chkUrl: '/mng/code/classification',
        level: 3,
        menuOrdrArr: [5, 6, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15050200,
        menuOrdr: 2,
        menuNm: '공통 코드 관리',
        upperMenuId: 15050000,
        chkUrl: '/mng/code/common',
        level: 3,
        menuOrdrArr: [5, 6, 2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15050300,
        menuOrdr: 3,
        menuNm: '공통 상세 코드 관리',
        upperMenuId: 15050000,
        chkUrl: '/mng/code/detail',
        level: 3,
        menuOrdrArr: [5, 6, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15060000,
        menuOrdr: 7,
        menuNm: '게시판 관리',
        upperMenuId: 15000000,
        chkUrl: 'dir',
        level: 2,
        menuOrdrArr: [5, 7],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15060100,
        menuOrdr: 1,
        menuNm: '공지 관리',
        upperMenuId: 15060000,
        chkUrl: '/mng/bbs/ntt/selectNoticeList.do',
        level: 3,
        menuOrdrArr: [5, 7, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15060800,
        menuOrdr: 2,
        menuNm: 'Q&A관리',
        upperMenuId: 15060000,
        chkUrl: '/mng/bbs/qna/qnaMngListVw.do',
        level: 3,
        menuOrdrArr: [5, 7, 2],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15060200,
        menuOrdr: 3,
        menuNm: 'FAQ 관리',
        upperMenuId: 15060000,
        chkUrl: '/mng/bbs/faq/selectFaqList.do',
        level: 3,
        menuOrdrArr: [5, 7, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15060500,
        menuOrdr: 4,
        menuNm: '팝업 관리',
        upperMenuId: 15060000,
        chkUrl: '/mng/bbs/pop/selectPopupList.do',
        level: 3,
        menuOrdrArr: [5, 7, 4],
        menuTy: '01',
        useAt: 'N'
    },
    {
        menuNo: 15060900,
        menuOrdr: 6,
        menuNm: '분석예제 관리',
        upperMenuId: 15060000,
        chkUrl: '/mng/bbs/rae/selectRAnlsExrcListVw.do',
        level: 3,
        menuOrdrArr: [5, 7, 6],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15060300,
        menuOrdr: 8,
        menuNm: '이슈·보도자료 관리',
        upperMenuId: 15060000,
        chkUrl: '/mng/bbs/isu/selectIssueNewsListVw.do',
        level: 3,
        menuOrdrArr: [5, 7, 8],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15070000,
        menuOrdr: 8,
        menuNm: '콘텐츠 관리',
        upperMenuId: 15000000,
        chkUrl: 'dir',
        level: 2,
        menuOrdrArr: [5, 8],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15070100,
        menuOrdr: 1,
        menuNm: '관련 정책/법령',
        upperMenuId: 15070000,
        chkUrl: '/mng/cnt/law/selectLawList.do',
        level: 3,
        menuOrdrArr: [5, 8, 1],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15070300,
        menuOrdr: 3,
        menuNm: '용어사전 관리',
        upperMenuId: 15070000,
        chkUrl: '/mng/cnt/wrd/selectEclgyObsRvnWordListVw.do',
        level: 3,
        menuOrdrArr: [5, 8, 3],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15070400,
        menuOrdr: 4,
        menuNm: '생태계 부문 리스크 목록 관리',
        upperMenuId: 15070000,
        chkUrl: '/mng/cnt/rsk/selectEclgyRiskListVw.do',
        level: 3,
        menuOrdrArr: [5, 8, 4],
        menuTy: '01',
        useAt: 'Y'
    },
    {
        menuNo: 15070500,
        menuOrdr: 5,
        menuNm: '콘텐츠센터 관리',
        upperMenuId: 15070000,
        chkUrl: '/mng/cnt/cts/selectContsMngListVw.do',
        level: 3,
        menuOrdrArr: [5, 8, 5],
        menuTy: '01',
        useAt: 'Y'
    }
];

const side_temp_menu2: headerMenuType = {
    menuNo: 17000000,
    menuOrdr: 3,
    menuNm: '분석 도구',
    upperMenuId: 1,
    chkUrl: 'dir',
    level: 1,
    menuOrdrArr: [3],
    menuTy: '01',
    useAt: 'Y',
    children: [
        {
            menuNo: 17010000,
            menuOrdr: 1,
            menuNm: 'MOTIVE',
            upperMenuId: 17000000,
            chkUrl: '/anu/mot/selectMotiveVw.do',
            level: 2,
            menuOrdrArr: [3, 1],
            menuTy: '01',
            useAt: 'Y',
            children: []
        },
        {
            menuNo: 17020000,
            menuOrdr: 2,
            menuNm: 'ShinyBIOMOD',
            upperMenuId: 17000000,
            chkUrl: '/anu/sbm/selectShinyBioModVw.do',
            level: 2,
            menuOrdrArr: [3, 2],
            menuTy: '01',
            useAt: 'Y',
            children: []
        },
        {
            menuNo: 17030000,
            menuOrdr: 3,
            menuNm: '종분포모델 입력 변수 선택 도구',
            upperMenuId: 17000000,
            chkUrl: '/mng/code/detail',
            level: 2,
            menuOrdrArr: [3, 3],
            menuTy: '01',
            useAt: 'Y',
            children: []
        },
        {
            menuNo: 17040000,
            menuOrdr: 4,
            menuNm: 'R을 이용한 분석 예제',
            upperMenuId: 17000000,
            chkUrl: 'dir',
            level: 2,
            menuOrdrArr: [3, 4],
            menuTy: '01',
            useAt: 'Y',
            children: [
                {
                    menuNo: 17040100,
                    menuOrdr: 1,
                    menuNm: '종 분포 모델',
                    upperMenuId: 17040000,
                    chkUrl: '/anu/rae/sda/selectSpecsDstbListVw.do',
                    level: 3,
                    menuOrdrArr: [3, 4, 1],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 17040200,
                    menuOrdr: 2,
                    menuNm: '다변량 통계 분석',
                    upperMenuId: 17040000,
                    chkUrl: '/mng/code/classification',
                    level: 3,
                    menuOrdrArr: [3, 4, 2],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                }
            ]
        },
        {
            menuNo: 17050000,
            menuOrdr: 5,
            menuNm: '기후변화 리스크 평가 도구',
            upperMenuId: 17000000,
            chkUrl: '/mng/code/common',
            level: 2,
            menuOrdrArr: [3, 5],
            menuTy: '01',
            useAt: 'Y',
            children: []
        }
    ]
};

const side_temp_menu: headerMenuType = {
    menuNo: 15000000,
    menuOrdr: 5,
    menuNm: '포털 관리',
    upperMenuId: 1,
    chkUrl: 'dir',
    level: 1,
    menuOrdrArr: [5],
    menuTy: '01',
    useAt: 'Y',
    children: [
        {
            menuNo: 15010000,
            menuOrdr: 1,
            menuNm: '사용통계',
            upperMenuId: 15000000,
            chkUrl: 'dir',
            level: 2,
            menuOrdrArr: [5, 1],
            menuTy: '01',
            useAt: 'Y',
            children: [
                {
                    menuNo: 15010100,
                    menuOrdr: 1,
                    menuNm: '로그인 이력',
                    upperMenuId: 15010000,
                    chkUrl: '/mng/use/clg/selectLoginLogList.do',
                    level: 3,
                    menuOrdrArr: [5, 1, 1],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15010200,
                    menuOrdr: 2,
                    menuNm: '방문자 수',
                    upperMenuId: 15010000,
                    chkUrl: '/mng/use/vis/selectVisitorListVw.do',
                    level: 3,
                    menuOrdrArr: [5, 1, 2],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15010300,
                    menuOrdr: 3,
                    menuNm: '개인정보 접근 이력',
                    upperMenuId: 15010000,
                    chkUrl: '/mng/use/plg/selectPrivacyLogList.do',
                    level: 3,
                    menuOrdrArr: [5, 1, 3],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15010600,
                    menuOrdr: 4,
                    menuNm: '메뉴사용 이력 조회',
                    upperMenuId: 15010000,
                    chkUrl: '/mng/use/muh/selectMenuUserHistVw.do',
                    level: 3,
                    menuOrdrArr: [5, 1, 4],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15010500,
                    menuOrdr: 5,
                    menuNm: '데이터사용현황',
                    upperMenuId: 15010000,
                    chkUrl: '/mng/use/data/dataRecordListVw.do',
                    level: 3,
                    menuOrdrArr: [5, 1, 5],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                }
            ]
        },
        {
            menuNo: 15080000,
            menuOrdr: 2,
            menuNm: '데이터 요청 관리',
            upperMenuId: 15000000,
            chkUrl: 'dir',
            level: 2,
            menuOrdrArr: [5, 2],
            menuTy: '01',
            useAt: 'Y',
            children: [
                {
                    menuNo: 15080200,
                    menuOrdr: 1,
                    menuNm: 'OpenAPI 인증키 관리',
                    upperMenuId: 15080000,
                    chkUrl: '/mng/ods/key/apiKeyManageVw.do',
                    level: 3,
                    menuOrdrArr: [5, 2, 1],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15080300,
                    menuOrdr: 2,
                    menuNm: 'OpenAPI 관리',
                    upperMenuId: 15080000,
                    chkUrl: '/mng/ods/api/openApiListVw.do',
                    level: 3,
                    menuOrdrArr: [5, 2, 2],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15080100,
                    menuOrdr: 3,
                    menuNm: '데이터요청 관리',
                    upperMenuId: 15080000,
                    chkUrl: '/mng/ods/dpr/dataPublicMngListVw.do',
                    level: 3,
                    menuOrdrArr: [5, 2, 3],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                }
            ]
        },
        {
            menuNo: 15020000,
            menuOrdr: 3,
            menuNm: '회원관리',
            upperMenuId: 15000000,
            chkUrl: 'dir',
            level: 2,
            menuOrdrArr: [5, 3],
            menuTy: '01',
            useAt: 'Y',
            children: [
                {
                    menuNo: 15020100,
                    menuOrdr: 1,
                    menuNm: '회원목록',
                    upperMenuId: 15020000,
                    chkUrl: '/uss/umt/EgovUserManage.do',
                    level: 3,
                    menuOrdrArr: [5, 3, 1],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15020200,
                    menuOrdr: 2,
                    menuNm: '권한신청관리',
                    upperMenuId: 15020000,
                    chkUrl: '/mng/mbr/rrm/EgovAuthorRequestListView.do',
                    level: 3,
                    menuOrdrArr: [5, 3, 2],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15020300,
                    menuOrdr: 3,
                    menuNm: '그룹관리',
                    upperMenuId: 15020000,
                    chkUrl: '/mng/mbr/gmt/EgovGroupListVW.do',
                    level: 3,
                    menuOrdrArr: [5, 3, 3],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                }
            ]
        },
        {
            menuNo: 15030000,
            menuOrdr: 4,
            menuNm: '권한/그룹 관리',
            upperMenuId: 15000000,
            chkUrl: 'dir',
            level: 2,
            menuOrdrArr: [5, 4],
            menuTy: '01',
            useAt: 'Y',
            children: [
                {
                    menuNo: 15030200,
                    menuOrdr: 1,
                    menuNm: '롤관리',
                    upperMenuId: 15030000,
                    chkUrl: '/mng/sec/rmt/EgovRoleList.do',
                    level: 3,
                    menuOrdrArr: [5, 4, 1],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15030100,
                    menuOrdr: 2,
                    menuNm: '권한관리',
                    upperMenuId: 15030000,
                    chkUrl: '/mng/sec/ram/EgovAuthorList.do',
                    level: 3,
                    menuOrdrArr: [5, 4, 2],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15030300,
                    menuOrdr: 3,
                    menuNm: '권한그룹관리',
                    upperMenuId: 15030000,
                    chkUrl: '/mng/sec/rgm/EgovAuthorGroupList.do',
                    level: 3,
                    menuOrdrArr: [5, 4, 3],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15030400,
                    menuOrdr: 4,
                    menuNm: '조직관리',
                    upperMenuId: 15030000,
                    chkUrl: '/mng/mbr/org/selectOrgnztManageVw.do',
                    level: 3,
                    menuOrdrArr: [5, 4, 4],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                }
            ]
        },
        {
            menuNo: 15040000,
            menuOrdr: 5,
            menuNm: '화면 및 메뉴',
            upperMenuId: 15000000,
            chkUrl: 'dir',
            level: 2,
            menuOrdrArr: [5, 5],
            menuTy: '01',
            useAt: 'Y',
            children: [
                {
                    menuNo: 15040100,
                    menuOrdr: 1,
                    menuNm: '메뉴 리스트 관리',
                    upperMenuId: 15040000,
                    chkUrl: '/mng/pnm/mpm/EgovMenuListSelect.do',
                    level: 3,
                    menuOrdrArr: [5, 5, 1],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15040200,
                    menuOrdr: 2,
                    menuNm: '프로그램 관리',
                    upperMenuId: 15040000,
                    chkUrl: '/mng/pnm/prm/EgovProgramListManageSelect.do',
                    level: 3,
                    menuOrdrArr: [5, 5, 2],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15040300,
                    menuOrdr: 3,
                    menuNm: '권한별 메뉴관리',
                    upperMenuId: 15040000,
                    chkUrl: '/mng/pnm/mcm/EgovMenuCreatManageSelect.do',
                    level: 3,
                    menuOrdrArr: [5, 5, 3],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                }
            ]
        },
        {
            menuNo: 15050000,
            menuOrdr: 6,
            menuNm: '공통코드 관리',
            upperMenuId: 15000000,
            chkUrl: 'dir',
            level: 2,
            menuOrdrArr: [5, 6],
            menuTy: '01',
            useAt: 'Y',
            children: [
                {
                    menuNo: 15050100,
                    menuOrdr: 1,
                    menuNm: '공통분류 코드 관리',
                    upperMenuId: 15050000,
                    chkUrl: '/mng/code/classification',
                    level: 3,
                    menuOrdrArr: [5, 6, 1],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15050200,
                    menuOrdr: 2,
                    menuNm: '공통 코드 관리',
                    upperMenuId: 15050000,
                    chkUrl: '/mng/code/common',
                    level: 3,
                    menuOrdrArr: [5, 6, 2],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15050300,
                    menuOrdr: 3,
                    menuNm: '공통 상세 코드 관리',
                    upperMenuId: 15050000,
                    chkUrl: '/mng/code/detail',
                    level: 3,
                    menuOrdrArr: [5, 6, 3],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                }
            ]
        },
        {
            menuNo: 15060000,
            menuOrdr: 7,
            menuNm: '게시판 관리',
            upperMenuId: 15000000,
            chkUrl: 'dir',
            level: 2,
            menuOrdrArr: [5, 7],
            menuTy: '01',
            useAt: 'Y',
            children: [
                {
                    menuNo: 15060100,
                    menuOrdr: 1,
                    menuNm: '공지 관리',
                    upperMenuId: 15060000,
                    chkUrl: '/mng/bbs/ntt/selectNoticeList.do',
                    level: 3,
                    menuOrdrArr: [5, 7, 1],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15060800,
                    menuOrdr: 2,
                    menuNm: 'Q&A관리',
                    upperMenuId: 15060000,
                    chkUrl: '/mng/bbs/qna/qnaMngListVw.do',
                    level: 3,
                    menuOrdrArr: [5, 7, 2],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15060200,
                    menuOrdr: 3,
                    menuNm: 'FAQ 관리',
                    upperMenuId: 15060000,
                    chkUrl: '/mng/bbs/faq/selectFaqList.do',
                    level: 3,
                    menuOrdrArr: [5, 7, 3],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15060500,
                    menuOrdr: 4,
                    menuNm: '팝업 관리',
                    upperMenuId: 15060000,
                    chkUrl: '/mng/bbs/pop/selectPopupList.do',
                    level: 3,
                    menuOrdrArr: [5, 7, 4],
                    menuTy: '01',
                    useAt: 'N',
                    children: []
                },
                {
                    menuNo: 15060900,
                    menuOrdr: 6,
                    menuNm: '분석예제 관리',
                    upperMenuId: 15060000,
                    chkUrl: '/mng/bbs/rae/selectRAnlsExrcListVw.do',
                    level: 3,
                    menuOrdrArr: [5, 7, 6],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15060300,
                    menuOrdr: 8,
                    menuNm: '이슈·보도자료 관리',
                    upperMenuId: 15060000,
                    chkUrl: '/mng/bbs/isu/selectIssueNewsListVw.do',
                    level: 3,
                    menuOrdrArr: [5, 7, 8],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                }
            ]
        },
        {
            menuNo: 15070000,
            menuOrdr: 8,
            menuNm: '콘텐츠 관리',
            upperMenuId: 15000000,
            chkUrl: 'dir',
            level: 2,
            menuOrdrArr: [5, 8],
            menuTy: '01',
            useAt: 'Y',
            children: [
                {
                    menuNo: 15070100,
                    menuOrdr: 1,
                    menuNm: '관련 정책/법령',
                    upperMenuId: 15070000,
                    chkUrl: '/mng/cnt/law/selectLawList.do',
                    level: 3,
                    menuOrdrArr: [5, 8, 1],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15070300,
                    menuOrdr: 3,
                    menuNm: '용어사전 관리',
                    upperMenuId: 15070000,
                    chkUrl: '/mng/cnt/wrd/selectEclgyObsRvnWordListVw.do',
                    level: 3,
                    menuOrdrArr: [5, 8, 3],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15070400,
                    menuOrdr: 4,
                    menuNm: '생태계 부문 리스크 목록 관리',
                    upperMenuId: 15070000,
                    chkUrl: '/mng/cnt/rsk/selectEclgyRiskListVw.do',
                    level: 3,
                    menuOrdrArr: [5, 8, 4],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                },
                {
                    menuNo: 15070500,
                    menuOrdr: 5,
                    menuNm: '콘텐츠센터 관리',
                    upperMenuId: 15070000,
                    chkUrl: '/mng/cnt/cts/selectContsMngListVw.do',
                    level: 3,
                    menuOrdrArr: [5, 8, 5],
                    menuTy: '01',
                    useAt: 'Y',
                    children: []
                }
            ]
        }
    ]
};
