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
    const elements:NodeList=document.querySelectorAll('div.chat-container.selected');
    elements.forEach((element) => {
      (element as HTMLElement).classList.remove("selected");
    });
    (this.elementRef.nativeElement as HTMLElement).classList.add('selected');
  }

}
