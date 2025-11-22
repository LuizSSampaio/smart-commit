import { boolean, command, flag, option, optional, run, string, subcommands } from "cmd-ts"
import { ConventionalCommit } from "./git/conventional-commit"

const draft = command({
  name: 'draft',
  args: {
    summary: option({
      long: 'summary',
      short: 's',
      type: string
    }),
    type: option({
      long: 'type',
      short: 't',
      type: string
    }),
    breakingChange: flag({
      long: 'breaking-change',
      short: 'B',
      type: boolean
    }),
    scope: option({
      long: 'scope',
      short: 'S',
      type: optional(string)
    }),
    body: option({
      long: 'body',
      short: 'b',
      type: optional(string)
    })
  },
  handler: (args) => {
    const commit = new ConventionalCommit(args.type, args.summary, args.breakingChange, args.scope, args.body)
    console.log(commit.toString())
  }
})

const cmd = subcommands({
  name: 'smart-commit',
  version: '0.1.0',
  description: 'TODO',
  cmds: { draft }
})

run(cmd, process.argv.slice(2))
