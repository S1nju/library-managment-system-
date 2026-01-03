
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Base
const Emprunt = React.lazy(() => import('./views/Emprunt/Emprunt/Emprunt'))

// Icons
const Livre = React.lazy(() => import('./views/Livre/Livre/Livre'))
const Users = React.lazy(() => import('./views/admin/users/Users'))
const roles_perms = React.lazy(() => import('./views/admin/roles_perms/Roles_perms'))
const routes = [
  { path: '/', exact: true, name: 'Home' , allowedRoles: ['admin', 'user','gestionnaire_etudiant'],},
  { path: '/dashboard', name: 'Dashboard', element: Dashboard , allowedRoles: ['admin', 'user','gestionnaire_etudiant'],},
  { path: '/emprunt', name: 'Emprunt', element: Emprunt , allowedRoles: ['admin', 'user','gestionnaire_etudiant'],},
  { path: '/livre', exact: true, name: 'Livre', element: Livre , allowedRoles: ['admin', 'user','gestionnaire_etudiant']},
  { path: '/admin/users', name: 'Utilisateurs', element: Users , allowedRoles: ['admin']},
  { path: '/admin/roles_perms', name: 'Rôles et Permissions', element: roles_perms , allowedRoles: ['admin']},
]

export default routes
