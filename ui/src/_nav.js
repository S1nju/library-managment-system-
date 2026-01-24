import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBook,
  cilBriefcase,
  cilCart,
  cilClock,
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
    name: 'Emprunt',
    to: '/emprunt',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
    allowedRoles: ['admin', 'user','responsable'],
  },
  {
    component: CNavItem,
    name: 'Livre',
    to:'/livre',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    allowedRoles: ['admin','gestionnaire_livres','reponsable'],
  },
    {
    component: CNavItem,
    name: 'Gestion des Etudiants',
    to: '/etudiants',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    allowedRoles: ['gestionnaire_etudiant', 'admin'],
  },
    {
    component: CNavItem,
    name: 'Gestion des Retards',
    to: '/retards',
    icon: <CIcon icon={cilClock} customClassName="nav-icon" />,
    allowedRoles: ['responsable', 'admin'],
  },
  {
    component: CNavTitle,
    name: 'Administration',
    allowedRoles:['admin']
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
