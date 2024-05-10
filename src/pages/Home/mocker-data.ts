import { character, product } from "./model";
import product1 from '../../assets/product-1.bf2fbdc6.png'
import product2 from '../../assets/product-2.40aeec66.png'
import product3 from '../../assets/product-3.5b794844.png'
import product4 from '../../assets/product-4.d81a34a7.png'

import character_normal1 from '../../assets/characters/character-1-normal.7f3e9793.png'
import character_active1 from '../../assets/characters/character-1-active.8d1d9f2a.png'
import character_normal2 from '../../assets/characters/character-2-normal.8a67d7ee.png'
import character_active2 from '../../assets/characters/character-2-active.ed61dfa6.png'
import character_normal3 from '../../assets/characters/character-3-normal.3fb1a4d6.png'
import character_active3 from '../../assets/characters/character-3-active.1f222b79.png'
import character_normal4 from '../../assets/characters/character-4-normal.3ab5544a.png'
import character_active4 from '../../assets/characters/character-4-active.f36fa8b6.png'

export const dataProduct: product[] = [
    {
      id: 1,
      image_normal: {
        url: product1,
        alt: 'Dog',
      },
      name: 'DOG',
    },
    {
      id: 2,
      image_normal: {
        url: product2,
        alt: 'Cat',
      },
      name: 'CAT',
    },
    {
      id: 3,
      image_normal: {
        url: product3,
        alt: 'Unicorn',
      },
      name: 'UNICORN',
    },
    {
      id: 4,
      image_normal: {
        url: product4,
        alt: 'Bee',
      },
      name: 'BEE',
    },
  ]

  export const dataCharacter: character[] =  [
    {
      id: 1,
      image_normal: {
        url: character_normal1,
        alt: 'character1',
      },
      image_active: {
        url: character_active1,
        alt: 'character1',
      },
    },
    {
      id: 2,
      image_normal: {
        url: character_normal2,
        alt: 'character2',
      },
      image_active: {
        url: character_active2,
        alt: 'character2',
      },
    },
    {
      id: 3,
      image_normal: {
        url: character_normal3,
        alt: 'character3',
      },
      image_active: {
        url: character_active3,
        alt: 'character3',
      },
    },
    {
      id: 4,
      image_normal: {
        url: character_normal4,
        alt: 'character4',
      },
      image_active: {
        url: character_active4,
        alt: 'character4',
      },
    },
  ]