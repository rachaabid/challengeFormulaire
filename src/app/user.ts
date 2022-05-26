export class User {
  constructor (
    public name?: string,
    public email?: string,
    public typeCarte?: string,
    public numeroCarte?: number,
    public dateExp? : string,
    public code?: number
  ){}
}
