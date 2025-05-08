export const githubEventTypes = [
  {
    name: 'CreateEvent',
    description: (number, repo, user) => `El usuario ${user} ha creado ${number} rama(s) o etiqueta(s) en el repositorio ${repo}.`
  },
  {
    name: 'DeleteEvent',
    description: (number, repo, user) => `El usuario ${user} ha eliminado ${number} rama(s) o etiqueta(s) en el repositorio ${repo}.`
  },
  {
    name: 'ForkEvent',
    description: (number, repo, user) => `El usuario ${user} ha bifurcado el repositorio ${repo} ${number} vez/veces.`
  },
  {
    name: 'GollumEvent',
    description: (number, repo, user) => `El usuario ${user} ha creado o editado ${number} página(s) en la wiki del repositorio ${repo}.`
  },
  {
    name: 'IssueCommentEvent',
    description: (number, repo, user) => `El usuario ${user} ha publicado ${number} comentario(s) en un problema o pull request en el repositorio ${repo}.`
  },
  {
    name: 'IssuesEvent',
    description: (number, repo, user) => `El usuario ${user} ha creado, cerrado, reabierto o etiquetado ${number} problema(s) en el repositorio ${repo}.`
  },
  {
    name: 'MemberEvent',
    description: (number, repo, user) => `El usuario ${user} ha agregado o eliminado ${number} miembro(s) en el repositorio ${repo}.`
  },
  {
    name: 'PublicEvent',
    description: (number, repo, user) => `El usuario ${user} ha cambiado la visibilidad del repositorio ${repo} de privado a público ${number} vez/veces.`
  },
  {
    name: 'PullRequestEvent',
    description: (number, repo, user) => `El usuario ${user} ha creado, actualizado, cerrado o sincronizado ${number} solicitud(es) de extracción en el repositorio ${repo}.`
  },
  {
    name: 'PullRequestReviewEvent',
    description: (number, repo, user) => `El usuario ${user} ha creado, actualizado o eliminado ${number} revisión(es) de solicitud(es) de extracción en el repositorio ${repo}.`
  },
  {
    name: 'PullRequestReviewCommentEvent',
    description: (number, repo, user) => `El usuario ${user} ha publicado ${number} comentario(s) en una revisión de solicitud de extracción en el repositorio ${repo}.`
  },
  {
    name: 'PushEvent',
    description: (number, repo, user) => `El usuario ${user} ha realizado un push de ${number} commit(s) al repositorio ${repo}.`
  },
  {
    name: 'ReleaseEvent',
    description: (number, repo, user) => `El usuario ${user} ha publicado ${number} versión(es) del repositorio ${repo}.`
  },
  {
    name: 'SponsorshipEvent',
    description: (number, repo, user) => `El usuario ${user} ha iniciado, actualizado o cancelado ${number} patrocinio(s) en GitHub Sponsors para el repositorio ${repo}.`
  },
  {
    name: 'WatchEvent',
    description: (number, repo, user) => `El usuario ${user} ha comenzado a seguir al siguiente ${repo}`
  },
  {
    name: 'CommitCommentEvent',
    description: (number, repo, user) => `El usuario ${user} ha publicado ${number} comentario(s) en un commit específico en el repositorio ${repo}.`
  }
]
