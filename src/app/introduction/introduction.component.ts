import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent implements OnInit {

  ngOnInit(): void {
    const entries = [
      { image: 'src/assets/images/java-vertical.svg',width:'30', height:'30', },
      { image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',width:'30', height:'30', },
      { image: 'path/to/spring-logo.png' },
      { image: 'path/to/angular-logo.png' },
      { image: 'path/to/mysql-logo.png' },
      { image: 'path/to/html-logo.png' },
      { image: 'path/to/css-logo.png' },
      { image: 'path/to/bootstrap-logo.png' },
      { image: 'path/to/tailwind-logo.png' },
      { image: 'path/to/uml-logo.png' },
      { image: 'path/to/figma-logo.png' },
      { image: 'path/to/photoshop-logo.png' },
      { image: 'path/to/visual-studio-logo.png' },
      { image: 'path/to/intellij-logo.png' },
      { image: 'path/to/eclipse-logo.png' },
      { image: 'path/to/postman-logo.png' },
      { image: 'path/to/jenkins-logo.png' },
      { image: 'path/to/sonarqube-logo.png' },
      { image: 'path/to/docker-logo.png' },
      { image: 'path/to/trello-logo.png' },
    ];


    const settings = {
      entries: entries,
      width: 480,
      height: 480,
      radius: '65%',
      radiusMin: 75,
      bgColor: 'transparent',
      opacityOver: 1.00,
      opacityOut: 0.1,
      opacitySpeed: 6,
      speed: 0.6,
      fontColor: '#000000',
      fontToUpperCase: true,
    };


      $('#holder').svg3DTagCloud(settings);

  }
}
