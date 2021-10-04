import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { UserServiceService } from "../shared/user-service.service";
import { mimeType } from "./mime-type.validator";

@Component({
  selector: "app-employee-add",
  templateUrl: "./employee-add.component.html",
  styleUrls: ["./employee-add.component.css"],
})
export class EmployeeAddComponent implements OnInit {
  employeeAddForm: FormGroup;
  countryList: any;
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  namePattern = "^[a-zA-z]{2,20}$";
  userForm: any;
  imagePreview: string;
  isFormInvalid: boolean;
  constructor(
    private FormBuilder: FormBuilder,
    private studentData: UserServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.employeeAddForm = this.FormBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      studentGroup: ["", Validators.required],
      name: ["", [Validators.required]],
      password: ["", [Validators.required]],
      address: ["", [Validators.required]],
      phone: ["", [Validators.required, Validators.pattern("[6-9]\\d{9}")]],
      guardianPhone: [""],
      enrolmentNumber: [""],
      status: ["",],
      image: new FormControl(null, {
        validators: [Validators.required], asyncValidators: [mimeType]
      }),
    });


  }

  

 

  onFormSubmit(abc) {
    if (this.employeeAddForm.valid) {
      this.studentData.addStudent(
        this.employeeAddForm.value
      );
   } 
    
    else {
      this.isFormInvalid = true;
    }

   
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.employeeAddForm.patchValue({ image: file });
    this.employeeAddForm.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }


  reset() {
    this.employeeAddForm.reset();
   }
}
