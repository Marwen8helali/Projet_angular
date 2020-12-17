import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,ReactiveFormsModule } from '@angular/forms';

import { UserServiceService } from '../user-service.service'
import { ActivatedRoute} from  '@angular/router';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
//user:any;
userId:any;
 user1= {
  nom: '',
  prenom: '',
  cin: '',
  email:'',
  password:'',
  mobile:'',
  city:'',
  role:'',

};
user: any;



  constructor(private formBuilder: FormBuilder, private userService: UserServiceService,private route : ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId')

    });
  console.log(this.userId);
  
  if(this.userId==null)
  {
    this.user = this.formBuilder.group({
      nom: [''],
      prenom: [' '],
      cin: [' '],
      email:[' '],
      password:[' '],
      mobile:[' '],
      city:[' '],
      role:[' '],
  
  
      });
  }else{
    this.userService.readOneProduct(this.userId).subscribe(
      (res) => this.user =res 
     ); 
  }
     
       
      
     
  }

  onSubmitForm() {
    if(this.userId==null)
    {
 this.userService.createNewProduct(this.user.value).subscribe(
  (res) =>  console.log("hello")
);
 }else{
  this.userService.updateProduct(this.userId,this.user.value).subscribe(
    (res) =>  console.log("hello")
  );
 }
  }

}
