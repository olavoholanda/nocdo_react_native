import _ from 'lodash'

const WEEKDAYS = {
  monday: 'Segunda',
  tuesday: 'Terça',
  wednesday: 'Quarta',
  thursday: 'Quinta',
  friday: 'Sexta',
  saturday: 'Sábado',
  sunday: 'Domingo'
}

export const closedDays = function (days) {
  if (days === undefined || days === null || days.constructor !== Array || days.length === 0) {
    return 'Aberto todos os dias.'
  }

  days = days.map(d => WEEKDAYS[d])

  const closed = _.join(days, ',')

  return `Fechado: ${closed}.`
}