import { static_menu } from '@/lib/temp-data';
import EcoclimBreadCrumb from './breadcrumb';
import { getTree } from '@/lib/util';

export default function Nav() {
    const menuTree = getTree(static_menu, 'menuNo', 'upperMenuId');

    return <EcoclimBreadCrumb menuTree={menuTree} />;
}
