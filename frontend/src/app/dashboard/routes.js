import Dashboard from './Dashboard'
import * as componentsProjects from './projects/components'
import * as componentsPhone from './phone/components'

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard',
    children: [
      {
        path: '/projects',
        component: componentsProjects.Projects,
        name: 'Projects'
      },
      {
        path: '/phone',
        component: componentsPhone.Phone,
        name: 'Phone'
      }
    ]
  }
]
