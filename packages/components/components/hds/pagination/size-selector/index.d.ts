/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import Component from '@glimmer/component';
export interface PaginationSizeSelectorSignature {
    Args: {
        pageSizes: Array<Number>;
        selectedSize: number;
        label: String;
        onChange: (n: number) => false;
    };
}
export default class HdsPaginationSizeSelectorComponent extends Component<PaginationSizeSelectorSignature> {
    /**
     * Generates a unique ID for the pageSize select
     *
     * @param SizeSelectorId
     */
    SizeSelectorId: string;
    /**
     * @param pageSizes
     * @type {array of numbers}
     * @description Set the page sizes users can select from.
     */
    get pageSizes(): Number[];
    /**
     * @param selectedSize
     * @type integer
     * @description The selected ("current") page size
     */
    get selectedSize(): number;
    /**
     * @param label
     * @type string
     * @default "Items per page"
     * @description The label text for the select
     */
    get label(): string | String;
    onChange(element: HTMLSelectElement): void;
}
//# sourceMappingURL=index.d.ts.map