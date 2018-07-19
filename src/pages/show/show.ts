import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { KidServicesProvider } from '../../providers/kid-services/kid-services';
import { KidsConfig } from '../../model/kidsDB';
import { AngularFireDatabase, AngularFireObject, } from 'angularfire2/database';
import { AdminPage } from '../admin/admin';
import { SingleShowPage } from '../single-show/single-show';


@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {
  Password: string=''
  Email : string=''

  kidList : AngularFireObject<any>
  myKid : KidsConfig = {
    FirstName : '',
    LastName : '',
    Phone : '',
    Address : '',
    Stage : '',
    Password: '',
    Email : ''
  };

  itemArray =[];
  myObject = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public alertCtrl: AlertController,
    public edit: KidServicesProvider, db: AngularFireDatabase) {

      this.kidList = db.object("kidsdb");
      this.kidList.snapshotChanges().subscribe(fun => {
        if (fun.payload.val() == null || fun.payload.val() == undefined){
          console.log("no data")
        }
        else{
          this.itemArray.push(fun.payload.val())
          console.log(this.itemArray)
          this.myObject = Object.entries(this.itemArray[0])
          console.log(this.myObject)

        }
      });
  }

  goBack(){
  this.navCtrl.push(AdminPage)

  console.log('goBackIsClicked')

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
  }

 show(FirstName, LastName, Phone, Address, Email,Password){
   this.navCtrl.push(SingleShowPage,{
    FirstName : FirstName,
    LastName : LastName,
    Phone: Phone,
    Address: Address,
    Email : Email,
    Password : Password
   })
}


  update(editKid){
    this.edit.updatekid(editKid)
    console.log("updated")
    this.navCtrl.setRoot(AdminPage)
  }

  Delete(kid){
    this.edit.deletekid(kid)
    console.log("Deleted")
    this.navCtrl.setRoot(AdminPage)
  }

  showPrompt(key, FirstName, LastName, Phone, Address, Email,Password) {
    let prompt = this.alertCtrl.create({
      title: 'تعديل',
      message: "يمكن تعديل بيانات الطالب",
      inputs: [
        {
          name: 'FirstName',
          placeholder:'الاسم الاول',
          value: FirstName
        },
        {
          name: 'LastName',
          placeholder: 'الاسم الثاني',
          value: LastName
        },
        {
          name: 'Phone',
          placeholder: 'الهاتف',
          value: Phone
        },
        {
          name: 'Address',
          placeholder: ' العنوان',
          value: Address
        },
        {
          name: 'Email',
          placeholder: 'البريد اللكتروني ',
          value: Email
        },
       {
         name: 'Password',
         placeholder: ' كلمة المرور',
         value: Password
      },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.myKid.FirstName = data.FirstName;
            this.myKid.LastName = data.LastName;
            this.myKid.Phone = data.Phone;
            this.myKid.Address = data.Address;
            this.myKid.Password = data.Password;
            this.myKid.key = key;
            console.log(this.myKid)
            this.update(this.myKid)
          }
        }
      ]
    });
    prompt.present();
  }

}
