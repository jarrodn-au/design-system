/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { capitalize } from '@ember/string';

export default class Index extends Component {
  get model() {
    const data = [
      {
        id: '1',
        type: 'folk',
        attributes: {
          artist: 'Nick Drake',
          album: 'Pink Moon',
          year: '1972',
          quote:
            "The song is very special. It's an old song by a guy named Nick Drake. It's called 'Pink Moon' and is actually a very good introduction to Nick Drake if you're not familiar with him. It's very transporting. And to us seemed very fitting for a beautiful drive in the country on a very special night.",
          'vinyl-cost': '29.27',
          icon: 'boundary-color',
          'badge-type': 'filled',
          'badge-color': 'neutral',
        },
      },
      {
        id: '2',
        type: 'folk',
        attributes: {
          artist: 'The Beatles',
          album: 'Abbey Road',
          year: '1969',
          quote:
            "it was the Beatles' last love letter to the world...lush, rich, smooth, epic, emotional and utterly gorgeous",
          'vinyl-cost': '25.99',
          icon: 'consul-color',
          'badge-type': 'outlined',
          'badge-color': 'neutral',
        },
      },
      {
        id: '3',
        type: 'folk',
        attributes: {
          artist: 'Melanie',
          album: 'Candles in the Rain',
          year: '1971',
          quote:
            'Candles in the Rain matched material and interpretation with greater skill than she had in the past, and it ranks with her finest work',
          'vinyl-cost': '46.49',
          icon: 'terraform-color',
          'badge-type': 'filled',
          'badge-color': 'highlight',
        },
      },
      {
        id: '4',
        type: 'folk',
        attributes: {
          artist: 'Bob Dylan',
          album: 'Bringing It All Back Home',
          year: '1965',
          quote:
            'By fusing the Chuck Berry beat of the Rolling Stones and the Beatles with the leftist, folk tradition of the folk revival, Dylan really had brought it back home, creating a new kind of rock & roll that made every type of artistic tradition available to rock.',
          'vinyl-cost': '229.00',
          icon: 'nomad-color',
          'badge-type': 'outlined',
          'badge-color': 'success',
        },
      },
      {
        id: '5',
        type: 'folk',
        attributes: {
          artist: 'James Taylor',
          album: 'Sweet Baby James',
          year: '1970',
          quote:
            '(It) struck a chord with music fans, especially because of its attractive mixture of folk, country, gospel, and blues elements, all of them carefully understated and distanced.',
          'vinyl-cost': '16.00',
          icon: 'waypoint-color',
          'badge-type': 'filled',
          'badge-color': 'warning',
        },
      },
      {
        id: '6',
        type: 'folk',
        attributes: {
          artist: 'Simon and Garfunkel',
          album: 'Bridge Over Troubled Waters',
          year: '1970',
          quote:
            'Perhaps the most delicately textured album to close out the 1960s from any major rock act.',
          'vinyl-cost': '20.49',
          icon: 'vagrant-color',
          'badge-type': 'outlined',
          'badge-color': 'critical',
        },
      },
    ];

    // make sure the variable is declared outside of the loop
    // so we can return it in the model response
    let dataResponse = data.map((record) => {
      let { id, attributes } = record;
      return { id, ...attributes };
    });
    const keys = Object.keys(data[0].attributes);
    const columns = keys.map((key) => {
      return { key, label: capitalize(key) };
    });
    return { myDemoData: dataResponse, columns };
  }

  get myDataItems() {
    return [
      {
        product: 'Terraform',
        brandColor: 'purple',
        usesHelios: true,
      },
      {
        product: 'Nomad',
        brandColor: 'green',
        usesHelios: true,
      },
      {
        product: 'Vault',
        brandColor: 'yellow',
        usesHelios: true,
      },
    ];
  }

  get modelWithLargeNumberOfColumns() {
    return [
      {
        first_name: 'Judith',
        last_name: 'Maxene',
        age: '43',
        email: 'j.maxene@randatmail.com',
        phone: '697-0732-81',
        education: 'Upper secondary school',
        occupation: 'Astronomer',
        bio: 'Analyst. Gamer. Friendly explorer. Incurable TV lover. Social media scholar. Amateur web geek. Proud zombie guru.',
      },
      {
        first_name: 'Elmira',
        last_name: 'Aishah',
        age: '28',
        email: 'e.aishah@randatmail.com',
        phone: '155-6076-27',
        education: 'Master in Physics',
        occupation: 'Actress',
        bio: 'Total coffee guru. Food enthusiast. Social media expert. TV aficionada. Extreme music advocate. Zombie fan.',
      },
      {
        first_name: 'Chinwendu',
        last_name: 'Henderson',
        age: '62',
        email: 'c.henderson@randatmail.com',
        phone: '155-0155-09',
        education: 'Bachelor in Modern History',
        occupation: 'Historian',
        bio: 'Creator. Internet maven. Coffee practitioner. Troublemaker. Alcohol specialist.',
      },
    ];
  }
}
