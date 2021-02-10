import { API_URLS } from './../../../assets/constants/API_URLS';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiDataService } from 'src/app/shared/utils/api-data.service';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { UtilsService } from 'src/app/shared/utils/utils.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUSComponent implements OnInit, OnDestroy {
  Contact_Subscrription: Subscription;
  ContactUS: any;
  form: FormGroup;
  data: any;
  constructor(
    private apiDataService: ApiDataService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    public override: OverrideService,
    private fb: FormBuilder,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  createForm() {
    this.form = this.fb.group({
      name: this.fb.control(null, Validators.required),
      email: this.fb.control(null, Validators.required),
      phone: this.fb.control(null, Validators.required),
      company: this.fb.control(null, Validators.required),
      jobTitle: this.fb.control(null, Validators.required),
      country: this.fb.control(null, Validators.required),
      industry: this.fb.control(null, Validators.required),
    });
  }
  getData() {
    this.Contact_Subscrription = this.apiDataService
      .register(API_URLS.ContactUs.post, this.override.AuthHeaders)
      .subscribe((res: any) => {});
    this.createForm();
  }
  onSubmit() {
    this.data = this.form.value;
    this.apiDataService
      .register(API_URLS.ContactUs.post, this.data)
      .subscribe((res: any) => {
        if (res.status == 201) {
          this.toast.success('We recived Your Message ');
          this.router.navigate(['/']);
        }
      });
  }
  ngOnDestroy(): void {
    this.Contact_Subscrription
      ? this.Contact_Subscrription.unsubscribe()
      : null;
  }
}
