/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SubmodulesController extends Controller {
  queryParams = ['tab'];

  @tracked tab = 'readme';

  get tabs() {
    console.log(this.model);
    return [
      {
        key: 'readme',
        title: 'Readme',
        component: 'registry/module/view/tabs/readme',
      },
      {
        key: 'inputs',
        title: 'Inputs',
        count: 1,
        component: 'registry/module/view/tabs/inputs',
      },
      {
        key: 'outputs',
        title: 'Outputs',
        count: 2,
        component: 'registry/module/view/tabs/outputs',
      },
      {
        key: 'dependencies',
        title: 'Dependencies',
        count: 3,
        component: 'registry/module/view/tabs/dependencies',
      },
      {
        key: 'resources',
        title: 'Resources',
        count: 4,
        component: 'registry/module/view/tabs/resources',
      },
    ];
  }

  @action
  persistActiveTab(event) {
    this.tab = event.target.parentNode.getAttribute('data-tab-key');
  }
}
