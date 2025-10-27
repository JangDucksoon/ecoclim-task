import { BASE_PATH } from './env';

export function getUrlWithBasePath(url: string) {
    if (url.startsWith('http')) {
        return url;
    } else if (url.startsWith(BASE_PATH)) {
        return url;
    } else {
        return `${BASE_PATH}${url}`;
    }
}

export function getUrlWithoutBasePath(url: string) {
    if (url.startsWith('http')) {
        return url;
    } else if (url.startsWith(BASE_PATH)) {
        return url.substring(BASE_PATH.length);
    } else {
        return url;
    }
}

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
