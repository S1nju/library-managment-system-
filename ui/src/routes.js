
import React from 'react'


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Base
const Emprunt = React.lazy(() => import('./views/Emprunt/Emprunt/Emprunt')) 
const GestionEmprunt = React.lazy(() => import('./views/Emprunt/GestionEmprunt/GestionEmprunt')) 

// Icons
const Livre = React.lazy(() => import('./views/Livre/Livre/Livre'))
const Users = React.lazy(() => import('./views/admin/users/Users'))
const roles_perms = React.lazy(() => import('./views/admin/roles_perms/Roles_perms'))
const Retard = React.lazy(() => import('./views/retard/Retard'))
const Etudiants = React.lazy(() => import('./views/etudiants/Etudiants'))
const routes = [
  { path: '/', exact: true, name: 'Home' , allowedRoles: ['admin', 'user'],},
  { path: '/emprunt', name: 'Emprunt', element: Emprunt , allowedRoles: ['admin', 'responsable'],},
  { path: '/livre', name: 'Livre', element: Livre , allowedRoles: ['admin','gestionnaire_livres']},
   { path: '/gemprunt', name: 'Gemrunt', element: GestionEmprunt , allowedRoles: ['admin','responsable']},
  { path: '/admin/users', name: 'Utilisateurs', element: Users , allowedRoles: ['admin']},
  { path: '/admin/roles_perms', name: 'Rôles et Permissions', element: roles_perms , allowedRoles: ['admin']},
  { path: '/retards', name: 'Gestion des Retards', element: Retard, allowedRoles: ['admin','responsable'] },
  { path: '/etudiants', name: 'Gestion des Etudiants', element: Etudiants, allowedRoles: ['admin','gestionnaire_etudiant'] }

]

export default routes
