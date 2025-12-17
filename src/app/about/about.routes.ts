import { Routes } from "@angular/router";
import { About } from "./about";
import { ShortIntroduction } from "./short-introduction/short-introduction";
import { Specialties } from "./specialties/specialties";
import { VisitUs } from "./visit-us/visit-us";
import { Form } from "./form/form";

export const aboutroutes: Routes = [
{
    path:'',
    component:About,
    children:[
        {path:'short-introduction',component:ShortIntroduction},
        {path:'specialties',component:Specialties},
        {path:'visit-us',component:VisitUs},
        {path:'form',component:Form}
    ]
}
]