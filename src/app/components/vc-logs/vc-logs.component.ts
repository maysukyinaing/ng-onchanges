import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnChanges{
  @Input()
  vName:any;

  logs:string[] = []

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue = changes['vName'].currentValue;
    if (changes['vName'].isFirstChange()){
      this.logs.push(`initial version is ${currentValue.trim()}`)
    }
    else {
      this.logs.push(`version changed to ${currentValue.trim()}`)
    }
  }
  ngOnInit(): void {

  }

}
