/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

export default class DemoAppSubmodulesRoute extends Route {
  model(params) {
    // console.log('params', params);
    return {
      submodule_id: params.submodule_id,
      aaa: 'AAA',
      bbb: 'BBB',
    };
  }
}
