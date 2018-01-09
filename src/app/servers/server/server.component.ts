import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  paramsScubscription:Subscription;

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer((Number)(this.route.snapshot.params['id']));
    this.paramsScubscription = this.route.params.subscribe(
      (params:Params)=>{
        this.server = this.serversService.getServer((Number)(params['id']));
        
      }
    )
  }

}
