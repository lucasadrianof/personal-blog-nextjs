import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import {
  faCloud,
  faCode,
  faDatabase,
  faPeopleGroup,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons'

type Skill = {
  icon: IconProp
  iconColor: string
  description: string
  title: string
}

const skills: Skill[] = [
  {
    icon: faCode,
    iconColor: 'text-purple-500',
    description: 'TypeScript, JavaScript, PHP, Go, Bash',
    title: 'Languages',
  },
  {
    icon: faCloud,
    iconColor: 'text-yellow-500',
    description:
      'AWS, GitHub Actions, Serverless, CI/CD, Terrraform, Microservices',
    title: 'DevOps',
  },
  {
    icon: faSitemap,
    iconColor: 'text-blue-500',
    description:
      'System Design, Software Architecture, Design Patterns, Scaling WebApps',
    title: 'System Design',
  },
  {
    icon: faDatabase,
    iconColor: 'text-red-500',
    description: 'PostgreSQL, MySQL, Redis, ElasticSearch, MongoDB',
    title: 'Databases',
  },
  {
    icon: faCss3Alt,
    iconColor: 'text-pink-500',
    description: 'HTML5, CSS3, Tailwind, React',
    title: 'Web Development',
  },
  {
    icon: faPeopleGroup,
    iconColor: 'text-green-500',
    description:
      'Curious, Communicative, Problem solver, Critical thinker, Team Player',
    title: 'Soft Skills',
  },
]

export default skills
