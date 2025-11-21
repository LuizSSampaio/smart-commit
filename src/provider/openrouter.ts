import type { IProvider } from ".";

export class OpenRouter implements IProvider {
  readonly name: string = "OpenRouter"

  models(): [string] {
    throw new Error("Method not implemented.")
  }
}
