import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable()
export class ProjectService {
  constructor() {}
  public getProjectList(): Observable<any> {
    return of(this.getProjectListData());
  }
  private getProjectListData(){
    return [
      {
        title: 'FABRIC DEFECT DETECTION SYSTEM',
        imageName: 'projects/Fabric.png',
        navigationPath: '/projects/automatic-fabric-defect-detection',
        lastUpdatedDate: 'December 03, 2018',
        content: 'This was our final year project in University of Moratuwa.\n' +
          '      Fabric defect detection is a significant phase of quality control in textile industry.\n' +
          '      Manual defect inspection lacks the accuracy and the labor cost is high.\n' +
          '      Automating this process is challenging due to a large number of fabric types and defect types.\n' +
          '      Defect detection relies on the identification of regions that are different from the uniform background.\n' +
          '      Our intention is to develop a system to detect defects in uniform textured fabrics with Image Processing techniques and Neural Networks.\n' +
          '      The results indicated that the use of light beams based on the color of the material is more effective than the white light beam.',
        technologies: 'NodeJS, AngularJS, PWM, Raspberry Pi, Web Sockets, OpenCV, C++, CNN, Keras, Tensorflow',
        isContentMode: true
      },
      {
        title: 'CHAT-BOT',
        imageName: 'projects/chatbot.jpeg',
        navigationPath: '/projects/chat-bot-project',
        lastUpdatedDate: 'July 29, 2018',
        content: 'This project was implemented while I was doing internship at Eyepax IT (Pvt) Ltd. The aim of this project ' +
          'is to reduce the time spending for the new employees to go through company policies, and related information. ' +
          'Employees can chat with this bot and found solution for there problems. New employees can get some understanding ' +
          'about company policies, culture, dress-code and extra activities while chat with this bot. [Note: This chat bot is ' +
          'still under development and not capable of performing its all commands. Latest release consists of most important ' +
          'policies of the company]',
        technologies: 'NodeJS, AngularJS, NLP Libraries [Wit.AI], Microsoft Bot Framework',
        isContentMode: true
      },
      {
        title: 'ROBOT TAILOR',
        imageName: 'projects/robot_tailor.png',
        navigationPath: '/projects/robot-tailor',
        lastUpdatedDate: 'June 01, 2018',
        content: 'The aim of this project is to construct a complete 3D point cloud of a human and take his/her measurements. ' +
          'First, we\'ll capture multiple frames from multiple kinect cameras and by registering them we\'ll construct ' +
          'complete 3d point cloud. Since Microsoft not allows us to connect multiple kinects to a same computer, ' +
          'we need to build a custom driver for our requirements. This project is completed as a semester three group project.',
        technologies: 'C++, C#, PCL(Point Cloud Library)'
      },
      {
        title: 'MOODLE MOBILE APP',
        imageName: 'projects/moodle_app.jpg',
        navigationPath: '/projects/moodle-mobile-app',
        lastUpdatedDate: 'June 01, 2018',
        content: 'This is a mobile application implemented using android studio. This app provide moodle services such ' +
          'as Submission dates, Calendar, Course Details, etc. Student also can track their attendance with this app. ' +
          'Furthermore, they can store their module credits for semesters so that they can keep track of their ' +
          'semester and overall GPA. App notification about submission deadline will helpful for students to complete them before',
        technologies: 'Android Studio, JAVA, PHP, Laravel',
        isContentMode: true
      },
      {
        title: 'TRAIN SCHEDULE APP',
        imageName: 'projects/train_schedule.jpg',
        navigationPath: '/projects/train-schedule-app',
        lastUpdatedDate: 'June 01, 2018',
        content: 'This is a mobile application implemented using android studio. ' +
          'This app can provide services such as searching for train times, searching for train rates, etc. ' +
          'Lanka gateway server is on maintenance for most of the time, so users face problems for searching train times. ' +
          'Hence, using this kind of app will make those problem solved easily. Furthermore, ' +
          'this app will capable of giving offline results as well. Offline results will be update whenever app has internet access.',
        technologies: 'Android Studio, JAVA, PHP, Laravel',
        isContentMode: true
      },
      {
        title: 'SMART DEVICE CONTROLLER',
        imageName: 'projects/smart_device_controller.png',
        navigationPath: '/projects/smart-device-controller',
        lastUpdatedDate: 'June 01, 2018',
        content: 'Most of people does not aware of using tab computers, mobile phones, and desktop computers. ' +
          'Because some elder people does not know, how to operate them with touch inputs. ' +
          'The aim of this project is to solve that problem. This is a embedded device which can be connected to ' +
          'mobile phones, desktops, tablets and etc with Bluetooth or WiFi and operate them with hand gestures. ' +
          'The easiest methods to give inputs is hand gestures. With this device, people can operate basic ' +
          'functionality of devices using their hand gestures easily.',
        technologies: 'OpenCV, Laravel, PHP, Android Studio, JAVA, Python'
      },
      {
        title: 'SLT USAGE [ADSL]',
        imageName: 'projects/slt_usage_app.jpg',
        navigationPath: '/projects/slt-usage-meter-app',
        lastUpdatedDate: 'June 01, 2018',
        content: 'This is a mobile application implemented using android studio. ' +
          'This app can be used to view SLT Broadband data usage in Srilanka. This is very user friendly ' +
          'app so users can used it easily. App will be saved usage at each time user log in and those data ' +
          'will be available for user to get statistical idea about the monthly usage. however, this history ' +
          'feature is not yet implemented yet and will be available in future updates.',
        technologies: 'Android Studio, JAVA, PHP, Laravel',
        isContentMode: true
      }
    ];
  }
}
