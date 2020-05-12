import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable()
export class UserService {
  public getUserDetails(): Observable<any> {
    //Create user Object
    const user = {
      name: 'Prasanna Deshappriya',
      designation: 'Software Engineer',
      description: 'An undergraduate student from University of ' +
        'Moratuwa specialized in Integrated Computer science & Engineering',
      address: 'No:695/B, Kapuwatta Station Rd,\nJa-Ela, Sri Lanka',
      tel: '+94 776 459108'
    }
    return of(user);
  }
  public getUserFooterDetails(): Observable<any> {
    const info = {
      title: 'Personal Blog',
      description: 'This is my personal website and it\'s maintain by myself. ' +
        'Please leave \na feedback for the things which need to be improved. ' +
        '\nYou are welcome to contact me at anytime.',
      navigations: [
        { name: 'Home', route: '/home' },
        { name: 'Projects', route: '/projects' },
        { name: 'Articles', route: '/articles' },
        { name: 'Contact', route: '/contact' },
      ],
      copyright: 'Prasanna Deshappriya © 2020'
    }
    return of(info);
  }
  public getUserSkillDetails(): Observable<any> {
    const details = {
      soft_skills: [
        'Leadership', 'Communication', 'Creativity', 'Patience', 'Commitment', 'Analytics skills', 'Analyzing skills', 'Marketing',
        'Promoting', 'Presenting', 'Management'
      ],
      tech_skills: [
        'Python', 'Java', 'C++', 'HTML/CSS/JS', 'ReactJS', 'PolarisUI', 'Semantic UI', 'Batch Scripting', 'PostgreSQL', 'PgBouncer',
        'MySQL', 'Apache Configurations', 'Google Compute Engine Configurations', 'DB Server configuration and Management'
      ],
      skill_set: [
        {skill: 'Angular JS', value: 90},
        {skill: 'JAVA', value: 85},
        {skill: 'C++', value: 95},
        {skill: 'HTML/CSS/JS', value: 95},
        {skill: 'DATABASES', value: 90},
      ]
    }
    return of(details);
  }
}
