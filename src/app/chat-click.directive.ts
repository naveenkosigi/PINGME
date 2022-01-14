import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChatClick]'
})
export class ChatClickDirective {

  @HostListener('click') onClick(){
    this.toggleClass();
  }

  constructor(private elementRef:ElementRef) { 
  }

  private toggleClass(){
    (this.elementRef.nativeElement as HTMLElement).classList.add('selected');
  }

}
