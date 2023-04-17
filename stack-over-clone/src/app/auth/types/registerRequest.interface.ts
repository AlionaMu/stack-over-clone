export interface RegisterRequestInterface {
  user: {
    name: string
    email: string
    password: string
    isAdmin: boolean
    id: string
  }
}
