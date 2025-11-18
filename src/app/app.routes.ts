import { Routes } from '@angular/router';

export const routes: Routes = [
      {
    path:'home',
    loadComponent:()=>import('./home/home').then(m=>m.Home)
  },
  {
    path:'about',
    loadComponent:()=>import('./about/about').then(m=>m.About)
  },
  {
    path:'lessons',
    loadComponent:()=>import('./lessons/lessons').then(m=>m.Lessons)
  },
  { 
    path:'lessons/text-interpolation',
    loadComponent:()=>import('./lessons/text-interpolation/text-interpolation').then(m=>m.TextInterpolation)
  },
  { 
    path:'lessons/property-binding',
    loadComponent:()=>import('./lessons/property-binding/property-binding').then(m=>m.PropertyBinding)
  },
  { 
    path:'lessons/event-binding',
    loadComponent:()=>import('./lessons/event-binding/event-binding').then(m=>m.EventBinding)
  },
  {
    path:'exercices',
    loadComponent:()=>import('./exercices/exercices').then(m=>m.Exercices)
  },
  { 
    path:'exercices/exo-property-binding',
    loadComponent:()=>import('./exercices/exo-property-binding/exo-property-binding').then(m=>m.ExoPropertyBinding)
  },
  { 
    path:'exercices/exo-event-binding',
    loadComponent:()=>import('./exercices/exo-event-binding/exo-event-binding').then(m=>m.ExoEventBinding)
  },
  { 
    path:'exercices/exo-tp-binding',
    loadComponent:()=>import('./exercices/exo-tp-binding/exo-tp-binding').then(m=>m.ExoTpBinding)
  },
    //! ---------- Le système page Not Found ---------------------------------------------------------------------
  // Dans Angular il faut placer à la fin le path:'**'
  // ! check la doc si ya meilleure manière de faire ou plus simple ? aller explorer analog ?
  {
    path:'**',
    loadComponent:()=>import('./shared/not-found/not-found').then(m=>m.NotFound)
  }
]
