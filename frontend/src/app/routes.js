import { routes as authenticate } from './authenticate'
import { routes as dashboard } from './dashboard'

export default [ ...authenticate, ...dashboard ]
