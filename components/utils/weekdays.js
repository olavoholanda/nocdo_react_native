import moment from 'moment'

const days = function (start, end, weekdays, index) {
  let days = [], d = moment(start).startOf('day')
  let isIndexed = (typeof index !== 'undefined' && index !== null)

  if (typeof weekdays !== 'undefined' && weekdays !== null) {
    if (weekdays.constructor !== Array) { weekdays = [weekdays] }

    for (let w = 0; w < weekdays.length; w++) {
      weekdays[w] = moment(start).day(weekdays[w]).day()
    }
  } else {
    weekdays = [0, 1, 2, 3, 4, 5, 6]
  }

  for (let i = 0; i < (moment(end).endOf('day').diff(moment(start), 'days') + 1); i++) {
    let wd = d.day()

    if (isIndexed && !days[wd]) { days[wd] = [] }

    if (weekdays.indexOf(wd) !== -1) {
      if (isIndexed) {
        days[wd].push(moment(d))
      } else {
        days.push(moment(d))
      }
    }

    d.add(1, 'day')
  }

  if (isIndexed) {
    let nDays = []

    if (index.constructor !== Array) { index = [index] }

    for (let a = 0; a < days.length; a++) {
      if (!days[a].length) { continue }

      for (let n = 0; n < index.length; n++) {
        let ind = parseInt(index[n])
        if (isNaN(ind)) { continue }
        let ni = (ind - 1)
        if (ind < 0) { ni = (days[a].length + ind) }
        nDays.push(days[a][ni])
      }
    }

    days = nDays
  }

  days = days
    .sort(function (a, b) { return moment.utc(a).diff(moment.utc(b)) })
    .filter(function (o, p, a) { return (o != null && !o.isSame(a[p - 1])) })

  if (!days.length) { return false }
  if (days.length === 1) { return days[0] }

  return days
}

export const weekdaysInBetween = function (date, weekdays, index) {
  if (!date) { date = new Date() }
  return days(moment(this).add(1, 'day'), moment(date).subtract(1, 'day'), weekdays, index)
}

export const weekdaysInMonth = function (date, weekdays, index) {
  return days(moment(date).date(1), moment(date).endOf('month'), weekdays, index)
}

export const weekdaysInYear = function (weekdays, index) {
  return days(moment(this).dayOfYear(1), moment(this).endOf('year'), weekdays, index)
}