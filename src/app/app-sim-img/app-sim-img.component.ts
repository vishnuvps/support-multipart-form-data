import { Component, OnInit } from '@angular/core';
import { FIleSchema } from '../app-models';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-app-sim-img',
  templateUrl: './app-sim-img.component.html',
  styleUrls: ['./app-sim-img.component.scss']
})
export class AppSimImgComponent implements OnInit {
// newFile? : FIleSchema;
//   fileName: any;
//   inputfile!: File;
//   constructor() { }

//   ngOnInit(): void {
//     this.newFile = undefined;
//   }
//   sub($event : any){
//     //this.newFile = $event.name;
//    this.fileName = JSON.stringify($event);// this.newFile?.sourceFile?.size ?? "empty";
//   } 
   form!: FormGroup;  
   showEvent? : File | null;
   res? : string;
   http!: HttpClient;
   headers2 = new  HttpHeaders();  
   apiToken =
  'h2yMCGyvkuFk1yVedt6bl9ukSFP88jD6BkEHtJQatY2midcZ7MLJp3um+m9r/lYHYEz++5U6R9JSOh4L4GAuopf4DW7oAzESKhcEShhQ983JKmXg7uWghzNuW+p4wfvVqsMcrr5RkmMHu3CiZDo9PQ==';
   url = "https://apihub.document360.net/v2/Drive/Drive?DriveFolderId=fc73fa23-0c36-490b-84b4-565574dd6377&BlobType=2&UserId=f11efc6f-e968-4e95-82eb-85ad61559de8";
   response2!: Observable<Object>;
     constructor(public fb: FormBuilder) {}   
  ngOnInit() {  
    this.headers2.append('api_token',this.apiToken );
      this.form = this.fb.group({   
        name: [''],     
        photo: [null],       
        guide: [null]
     })
   }
uploadFile(event: Event, fileType: string) {  
   this.showEvent = [event.target as HTMLInputElement | null][0]?.files?.item(0)  ;
 }   
submitForm(event: Event) {   
  const formData : any = new FormData();
 
  formData.append('files', this.showEvent, this.showEvent?.name);
  this.res = this.showEvent?.name;
  const apiToken =
  'h2yMCGyvkuFk1yVedt6bl9ukSFP88jD6BkEHtJQatY2midcZ7MLJp3um+m9r/lYHYEz++5U6R9JSOh4L4GAuopf4DW7oAzESKhcEShhQ983JKmXg7uWghzNuW+p4wfvVqsMcrr5RkmMHu3CiZDo9PQ==';
  const headers = new  Headers();  
  headers.append('api_token', apiToken);
const options: RequestInit = {
  method: 'POST',
  headers: headers,
  body: formData,
};

const response =  fetch(
  'https://apihub.document360.net/v2/Drive/Drive?DriveFolderId=fc73fa23-0c36-490b-84b4-565574dd6377&BlobType=2&UserId=f11efc6f-e968-4e95-82eb-85ad61559de8',
  options
);
console.log(response);

//  this.response2 = this.http.post(this.url,formData,{headers:this.headers2});
// console.log(this.response2);

// Object.keys(this.form.controls).forEach(formControlName => {        
//    formData.append(formControlName,  this.form.get(formControlName)?.value);    
//  });      


// this.http.post('http://localhost:4200/api/trip',formData)
// .subscribe(          
//    (response) =>console.log(response),   
//    (error) =>console.log(error)  
//  )}  
  
// private updateFile(event: Event, formControlName: string){    
// const file = (event.target as HTMLInputElement).files[0];      
//                 this.form.controls[formControlName].patchValue([file]);      
//                 this.form.get(formControlName).updateValueAndValidity()  
//  }
  
}
}
