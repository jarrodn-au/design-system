/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import Component from '@glimmer/component';
export interface PaginationNavNumberSignature {
    Args: {
        page: number;
        isSelected: boolean;
        onClick: (n: number) => false;
    };
}
export default class HdsPaginationControlNumberComponent extends Component<PaginationNavNumberSignature> {
    get page(): number;
    /**
     * Get the class names to apply to the component.
     * @method classNames
     * @return {string} The "class" attribute to apply to the component.
     */
    get classNames(): string;
    onClick(): void;
}
//# sourceMappingURL=number.d.ts.map