import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   splash= true;
  tabBorElement:any;

  Password : any;

  constructor(public navCtrl: NavController, public alert: AlertController) {
this.tabBorElement = document.querySelector('.tabbar');
  }
ionViewDidLoad(){
  this.tabBorElement.style.displaym='none';
  setTimeout(() =>{
    this.splash= false;
    this.tabBorElement.style.displaym='flex';
  },9999);
  admin() {
    const prompt = this.alert.create({
      title: 'تسجيل الدخول',
      message: "ادخل كلمة السر رجاءا",
      inputs: [
        {
          name: 'Password',
          placeholder: 'Password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.Password= data.Password;
            if (this.Password == 1234) {
              this.navCtrl.setRoot(AdminPage)
            }
            else{
              this.navCtrl.setRoot(HomePage)
            }
          }
        }
      ]
    });
    prompt.present();
  }
  
  family(){
    this.navCtrl.push(LoginPage)
  }

}
