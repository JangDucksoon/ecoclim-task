export type headerMenuType = {
    menuNo: number;
    menuOrdr: number;
    menuNm: string;
    upperMenuId: number;
    chkUrl: string;
    level: number;
    menuOrdrArr: number[];
    menuTy: '01' | '02' | '03';
    useAt: 'Y' | 'N';
    children?: headerMenuType[];
};
