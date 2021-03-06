/*the component how block the UI*/

import { Component, Injectable, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Message } from 'src/app/Models/message';
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
  message: string = 'Loading...';
  @BlockUI() blockUI: NgBlockUI;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.GetMessage().subscribe((message:Message) => {
      message.show?this.StartBlock(message.blockMessage):this.StopBlock();
    });
  }

  StartBlock(message?: string): void {
    this.blockUI.start(message ?? this.message);
  }
  StopBlock() {
    this.blockUI.stop();
  }
}


