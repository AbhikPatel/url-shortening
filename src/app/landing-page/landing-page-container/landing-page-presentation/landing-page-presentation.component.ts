import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LandingPagePresenterService } from '../landing-page-presenter/landing-page-presenter.service';

@Component({
  selector: 'app-landing-page-presentation',
  templateUrl: './landing-page-presentation.component.html',
  viewProviders: [LandingPagePresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPagePresentationComponent implements OnInit {

  @Output() public emitFormData: EventEmitter<any>;

  @Input() public set urlData(v: any) {
    if (v) {
      this._urlData = v;
      this.getUrl(v)
    }
  }

  public get urlData(): any {
    return this._urlData;
  }


  private _urlData: any;
  public linkGroup: FormGroup;
  public currentId: number;
  public httpText: string;
  public searchedLink: any[];

  constructor(
    private _service: LandingPagePresenterService,
    private _clipBoard: Clipboard
  ) {
    this.linkGroup = this._service.getGroups();
    this.emitFormData = new EventEmitter();
    this.currentId = 0;
    this.httpText = 'https://';
    let storage: any = localStorage.getItem('links');
    storage === null ? this.searchedLink = [] : this.searchedLink = JSON.parse(storage)
  }

  public cardData: any[] = [
    {
      id: 1,
      title: 'Brand Recognition',
      details: `Boost your brand recongnition with each click. Generic link don't mean a thing. 
      Branded link helps instill confidence in your content`,
      icon: '../../../../assets/images/icon-brand-recognition.svg'
    },
    {
      id: 2,
      title: 'Detailed Records',
      details: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions`,
      icon: '../../../../assets/images/icon-detailed-records.svg'
    },
    {
      id: 3,
      title: 'Fully Customizable',
      details: `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement`,
      icon: '../../../../assets/images/icon-fully-customizable.svg'
    }
  ]

  ngOnInit(): void {
    this._service.FormData$.subscribe((data) => this.emitFormData.emit(data));
  }

  public getLocalStorageData() {
    let storage: any = localStorage.getItem('links')
    this.searchedLink = JSON.parse(storage)
  }

  public onSubmit() {
    if (this.linkGroup.valid)
      this._service.getData(this.linkGroup.value.shorten)
  }

  public get getControls() {
    return this.linkGroup['controls']
  }

  public getUrl(link: any) {
    let finalData: any = {
      id: this.searchedLink?.length + 1,
      link: this.linkGroup.value.shorten,
      shorten: link.result.short_link
    }

    if (!finalData.link.includes(this.httpText))
      finalData.link = this.httpText.concat(finalData.link)

    finalData.shorten = this.httpText.concat(finalData.shorten)

    this.linkGroup.reset();
    this.searchedLink?.push(finalData)
    localStorage.setItem('links', JSON.stringify(this.searchedLink))
  }

  public onCopy(link: any, id: number) {
    this._clipBoard.copy(link);
    this.currentId = id
  }

  public onClear() {
    localStorage.clear();
    this.getLocalStorageData();
    this.searchedLink = [];
  }

}
