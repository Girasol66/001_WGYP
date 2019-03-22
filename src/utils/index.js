export const dateFormat = (offsetTime, format) => {
  let str = ''
  const date = typeof offsetTime === 'number'
    ? new Date(offsetTime) : offsetTime
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  month = month > 9 ? month : '0' + month
  day = day > 9 ? day : '0' + day
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  switch (format) {
    case 'yyyy-mm-dd':
      str = year + '-' + month + '-' + day
      break
    case 'yyyy/mm/dd':
      str = year + '/' + month + '/' + day
      break
    case 'yyyy-mm-dd hh:mm':
      str = year + '-' + month + '-' + day +
        ' ' + hours + ':' + minutes
      break
    case 'yyyy/mm/dd hh:mm':
      str = year + '/' + month + '/' + day +
        ' ' + hours + ':' + minutes
      break
    case 'yyyy-mm-dd hh:mm:ss':
      str = year + '-' + month + '-' + day +
        ' ' + hours + ':' + minutes + ':' + seconds
      break
    case 'yyyy/mm/dd hh:mm:ss':
      str = year + '/' + month + '/' + day +
        ' ' + hours + ':' + minutes + ':' + seconds
      break
    default:
      str = year + '-' + month + '-' + day
      break
  }
  return str
}

export const getSpecifiedDate = (index) => {
  let date = new Date()
  let jetLag = 0
  if (typeof (index) === 'number') {
    jetLag = 1000 * 3600 * 24 * index
  }
  console.log(date.getTime() + jetLag)
  return (date.getTime() + jetLag)
}
