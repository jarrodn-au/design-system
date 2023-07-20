/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import Component from '@glimmer/component';
export declare const DIRECTIONS: string[];
export interface PaginationNavArrowSignature {
    Args: {
        direction: string;
        showLabel: boolean;
        onClick: (n: string) => false;
    };
}
export default class HdsPaginationControlArrowComponent extends Component<PaginationNavArrowSignature> {
    get content(): {
        label: string;
        icon: string;
        ariaLabel: string;
    } | undefined;
    /**
     * @param showLabel
     * @type {boolean}
     * @default true
     * @description Show the labels for the control
     */
    get showLabel(): boolean;
    /**
     * Get the class names to apply to the component.
     * @method classNames
     * @return {string} The "class" attribute to apply to the component.
     */
    get classNames(): string;
    onClick(): void;
}
//# sourceMappingURL=arrow.d.ts.map