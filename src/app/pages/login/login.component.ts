import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginUser(this.email, this.password).then((res) => {
      this.router.navigate(['/adminUser']);
    }).catch((err) => {
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

  onNewUser() {
    this.router.navigate(['/register']);
  }

}
