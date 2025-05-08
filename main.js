import { githubEventTypes } from './utils/eventsTypes.js'
import { exit } from 'process'

const user = process.argv[2] ?? ''

if (user === '') {
  console.log('Por favor especifica un usuario')
  exit()
}

async function main (user) {
  const response = await fetch(`https://api.github.com/users/${user}/events`)
  const data = await response.json()

  const apiData = []

  data.forEach(e => {
    const { type, repo } = e
    const find = apiData.find(e => e.type === type && e.idRepo === repo.id)

    if (find) {
      find.count++
    } else {
      apiData.push({ type, repo: repo.name, idRepo: repo.id, count: 1 })
    }
  })

  apiData.forEach(e => {
    const evetGithub = githubEventTypes.find(event => event.name === e.type)
    const description = evetGithub.description(e.count, e.repo, user)
    console.log(description)
  })
}

main(user).catch(console.error)
