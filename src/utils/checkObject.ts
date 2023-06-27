class CheckObject {
  isUndefined(object?: object) {
    return object == undefined
  }

  hasProperty(object: object, value: string): boolean {
    if (this.isUndefined(object)) return false
    return Object.prototype.hasOwnProperty.call(object, value)
  }
}

export default CheckObject
