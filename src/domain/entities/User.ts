export class User {
  [x: string]: string
  constructor(username: string, token: string) {
    this.username = username
    this.token = token
  }
}
