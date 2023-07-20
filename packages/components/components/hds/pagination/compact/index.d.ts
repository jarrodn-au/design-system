/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import Component from '@glimmer/component';
import RouterService from '@ember/routing/router-service';
export interface PaginationCompactSignature {
    Args: {
        showLabels: boolean;
        ariaLabel: string;
        currentPage: string;
        route: unknown;
        model: unknown;
        models: unknown;
        replace: unknown;
        queryPrev: unknown;
        queryNext: unknown;
        queryFunction: (page: string, currentPage: string | undefined) => true;
        onPageChange: (page: string) => false;
    };
}
export default class HdsPaginationCompactIndexComponent extends Component<PaginationCompactSignature> {
    router: RouterService;
    hasRouting: boolean;
    currentPage: string | undefined;
    constructor(owner: unknown, args: PaginationCompactSignature['Args']);
    /**
     * @param showLabels
     * @type {boolean}
     * @default true
     * @description Show the labels for the "prev/next" controls
     */
    get showLabels(): boolean;
    /**
     * @param ariaLabel
     * @type {string}
     * @default 'Pagination navigation'
     */
    get ariaLabel(): string;
    get routeQueryParams(): {
        [key: string]: string | undefined;
    };
    buildQueryParamsObject(page: string): {};
    get routing(): {
        route: {} | undefined;
        model: {} | undefined;
        models: {} | undefined;
        replace: {} | undefined;
        queryPrev: {} | undefined;
        queryNext: {} | undefined;
    };
    onPageChange(newPage: string): void;
}
//# sourceMappingURL=index.d.ts.map