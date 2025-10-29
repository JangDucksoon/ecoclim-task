import { getTree } from '@/lib/util';
import SideMenu from './side-menu';
import { static_menu } from '@/lib/temp-data';

export default function Aside() {
    const menuTree = getTree(static_menu, 'menuNo', 'upperMenuId');
    return (
        <aside className="w-(--aside-width) block shrink-0">
            <SideMenu menuTree={menuTree} />
        </aside>
    );
}
