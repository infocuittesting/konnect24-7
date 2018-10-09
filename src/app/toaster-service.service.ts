import { Injectable } from '@angular/core';
declare var toastr:any

@Injectable()
export class ToasterServiceService {

  constructor() {
    this.setting()
   }

  success (title:string,message?:string){
    toastr.success(title,message)
    console.log("Workinggggggggg",this.success)
  }
  warning (title:string,message?:string){
    toastr.warning(message,title)
  }
setting(){

  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-full-width",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "3000",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
}
}
