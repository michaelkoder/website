import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { 
  }
  modalContent="empty Modal";

  updateModalContent(){
    this.modalContent = 'messageZZZ';
  }
}
