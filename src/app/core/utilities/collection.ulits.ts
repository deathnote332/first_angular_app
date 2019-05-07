export enum SORT_TYPE {
    ASC = 'SORT_TYPE_ASC',
    DESC = 'SORT_TYPE_DESC'
}

export function sortBy(data: any[], sortKey: string, sortType?: SORT_TYPE): any[] {
    const _sortedData = data.sort((dataA, dataB) => {
        if (String(dataA[sortKey]).toLowerCase() > String(dataB[sortKey]).toLowerCase()) {
            return 1;
        }

        if (String(dataA[sortKey]).toLowerCase() < String(dataB[sortKey]).toLowerCase()) {
            return -1;
        }

        return 0;
    });

    if (sortType === SORT_TYPE.DESC) {
        return _sortedData.reverse();
    }

    return _sortedData;
}


export function paginate(data: any, currentPage: number, pageSize: number) {
    return data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
}

export function getPagingRange(currentPage: number, totalPage: number = 20, displayLength: number = 5, startPage: number = 1) {
    if (displayLength > totalPage) {
        displayLength = totalPage;
    }
    let start = currentPage - Math.floor(length / 2);
    start = Math.max(start, startPage);
    start = Math.min(start, startPage + totalPage - displayLength);
    return Array.from({ length: displayLength }, (el, i) => start + i);
}
