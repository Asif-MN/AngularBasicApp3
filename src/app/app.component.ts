import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  title = "Select the animal";
  animalnames = ["Tiger","Lion","Elephant","Deer"];
  animalurl:string = "";
  showimage: boolean = false;
  animalList: { name: string, url: string }[] = [
    { "name": "Tiger", "url":"https://a-z-animals.com/media/animals/images/original/tiger1.jpg" },
    { "name": "Lion", "url":"https://a-z-animals.com/media/animals/images/original/lion1.jpg" },
    { "name": "Elephant", "url":"https://a-z-animals.com/media/animals/images/original/african_elephant.jpg" },
    { "name": "Deer", "url":"https://a-z-animals.com/media/animals/images/original/deer.jpg" },
  ];

  selectChange(value)
  {
    if(this.animalList.filter(p => p.name === value).length !== 0)
    {
      this.showimage = true;
      this.animalurl = this.animalList.filter(p => p.name === value)[0].url;
    }
    else
    {
      this.showimage = false;
      this.animalurl = "";
    }
  }
}
