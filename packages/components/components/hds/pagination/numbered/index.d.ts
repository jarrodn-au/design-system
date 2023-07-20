/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import Component from '@glimmer/component';
import RouterService from '@ember/routing/router-service';
export declare const DEFAULT_PAGE_SIZES: number[];
/**
 * Elliptize a list of pages
 *
 * @param pages - array with all the "pages" (integer numbers)
 * @param current - "current" page (array's index)
 * @param limit - number of "page numbers" to be shown at a time (should always be an odd number!)
 *
 * @return - array of integers ("pages") + `...` strings ("ellipsis")
 */
export declare const elliptize: ({ pages, current, limit }: {
    pages: any;
    current: any;
    limit?: number | undefined;
}) => any;
export interface PaginationNumberedSignature {
    Args: {
        currentPage: number;
        currentPageSize: number;
        showLabels: boolean;
        showInfo: boolean;
        showSizeSelector: boolean;
        showPageNumbers: boolean;
        isTruncated: boolean;
        totalItems: number;
        ariaLabel: string;
        route: unknown;
        model: unknown;
        models: unknown;
        replace: unknown;
        queryPrev: unknown;
        queryNext: unknown;
        queryPages: unknown;
        pageSizes: Array<number>;
        queryFunction: (page: number, currentPage: number | undefined) => true;
        onPageChange: (page: number, pageSize: number | undefined) => false;
        onPageSizeChange: (newPageSize: number) => false;
    };
}
export default class HdsPaginationNumberedIndexComponent extends Component<PaginationNumberedSignature> {
    router: RouterService;
    hasRouting: boolean;
    _currentPage: number;
    _currentPageSize: number;
    showInfo: boolean;
    showLabels: boolean;
    showSizeSelector: boolean;
    showPageNumbers: boolean;
    isTruncated: boolean;
    constructor(owner: unknown, args: PaginationNumberedSignature['Args']);
    /**
     * @param ariaLabel
     * @type {string}
     * @default 'Pagination navigation'
     */
    get ariaLabel(): string;
    get currentPage(): number;
    set currentPage(value: number);
    get currentPageSize(): number;
    set currentPageSize(value: number);
    /**
     * @param pageSizes
     * @type {array of numbers}
     * @description Set the page sizes users can select from.
     * @default [10, 30, 50]
     */
    get pageSizes(): number[];
    get itemsRangeStart(): number;
    get itemsRangeEnd(): number;
    get pages(): any;
    get totalPages(): number;
    get routeQueryParams(): {
        [key: string]: string | undefined;
    };
    buildQueryParamsObject(page: number, pageSize: number): {};
    get routing(): {
        route: {} | undefined;
        model: {} | undefined;
        models: {} | undefined;
        replace: {} | undefined;
        queryPrev: {} | undefined;
        queryNext: {} | undefined;
        queryPages: {} | undefined;
    };
    get isDisabledPrev(): boolean;
    get isDisabledNext(): boolean;
    onPageChange(page: string): void;
    onPageSizeChange(newPageSize: number): void;
}
//# sourceMappingURL=index.d.ts.map