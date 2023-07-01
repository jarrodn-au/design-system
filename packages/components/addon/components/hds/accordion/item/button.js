/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

export default class HdsAccordionItemButtonComponent extends Component {
  get onClickToggle() {
    return this.args.onClickToggle ?? function () {};
  }

  /**
   * Get the class names to apply to the component.
   * @method ItemButton#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-accordion-item__button'];

    // add a class based on the @isOpen argument
    if (this.args.isOpen) {
      classes.push('hds-accordion-item__button--is-open');
    }

    // if toggle is NOT interactive, then button IS
    if (this.args.isInteractive === false) {
      classes.push('hds-accordion-item__button--is-interactive');
    } else {
      classes.push('hds-accordion-item__button--is-not-interactive');
    }
    return classes.join(' ');
  }
}