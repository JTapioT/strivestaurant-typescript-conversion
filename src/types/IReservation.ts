export interface Reservation {
  _id?:string
  name: string
  phone: string
  numberOfPeople: number
  smoking: boolean
  dateTime: string
  specialRequests: string
}

export type ReservationFormKey = string
export type ReservationFormValue = string | number | boolean
