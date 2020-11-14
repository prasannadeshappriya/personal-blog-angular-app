import { Component, OnInit, Sanitizer } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { CommonUtils } from "../../utils/common.utils";

@Component({
  selector: 'video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit{
  VideotList;
  videoSrc;

  //Vlideo array list
  techVideos = [];
  gameSummeryVideos;
  gameList = [];

  CARD_LOW_ELEVATION = 4;
  CARD_HIGH_ELEVATION = 16;
  cardElevation;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    CommonUtils.smoothScroll();
    this.videoSrc  = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/2u9nudpHNPk');
    this.cardElevation = this.CARD_LOW_ELEVATION;
    this.loadTechVideos();
    this.loadGameSummeryVideos();
    this.loadGameList();
  }

  playVideo(event) {
    this.videoSrc  = this.sanitizer.bypassSecurityTrustResourceUrl(event);
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  onMouseEnter() {
    this.cardElevation = this.CARD_HIGH_ELEVATION;
  }
  onMouseExit() {
    this.cardElevation = this.CARD_LOW_ELEVATION;
  }

  loadGameSummeryVideos() {
    this.gameSummeryVideos = {
      main: {
        imageUrl: './assets/videos/gamming_pc_build.png',
        videoSrc: 'https://www.youtube.com/embed/y9MfG54V7kA',
        title: 'Gamming PC Built',
        content: [
            'System Specs:',
            'CPU: Intel i7-9700K (9th Generation),' + 
                'MB: ROG STRIX Z370-H GAMING 2666Mhz DDR4,' +
                'RAM: Crucial 16GB(2x8GB) DDR4 3000MHz,' + 
                'GPU: ASUS GTX 1660Ti GDDR6 6GB ,' + 
                'SSD: Crucial 240GB BX500 (540/500),' + 
                'HDD: 1TB WD Blue 7200RPM,' + 
                'OS: Windows 10',
            'Gameplay of Game Plays, Crysis 3, Battlefield 4, GTA V, Black Flag AC4'
        ],
        user: 'admin',
        duration: '8'
      },
      previewVideoSet: [
        {
            imageUrl: './assets/videos/far_cry_5_lake_fishing.jpg',
            videoSrc: 'https://www.youtube.com/embed/B3b8CmCqu6g',
            dateOfRelease: '14 Nov',
            title: 'Farcry 5 Intro Gameplay'
        },
        {
            imageUrl: './assets/videos/nfs-payback-pc_1509702597620.webp',
            videoSrc: 'https://www.youtube.com/embed/kuWIUSZdYxs',
            dateOfRelease: '14 Nov',
            title: 'NFS Payback PC Gameplay'
        },
        {
            imageUrl: './assets/videos/Sniper.jpg',
            videoSrc: 'https://www.youtube.com/embed/MkIP_yY2yaE',
            dateOfRelease: '14 Nov',
            title: 'Sniper Ghost III Pc Gameplay'
        },
        {
            imageUrl: './assets/videos/horizon_zero_ps4.jpeg',
            videoSrc: 'https://www.youtube.com/embed/91xHJFzxURA',
            dateOfRelease: '14 Nov',
            title: 'Horizon Zero PS4 Gameplay'
        }
      ],
      statItemSetTitle: 'Top view video',
      statItemSet: [
        {
            videoSrc: 'https://www.youtube.com/embed/zzwdLrSNgJw',
            dateOfRelease: 3,
            title: 'NodeJS Hosting'
        },
        {
            videoSrc: 'https://www.youtube.com/embed/QVFb9WUMkk4',
            dateOfRelease: 3,
            title: 'Fabric Defect Ditection'
        },
        {
            videoSrc: 'https://www.youtube.com/embed/EdBsbzySZuM',
            dateOfRelease: 3,
            title: 'GTA V Gameplay'
        },
        {
            videoSrc: 'https://www.youtube.com/embed/6eVmO6bzG1U',
            dateOfRelease: 3,
            title: 'Recident Evil 7 Game'
        }
      ]
    }
  }

  loadTechVideos() {
    this.techVideos.push({
      imageUrl: './assets/videos/fyp_project.png',
      title: 'Embedded System',
      subTitle: 'Automated Fabric Defect Detection',
      description: 'A system prototype to detect defects in uniform textured fabrics with Image Processing ' + 
                    'techniques and Neural Networks.',
      videoSrc: 'https://www.youtube.com/embed/QVFb9WUMkk4'
    });
    this.techVideos.push({
      imageUrl: './assets/videos/node_js_hosting_alwaysdata.png',
      title: 'Web Hosting',
      subTitle: 'Hosting NodeJS project on Alwaysdata.net',
      description: 'This article is about creating a simple express server and host it on alwaysdata servers. ' + 
                      'Node.js allows for fast development, which increases productivity.',
      videoSrc: 'https://www.youtube.com/embed/zzwdLrSNgJw'
    });
    this.techVideos.push({
      imageUrl: './assets/videos/mcafee_extensions_tutorial.png',
      title: 'Add an exception to the virus guard',
      subTitle: 'How to add an exception to the McaFee virus guard',
      description: 'McAfee sometimes not allows us to play games, because it\'ll delete game files. ' +
                      'this tutorial will help you to solve such problems',
      videoSrc: 'https://www.youtube.com/embed/JiktpahQAbE'
    });
  }

  loadGameList() {
    this.gameList.push({
      imageUrl: './assets/videos/actual_1414504076.jpg',
      title: 'GTA V',
      subTitle: '',
      description: 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008\'s Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and arms smuggler Trevor Philips—and their efforts to commit heists while under pressure from a corrupt government agency and powerful crime figures.',
      videoSrc: 'https://www.youtube.com/embed/EdBsbzySZuM'
    });
    this.gameList.push({
      imageUrl: './assets/videos/drive_club_ps4.jpg',
      title: 'Drive Club Racing',
      subTitle: '',
      description: 'Driveclub[a] is a racing video game developed by Evolution Studios and published by Sony Computer Entertainment for PlayStation 4. It was announced during the PlayStation 4 press conference on 20 February 2013, and, after several delays, was released worldwide in October 2014.',
      videoSrc: 'https://www.youtube.com/embed/4JsayLsNqLs'
    });
    this.gameList.push({
      imageUrl: './assets/videos/ghost-recon-wildlands.jpg',
      title: 'Ghost Recon Wildlands',
      subTitle: '',
      description: 'Tom Clancy\'s Ghost Recon Wildlands is a tactical shooter video game developed by Ubisoft Paris and Ubisoft Milan and published by Ubisoft. It is the first game in the Ghost Recon series to feature an open world environment. The original Ghost Recon (2001) was an open environment. The technology at the time did not allow for such large scale maps. But, the missions were open to players so they can plan out different ways to approach their objectives or explore the maps.',
      videoSrc: 'https://www.youtube.com/embed/2I5AJRXrUrg'
    });
    this.gameList.push({
      imageUrl: './assets/videos/god_of_4_sig_ps4.jpeg',
      title: 'God of War 4 Sigrun Valkyrie Queen',
      subTitle: '',
      description: 'Sigrún, the Valkyrie Queen, is an optional boss in God of War and can be summoned (via a Realm Tear) after defeating the other eight Valkyries and placing their helms on the thrones found at the Council of Valkyries. Sigrún is immensely powerful, with Mimir saying that she is the strongest of all the Valkyries, with the presumed exception of Freya, the former Valkyrie Queen. Testaments of her surpassing strength was the fact that she was able to overpower and lock away the other Valkyries. She possesses the abilities and movesets of all the other Valkyries (except for the summoning ability). In addition to this, all of her abilities are empowered and do significantly more damage than their counterparts.',
      videoSrc: 'https://www.youtube.com/embed/VH2A-FKqk_w'
    });
    this.gameList.push({
      imageUrl: './assets/videos/god_of_war_4_ps4.jpg',
      title: 'God of War Niflheim - Quests and Maze',
      subTitle: '',
      description: 'The realm of Niflheim is an optional realm in God of War that can only be accessed after you gain the 4 Niflheim Language Ciphers. Once they are collected, you can travel to the realm. The realm is covered in a poisonous mist that will deplete the pink bar that appears above you. If the bar empties completely, you\'ll rapidly lose health until death. From the entrance, avoid the fog by sticking to higher ground and look for chests that hold Mist Echoes.',
      videoSrc: 'https://www.youtube.com/embed/2u9nudpHNPk'
    });
    this.gameList.push({
      imageUrl: './assets/videos/our-favorite-moments-from-resident-evil-7.jpg',
      title: 'Resident Evil 7',
      subTitle: '',
      description: 'Resident Evil 7: Biohazard[a] is a survival horror video game developed and published by Capcom, released in January 2017 for Microsoft Windows, PlayStation 4 (also supports PlayStation VR headset), Xbox One and in May 2018 for the Nintendo Switch in Japan. The ninth major installment in the Resident Evil series, Resident Evil 7 diverges from the more action-oriented Resident Evil 5 and Resident Evil 6, returning to the franchise\'s survival horror roots, emphasizing exploration. The player controls Ethan Winters as he searches for his wife in a derelict plantation occupied by an infected family, solving puzzles and fighting enemies. It\'s the first main series game to use a first-person view.',
      videoSrc: 'https://www.youtube.com/embed/6eVmO6bzG1U'
    });
    this.gameList.push({
      imageUrl: './assets/videos/tomb-raider-7.jpg',
      title: 'Tomb Raider',
      subTitle: '',
      description: 'Shadow of the Tomb Raider is a 2018 action-adventure video game developed by Eidos-Montréal and published by Square Enix. It continues the narrative from the 2015 game Rise of the Tomb Raider and is the twelfth mainline entry in the Tomb Raider series. The game was originally released worldwide for Microsoft Windows, PlayStation 4 and Xbox One. Versions for macOS and Linux, and Stadia, were released in November 2019. After release, the game was expanded upon with downloadable content in both a season pass and as standalone releases.',
      videoSrc: 'https://www.youtube.com/embed/vi1cz2Ufbfk'
    });
  }
}
