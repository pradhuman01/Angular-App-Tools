import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const approuting: Routes = [
    { path:'', redirectTo: '/recipe', pathMatch: 'full' },
    { path:'recipe', component: RecipesComponent, children: [
        { path:'', component:  RecipeStartComponent},
        { path:'new', component:  RecipeEditComponent},
        { path:':id', component: RecipesDetailComponent },
        { path:':id/edit', component:  RecipeEditComponent},
    ]},
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({

imports:[RouterModule.forRoot(approuting)],
exports:[RouterModule]

})


export class Routing{

}