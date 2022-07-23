export function formatSec(sec: number): string {
  const _min = Math.floor(sec / 60)
  const _sec = sec % 60

  const sentence = []

  _min > 0 &&
    sentence.push(_min)
  _min > 0 && _sec > 0 &&
    sentence.push(':')
  _sec > 0 &&
    sentence.push(_sec < 10 ? `0${_sec}` : _sec)

  return sentence.join('')
}
