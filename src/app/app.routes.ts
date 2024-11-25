import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { RestContraComponent } from './rest-contra/rest-contra.component'; // Importa el componente

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then( m => m.MainPage)
  },
  {
    path: 'comunidad',
    loadComponent: () => import('./comunidad/comunidad.page').then( m => m.ComunidadPage)
  },
  {
    path: 'planes',
    loadComponent: () => import('./planes/planes.page').then( m => m.PlanesPage)
  },
  {
    path: 'curso1',
    loadComponent: () => import('./curso1/curso1.page').then( m => m.Curso1Page)
  },
  {
    path: 'curso2',
    loadComponent: () => import('./curso2/curso2.page').then( m => m.Curso2Page)
  },
  {
    path: 'curso3',
    loadComponent: () => import('./curso3/curso3.page').then( m => m.Curso3Page)
  },
  {
    path: 'curso4',
    loadComponent: () => import('./curso4/curso4.page').then( m => m.Curso4Page)
  },
  {
    path: 'curso5',
    loadComponent: () => import('./curso5/curso5.page').then( m => m.Curso5Page)
  },
  {
    path: 'curso6',
    loadComponent: () => import('./curso6/curso6.page').then( m => m.Curso6Page)
  },
  {
    path: 'confirma-plan',
    loadComponent: () => import('./confirma-plan/confirma-plan.page').then( m => m.ConfirmaPlanPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'registrarse',
    loadComponent: () => import('./registrarse/registrarse.page').then( m => m.RegistrarsePage)
  },
  {
    path: 'rest-contra', component: RestContraComponent
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'carrito',
    loadComponent: () => import('./carrito/carrito.page').then( m => m.CarritoPage)
  },
  {
    path: 'pago',
    loadComponent: () => import('./pago/pago.page').then( m => m.PagoPage)
  },
  {
    path: 'rutas',
    loadComponent: () => import('./rutas/rutas.page').then( m => m.RutasPage)
  },
  {
    path: 'cursos',
    loadComponent: () => import('./cursos/cursos.page').then( m => m.CursosPage)
  },
  {
    path: 'add-curso',
    loadComponent: () => import('./add-curso/add-curso.page').then( m => m.AddCursoPage)
  },
  {
    path: 'editperfil',
    loadComponent: () => import('./editperfil/editperfil.page').then( m => m.EditperfilPage)
  }
];

  @NgModule({
    imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
