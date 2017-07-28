import { routes as authenticate } from './authenticate'
import { routes as projects } from './projects'

export default [ ...authenticate, ...projects ]
