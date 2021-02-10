import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenericComponent } from './generic.component';
import { TableComponent } from "./genericEntity/table/table.component";
import { GenericFormComponent } from './genericEntity/form/generic-form/generic-form.component';
import { ViewComponent } from './genericEntity/view/view.component';

const routes: Routes = [{
    path: '', component: GenericComponent,
    children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component: TableComponent },
        { path: 'add', component: GenericFormComponent },
        { path: 'edit/:entityId', component: GenericFormComponent },
        { path: 'view/:entityId', component: ViewComponent }
    ]
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GenericRoutingModule { }
