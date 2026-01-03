import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBook,
  cilBriefcase,
  cilCart,
  cilCreditCard,
  cilGroup,
  cilHome,
  cilLibrary,
  cilPeople,
  cilTags,
  cilTruck,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { all } from 'axios'

const _nav = [
  {
    component: CNavItem,
    name: 'Tableau de bord',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
    allowedRoles: ['admin', 'user','gestionnaire_etudiant'],
  },
  {
    component: CNavItem,
    name: 'Emprunt',
    to: '/emprunt',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
    allowedRoles: ['admin', 'user','gestionnaire_etudiant'],
  },
  {
    component: CNavItem,
    name: 'Livre',
    to:'/livre',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    allowedRoles: ['admin', 'user','gestionnaire_etudiant'],
  },
  {
    component: CNavTitle,
    name: 'Administration',
  },
  {
    component: CNavItem,
    name: 'Utilisateurs',
    to: '/admin/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    allowedRoles: ['admin'],
  },

  {
    component: CNavItem,
    name: 'Rôles et Permissions',
    to: '/admin/roles_perms',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
    allowedRoles: ['admin'],
  },
]

export default _nav
