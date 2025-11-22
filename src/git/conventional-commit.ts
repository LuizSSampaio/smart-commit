import type { ICommit } from ".";

export class ConventionalCommit implements ICommit {
  type: string
  scope: string
  breakingChange: boolean
  summary: string
  body: string

  constructor(type: string, summary: string, breakingChange: boolean = false, scope: string = "", body: string = "") {
    this.type = type
    this.breakingChange = breakingChange
    this.scope = scope
    this.summary = summary
    this.body = body
  }

  title(): string {
    let title = this.type
    if (this.scope) {
      title += `(${this.scope})`
    }
    if (this.breakingChange) {
      title += '!'
    }

    return `${title}: ${this.summary}`
  }
  description(): string {
    return this.body
  }

  toString(): string {
    const title = this.title()
    const description = this.description()

    return (description) ? `${title}\n\n${description}` : title
  }
}
