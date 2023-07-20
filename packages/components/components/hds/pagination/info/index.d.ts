/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import Component from '@glimmer/component';
export interface PaginationInfoSignature {
    Args: {
        showTotalItems: boolean;
    };
}
export default class HdsPaginationInfoComponent extends Component<PaginationInfoSignature> {
    /**
     * @param showTotalItems
     * @type {boolean}
     * @description Controls the visibility of the total items
     */
    get showTotalItems(): boolean;
}
//# sourceMappingURL=index.d.ts.map