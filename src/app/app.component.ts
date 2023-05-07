import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){}
  formBuilder!: FormBuilder;
  title = 'angu-pro';
  formData1! : FormData;
  addFilenput = ['1'];
  temp! : any;
  addFileInput(){
    this.addFilenput.push((Number(this.addFilenput[-1]) + 1).toString());
  }
  removeFileInput(){
    this.addFilenput.pop();
  }
  sub($event: any){
    
    this.temp = $event;
    let ff = PointerEvent;
    ff = $event;
    this.temp = ff;
  }

  onFileSelect(files: FileList) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files[]', files[i], files[i].name);
    }
    // Now you can send the formData to your API or server using an HTTP request
    console.log(formData)
    this.formData1 = formData;
  }
  
}
