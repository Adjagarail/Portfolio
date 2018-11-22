import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides = [
    {
      title: "Bienvenue sur mon Portfolio",
      description: "Ce portfolio conçu sous <b>Ionic</b> a pour but de vous faire la presentation de mes compétences en développement web et mobile.",
      image: "../../assets/imgs/lion.png",
    },
    {
      title: "Qui suis-je?",
      description: "<b>Yaya Adjagarail Sadio</b> Développeur d'application web et mobile",
      image: "../../assets/imgs/who.png",
    },
    {
      title: "Ma Formation",
      description: "Ma formation en tant que developpeur d'application web et mobile m'a permis d'acquerir des comptetences dans des domaines divers et variés",
      image: "../../assets/imgs/form.png",
    }
  ];
}
