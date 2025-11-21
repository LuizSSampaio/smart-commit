import { command, option, optional, run, string } from "cmd-ts"

const cmd = command({
  name: 'smart-commit',
  version: '0.1.0',
  args: {
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

run(cmd, process.argv.slice(2))
