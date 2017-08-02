import Dashboard from './Dashboard'
import * as componentsProjects from './projects/components'
import * as componentsPhone from './phone/components'
import * as componentsCalendar from './calendar/components'

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard',
    children: [
      {
        path: '/dashboard/projects',
        component: componentsProjects.Projects,
        name: 'Projects'
      },
      {
        path: '/dashboard/phone',
        component: componentsPhone.Phone,
        name: 'Phone'
      },
      {
        path: '/dashboard/calendar',
        component: componentsCalendar.Calendar,
        name: 'Calendar'
      }
    ]
  }
]
