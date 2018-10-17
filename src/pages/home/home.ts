import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;
  // encodText: string='';
  // encodedData: any={};
  scannedData: any={};

  str: string;

  constructor(public navCtrl: NavController, public scanner: BarcodeScanner) {

  }

  scan() {
    this.options= {
      prompt: 'Scan your barcode'
    };
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
    }, (err) => {
      console.log('Error :', err);
    })
  }

  openURL(scannedURL: string) {
    if(this.isUrl(scannedURL)){
    window.open(scannedURL,'_system', 'location=yes');
    } else {
      this.str = scannedURL.replace(/\s+/g, '+').toLowerCase();
      window.open('http://www.google.com/search?q=' + this.str,'_system', 'location=yes');
      //alert(scannedURL);
    }
    /*
    scannedURL = '';
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    */
  }

  isUrl(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
 }
  /*
  isUrl(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
    if (s) { alert("is correct") }else{ alert("not correct");}
 }
*/
  /*
  encode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => {
      this.encodedData = data;
    }, (err) => {
      console.log('Error :', err);
    })
  }
*/

}
