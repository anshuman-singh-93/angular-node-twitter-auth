import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AlreadyAuthenticatedGuard } from './guards/already-authenticated.guard';
import { AuthenticationGuard } from './guards/authentication.guard';
import { OauthTokenGuard } from './guards/oauthToken.guard';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes:Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AlreadyAuthenticatedGuard],
    },

    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [OauthTokenGuard, AuthenticationGuard]
    },
    {path: '**', redirectTo: ''}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
