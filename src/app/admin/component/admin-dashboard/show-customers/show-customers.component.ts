import { Component, OnInit } from '@angular/core';
import { ShowCustomersService } from 'src/app/admin/service/show-customers.service';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {
  dataSource: any;
  displayedColumns = ['fName', 'lName'];
  constructor(private _showCustomersService: ShowCustomersService) { }

  ngOnInit() {
    this._showCustomersService.showAllCustomers()
    .subscribe(
      (data) => {
        this.dataSource = data
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
