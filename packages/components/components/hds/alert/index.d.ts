/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import Component from '@glimmer/component';
export declare const TYPES: string[];
export declare const DEFAULT_COLOR = "neutral";
export declare const COLORS: string[];
type MapType = {
    [key: string]: string;
};
export declare const MAPPING_COLORS_TO_ICONS: MapType;
export interface AlertSignature {
    Args: {
        type: string;
        color: string;
        icon: string | false;
        onDismiss: () => false;
    };
}
export default class HdsAlertIndexComponent extends Component<AlertSignature> {
    role: string;
    ariaLabelledBy: string | undefined;
    constructor(owner: any, args: AlertSignature['Args']);
    /**
     * @param color
     * @type {enum}
     * @default neutral
     * @description Determines the color scheme for the alert.
     */
    get color(): string;
    /**
     * @param icon
     * @type {string}
     * @default null
     * @description The name of the icon to be used.
     */
    get icon(): string | false | undefined;
    /**
     * @param onDismiss
     * @type {function}
     * @default () => {}
     */
    get onDismiss(): false | (() => false);
    /**
     * @param iconSize
     * @type {string}
     * @description ensures that the correct icon size is used. Automatically calculated.
     */
    get iconSize(): "16" | "24";
    /**
     * Get the class names to apply to the component.
     * @method Alert#classNames
     * @return {string} The "class" attribute to apply to the component.
     */
    get classNames(): string;
    didInsert(element: HTMLElement): void;
}
export {};
//# sourceMappingURL=index.d.ts.map