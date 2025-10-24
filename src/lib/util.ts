export function getTree(array: any[], key: string, parentKey: string) {
    if (!Array.isArray(array) || array.length === 0) {
        return [];
    }

    if (!key || !parentKey) {
        return [];
    }

    const tree: any[] = [];
    const map: { [key: string]: any } = {};

    array.forEach((node: any) => {
        map[node[key]] = { ...node, children: [] };
    });

    // 트리 구성
    array.forEach((node) => {
        const parentNode = map[node[parentKey]];
        if (parentNode) {
            parentNode.children.push(map[node[key]]);
        } else {
            tree.push(map[node[key]]);
        }
    });

    return tree;
}
