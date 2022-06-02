import { Component, Input, OnInit} from '@angular/core';
import { Mensaje } from 'src/app/interfaces/mensaje';
import { Usuario } from 'src/app/models/usuario';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  nuevoMensaje: string = '';
  mostrarChat: boolean = false;
  chats?: Mensaje[];
  @Input() usuarioLogeado: Usuario;
 
  constructor(private chatService: ChatService) {
    this.usuarioLogeado = new Usuario('', '', '', '', '');
  }
  
  ngOnInit(): void {
    this.chatService.cargarMensajes().subscribe((mensajes: Mensaje[]) => {
      this.chats = mensajes;
    });
  }

  enviarMensaje() {
  if (this.nuevoMensaje.length === 0) return;
    this.chatService.agregarMensaje(this.nuevoMensaje, this.usuarioLogeado.nombre, this.usuarioLogeado.uid);
    this.nuevoMensaje = '';
  }

}
