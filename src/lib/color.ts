import { CSSProperties } from 'react'
import { ArrUtil } from './array.util'

export class ColorUtil {
  private static _polygon_colors: CSSProperties['color'][] = [
    //primary
    'red',
    'green',
    'blue',
    'yellow',
    'cyan',
    'magenta',

    //secondary
    'orange',
    'lime',
    'purple',
    'teal',
    'pink',
    'brown',
  ]

  private static colors: string[] = [
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#F0FF33',
    '#FF33F6',
    '#33FFF9',
    '#A833FF',
    '#FF8F33',
    '#33FF88',
    '#FF3333',
  ]

  //prettier-ignore
  static rand = (i = 0): CSSProperties['color'] => 
    ArrUtil.get_safe_with_wraparound(this._polygon_colors, i)

  static getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length)

    return this.colors[randomIndex]
  }
}
