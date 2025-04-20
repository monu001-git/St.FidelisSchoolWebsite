import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class SweetAlertServiceService {

  constructor() { }

  // Basic alert
  showAlert(message: string): void {
    Swal.fire({
      icon: 'info',
      title: 'Alert',
      text: message
    });
  }

  // Success alert
  showSuccessAlert(message: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: message
    });
  }

  // Error alert
  showErrorAlert(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    });
  }

  // Confirmation alert
  showConfirmationAlert(message: string): Promise<any> {
    return Swal.fire({
      icon: 'question',
      title: 'Are you sure?',
      text: message,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    });
  }

  // Customizable alert
  showCustomAlert(title: string, text: string, icon: any, confirmButtonText: string): Promise<any> {
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: confirmButtonText
    });
  }
}
