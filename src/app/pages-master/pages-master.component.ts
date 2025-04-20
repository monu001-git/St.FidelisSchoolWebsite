import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../partials/header/header.component';
import { FooterComponent } from '../partials/footer/footer.component';
import { FouriconComponent } from '../home/home-section/fouricon/fouricon.component';
import { AdmissionComponent } from '../home/home-section/admission/admission.component';

@Component({
  selector: 'app-pages-master',
  standalone: true,
  imports: [RouterModule,HeaderComponent,FooterComponent,FouriconComponent,AdmissionComponent],
  templateUrl: './pages-master.component.html',
  styleUrl: './pages-master.component.css'
})
export class PagesMasterComponent {

}
