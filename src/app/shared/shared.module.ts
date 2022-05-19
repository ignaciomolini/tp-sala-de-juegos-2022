import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    ChatComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    ChatComponent
  ]
})
export class SharedModule { }
