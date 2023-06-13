import { formatDistance } from "date-fns"
import { ptBR } from "date-fns/locale"

export const formatRelativeDate = (date?: string) => {
  if (!date) return

  return formatDistance(new Date(date), new Date(), {
    locale: ptBR,
    addSuffix: true
  })
}