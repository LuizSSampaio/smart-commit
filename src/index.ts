import { command, option, optional, run, string, subcommands } from "cmd-ts"

const draft = command({
  name: 'draft',
  args: {
    context: option({
      long: 'context',
      short: 'c',
      type: optional(string)
    }),
    type: option({
      long: 'type',
      short: 't',
      type: optional(string)
    }),
    scope: option({
      long: 'scope',
      short: 's',
      type: optional(string)
    })
  },
  handler: (args) => {
    console.log(args)
  }
})

const cmd = subcommands({
  name: 'smart-commit',
  version: '0.1.0',
  description: 'TODO',
  cmds: { draft }
})

run(cmd, process.argv.slice(2))
