
/*****************************************************
** AUTOMATICALLY CREATED HTML LOADING CONFIGURATION **
*****************************************************/

// Please, do not edit this file. It is automatically generated by 'build.mutua.ts' task on every build with information present in 'mutua.instance-project.config.ts' and 'mutua.available.modules.and.components.config.ts'

// Included by 'web.modules.ts' to load the needed components and modules and make them available to the application

// components
/////////////

import { NG2AppComponent } from '../../shared/modules/m-ng2-admin/ng2app.component';
import { MPHomeComponent } from '../../components/pages/mp-home/mp-home.component';
import { MPCadastraITComponent } from '../../components/pages/mp-cadastra-it/mp-cadastra-it.component';
import { MPListaITsComponent } from '../../components/pages/mp-lista-its/mp-lista-its.component';
import { MPLoginComponent } from '../../components/pages/mp-login/mp-login.component';

export const MutuaExportedComponents: any[] = [NG2AppComponent,MPHomeComponent,MPCadastraITComponent,MPListaITsComponent,MPLoginComponent];

// routes
/////////

import { MPHomeRoutes } from '../../components/pages/mp-home/mp-home.routes';
import { MPCadastraITRoutes } from '../../components/pages/mp-cadastra-it/mp-cadastra-it.routes';
import { MPListaITsRoutes } from '../../components/pages/mp-lista-its/mp-lista-its.routes';
import { MPLoginRoutes } from '../../components/pages/mp-login/mp-login.routes';

export const MutuaExportedRoutes: any[] = [...MPHomeRoutes,...MPCadastraITRoutes,...MPListaITsRoutes,...MPLoginRoutes];

// modules
//////////

// MNg2AdminModule
import { MNg2AdminModule } from '../modules/m-ng2-admin/m-ng2-admin.module';
// BrowserAnimationsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// NgbModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// PRIMENG_MODULES
import { AccordionModule,AutoCompleteModule,BlockUIModule,BreadcrumbModule,ButtonModule,CalendarModule,CarouselModule,ChartModule,CheckboxModule,CodeHighlighterModule,ConfirmDialogModule,ContextMenuModule,DataGridModule,DataListModule,DataScrollerModule,DataTableModule,DialogModule,DragDropModule,DropdownModule,EditorModule,FieldsetModule,FileUploadModule,GalleriaModule,GMapModule,GrowlModule,InplaceModule,InputMaskModule,InputSwitchModule,InputTextareaModule,InputTextModule,LightboxModule,ListboxModule,MegaMenuModule,MenubarModule,MenuModule,MessagesModule,MultiSelectModule,OrderListModule,OverlayPanelModule,PaginatorModule,PanelMenuModule,PanelModule,PasswordModule,PickListModule,ProgressBarModule,RadioButtonModule,RatingModule,ScheduleModule,SelectButtonModule,SharedModule,SlideMenuModule,SliderModule,SpinnerModule,SplitButtonModule,StepsModule,TabMenuModule,TabViewModule,TerminalModule,TieredMenuModule,ToggleButtonModule,ToolbarModule,TooltipModule,TreeModule,TreeTableModule,TriStateCheckboxModule } from 'primeng/primeng';
let PRIMENG_MODULES: any[] = [AccordionModule,AutoCompleteModule,BlockUIModule,BreadcrumbModule,ButtonModule,CalendarModule,CarouselModule,ChartModule,CheckboxModule,CodeHighlighterModule,ConfirmDialogModule,ContextMenuModule,DataGridModule,DataListModule,DataScrollerModule,DataTableModule,DialogModule,DragDropModule,DropdownModule,EditorModule,FieldsetModule,FileUploadModule,GalleriaModule,GMapModule,GrowlModule,InplaceModule,InputMaskModule,InputSwitchModule,InputTextareaModule,InputTextModule,LightboxModule,ListboxModule,MegaMenuModule,MenubarModule,MenuModule,MessagesModule,MultiSelectModule,OrderListModule,OverlayPanelModule,PaginatorModule,PanelMenuModule,PanelModule,PasswordModule,PickListModule,ProgressBarModule,RadioButtonModule,RatingModule,ScheduleModule,SelectButtonModule,SharedModule,SlideMenuModule,SliderModule,SpinnerModule,SplitButtonModule,StepsModule,TabMenuModule,TabViewModule,TerminalModule,TieredMenuModule,ToggleButtonModule,ToolbarModule,TooltipModule,TreeModule,TreeTableModule,TriStateCheckboxModule];
// MPRJModule
import { MPRJModule } from '../modules/m-mprj/m-mprj.module';

export const MutuaExportedModules: any[] = [MNg2AdminModule.forRoot(),BrowserAnimationsModule,NgbModule.forRoot(),...PRIMENG_MODULES,MPRJModule.forRoot()];

export const MutuaAppComponent: any = NG2AppComponent;
