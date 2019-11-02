import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.page.html',
  styleUrls: ['./daftar.page.scss'],
})
export class DaftarPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  daftar() {
    this.router.navigateByUrl('/tabs/tabs/beranda');
  }

  login() {
    this.router.navigateByUrl('/');
  }

}
