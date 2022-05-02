import { Component, Injectable, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageService } from '../services/message.service';

@Injectable()
class MyService {
}
@Component({
  selector: 'app-block-ui',
  templateUrl: './block-ui.component.html',
  styleUrls: ['./block-ui.component.css']
})
export class BlockUIComponent implements OnInit {
  message:string = 'Loading...';
  @BlockUI() blockUI: NgBlockUI;

  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
    this.messageService.GetMessage().subscribe(message=>{
      console.log(message);
      
    });
  }
  
  StartBlock(message?:string):void{
    this.blockUI.start(message ?? this.message);
  }
  StopBlock(){
    this.blockUI.stop();
  }
}


