export interface IProvider {
  readonly name: string,
  models(): [string]
}
