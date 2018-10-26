export interface IUserProfile {
  id: string
  name: string
  username: string
  surname: string
  phone: string
  note: number
  profile: string
  userToken: string
  rating: number
  comments: any
  commentsPosted: any
  fullAddress: string
  avatar: string
  avatarName: string
  description: string
  lastname: string
  firstname: string
  birthdate: string
  city: string
  zipcode: string
}

export interface User<S, T> extends IUserProfile {
  name: string
  email: string
  OAuth: T
  order_history: S[]
}

export interface UserState {
  isEnabled: boolean
}
