/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export const DEFAULT_COLOR = 'primary';
export const COLORS = ['primary', 'secondary'];
export const DEFAULT_ICON = 'clipboard-copy';
export const SUCCESS_ICON = 'clipboard-checked';
export const ERROR_ICON = 'clipboard';
export const DEFAULT_STATUS = 'idle';

export default class HdsCopySnippetIndexComponent extends Component {
  @tracked status = DEFAULT_STATUS;
  @tracked timer;

  /**
   * @param icon
   * @type {string}
   * @default DEFAULT_ICON
   * @description Determines the icon to be used, based on the success state. Note that this is auto-tracked because it depends on a tracked property (status).
   */
  get icon() {
    let icon = DEFAULT_ICON;
    if (this.status === 'success') {
      icon = SUCCESS_ICON;
    } else if (this.status === 'error') {
      icon = ERROR_ICON;
    }
    return icon;
  }

  /**
   * @param color
   * @type {string}
   * @default primary
   * @description Determines the color of button to be used; acceptable values are `primary` and `secondary`
   */
  get color() {
    let { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Hds::Copy::Snippet" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  get textToCopy() {
    return this.args.encoded
      ? decodeURI(this.args.textToCopy)
      : this.args.textToCopy;
  }

  /**
   * Get the class names to apply to the component.
   * @method CopySnippet#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-copy-snippet'];

    // add a class based on the @color argument
    classes.push(`hds-copy-snippet--color-${this.color}`);

    classes.push(`hds-copy-snippet--${this.status}`);

    return classes.join(' ');
  }

  @action
  onSuccess() {
    this.status = 'success';
    this.resetStatusDelayed();
  }

  @action
  onError() {
    this.status = 'error';
    this.resetStatusDelayed();
  }

  resetStatusDelayed() {
    clearTimeout(this.timer);
    // make it fade back to the default state
    this.timer = setTimeout(() => {
      this.status = DEFAULT_STATUS;
    }, 1500);
  }
}
