import { Policy } from './Policy'

export interface ClientPolicy extends Policy {
  client: string
}