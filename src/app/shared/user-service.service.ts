import { Injectable,EventEmitter } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';




const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  value: any;

  constructor(private http: HttpClient,private toastr: ToastrService,)
  {
  }

  setImageBase64(base64){
    this.value = base64;
  }

  getImageBase64(){
   return this.value;
  }


  statusUpdated = new EventEmitter<string>();

  // addStudent(student){

  //   console.log("ddddddddddddffffffffffffffff",student)
     
  // }






  addStudent(student) {

    const postData = new FormData();
    postData.append("email", student.email);
    postData.append("studentGroup", student.studentGroup);
    postData.append("password", student.password);
    postData.append("address", student.address);
    postData.append("phone", student.phone);


    postData.append("guardianPhone", student.guardianPhone);
    postData.append("enrolmentNumber", student.enrolmentNumber);
    postData.append("status", student.status);
    postData.append("image", student.image);
    console.log("postdata,",student)

    this.http
      .post<{ STATUSCODE: any }>("http://localhost:5000/api/users", postData).subscribe(res => {
      console.log('HTTP response', res);
      if (res.STATUSCODE == 200) {
       this.toastr.success("Student Added", 'Success!');
       // this.initChart();
      } else {
        this.toastr.error(res.STATUSCODE, 'Error!');
      }
     },
      err => {
       console.log('HTTP Error', err);
       if (err.error) {
        // this.toastr.error(err.error.Message, 'Error!');
       }
      },
      () => console.log('HTTP request completed.'));
   }
  }

















   


 
