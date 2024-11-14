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
      { image: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg', tooltip: 'JavaScript', width: '35', height: '35' },
      { image: 'https://cdn.worldvectorlogo.com/logos/spring-3.svg', tooltip: 'Spring', width: '35', height: '35' },
      { image: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg', tooltip: 'Angular', width: '35', height: '35' },
      { image: 'https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg', tooltip: 'MySQL', width: '35', height: '35' },
      { image: 'https://cdn.worldvectorlogo.com/logos/html-1.svg', tooltip: 'HTML', width: '35', height: '35' },
      { image: 'https://cdn.worldvectorlogo.com/logos/css-3.svg', tooltip: 'CSS', width: '35', height: '35' },
      { image: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg', tooltip: 'Bootstrap', width: '45', height: '45' },
      { image: 'https://cdn.worldvectorlogo.com/logos/typescript.svg', tooltip: 'TypeScript', width: '35', height: '35' },
      { image: 'https://cdn.worldvectorlogo.com/logos/figma-icon.svg', tooltip: 'Figma', width: '35', height: '35' },
      { image: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg', tooltip: 'Adobe Photoshop', width: '35', height: '35' },
      { image: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg', tooltip: 'Visual Studio Code', width: '35', height: '35' },
      { image: 'https://cdn.worldvectorlogo.com/logos/intellij-idea-1.svg', tooltip: 'IntelliJ IDEA', width: '35', height: '35' },
      { image: 'https://cdn.worldvectorlogo.com/logos/eclipse-11.svg', tooltip: 'Eclipse', width: '35', height: '35' },
      { image: 'https://cdn.worldvectorlogo.com/logos/postman.svg', tooltip: 'Postman', width: '50', height: '50' },
      { image: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg', tooltip: 'Jenkins', width: '55', height: '55' },
      { image: 'https://cdn.worldvectorlogo.com/logos/sonarqube.svg', tooltip: 'SonarQube', width: '75', height: '75' },
      { image: 'https://cdn.worldvectorlogo.com/logos/docker.svg', tooltip: 'Docker', width: '45', height: '45' },
      { image: 'https://cdn.worldvectorlogo.com/logos/trello.svg', tooltip: 'Trello', width: '35', height: '35' },
    ];


    const settings = {
      entries: entries,
      width: 480,
      height: 480,
      radius: '58%',
      radiusMin: 75,
      bgColor: 'transparent',
      opacityOver: 1.00,
      opacityOut: 0.05,
      opacitySpeed: 6,
      speed: 0.6,
      fontColor: '#000000',
      fontToUpperCase: true,
      tooltipFontFamily: 'Outfit',
      tooltipFontSize: '11',
      tooltipFontColor: '#91c96e',
    };


      $('#holder').svg3DTagCloud(settings);

  }
}
