export default function keyMirror(target) {
  let obj = {}
  Object.keys(target).forEach(key => {
    obj[key] = key
  })
  return obj
}
