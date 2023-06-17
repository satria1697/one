import MiMath from '@/utils/math'

class MiPrice {
  miMath = new MiMath()
  rate = 14961
  convertToRupiah(value: number) {
    return `Rp ${this.miMath.floor(value * this.rate)}`
  }

  markupPrice(value: number) {
    const markup = Math.ceil(value + 2)
    return this.convertToRupiah(markup)
  }
}

export default MiPrice
