export const dateFormatter = (date: Date) => {
  if (!date) {
    return ''
  }

  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full' }).format(date)
}
