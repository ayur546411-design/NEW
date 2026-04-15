import banshikaImage from '../assets/facultyimg/21.jpeg';
import kajalImage from '../assets/facultyimg/23.jpeg';
import piyushImage from '../assets/facultyimg/24.jpeg';
import akankshaImage from '../assets/facultyimg/25.jpeg';
import abcImage from '../assets/facultyimg/26.jpeg';
import sonamImage from '../assets/facultyimg/27.jpeg';






const siteData = {
  school: {
    name: 'Saraswati Vidya Mandir School',
    established: '2026',
    session: '2026–2027',
    type: 'Primary School',
    medium: 'English & Hindi',
    classes: 'Nursery to 8th',
    principal: 'Piyush Raj Gupta',
    director: 'Subhash Prasad Gupta',
    principalImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=60',
    directorImage: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=600&q=60',
    address: `Village Nawadih, PS Rohtas,\nDistrict Rohtas, State Bihar – 821308`,
    phones: ['9508579707','6299101194'],
    email: 'globalmodelpublicschool2026@gmail.com',
    officeTiming: '9:00 AM – 2:30 PM',
    schoolTiming: '9:00 AM – 2:30 PM',
    admissionOpenDate: '16 February 2026'
  },
  faculty: [
    { name: 'Piyush Raj Gupta', role: 'Principal', qual: 'BSc Chemistry', image: piyushImage },
    { name: 'Akanksha Raj', role: 'Teacher', qual: 'BSc Mathematics', image: akankshaImage },
    { name: 'Kajal Kumari', role: 'Teacher', qual: 'BSc Biology', image: kajalImage },
    { name: 'Sonam Kumari', role: 'Teacher', qual: 'B.Ed (AU)', image: sonamImage },
    { name: 'Banshika Gupta', role: 'Teacher', qual: 'B.Ed', image: banshikaImage }
  ],
  subjects: ['English','Hindi','Sanskrit','Mathematics','Science','Social Science','Computer','GK','Spoken English'],
  activities: ['Spoken English','Yoga','Sports'],
  highlights: [
    {title:'Small Class Size',desc:'Personalised attention with low student-teacher ratio.'},
    {title:'Bilingual Curriculum',desc:'English & Hindi medium with emphasis on communication.'},
    {title:'Holistic Development',desc:'Sports, yoga and spoken English built into schedule.'}
  ],
  images: [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1596496055690-14b3f6b8b5c4?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1601582584113-2d7c2b43a1a9?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=60'
  ],
  // Optional: set this to a deployed Google Apps Script web app URL to save enquiries to a Google Sheet
  sheetEndpoint: 'https://script.google.com/macros/s/AKfycby1G8M8tI1fYuGb4Ly05Eo8WH8k0DZx9DAhWc8Mgn8D-UndeijlYoaKKx33ALGgWef-uA/exec',
  notices: [
  {
    id: 1,
    title: 'Admission Open 2026–27',
    date: '2026-02-16',
    category: 'Admission',
    content: 'Admissions are now open for Nursery to Class 8.'
  },
  {
    id: 2,
    title: 'Holi Holiday',
    date: '2026-03-13',
    category: 'Holiday',
    content: 'School will remain closed on account of Holi.'
  },
  {
    id: 3,
    title: 'Annual Examination',
    date: '2026-03-25',
    category: 'Exam',
    content: 'Annual exams will begin from 25th March.'
  }
  ],
  events: [
    { title: 'Annual Sports Day', date: '2026-01-20' },
    { title: 'Republic Day Celebration', date: '2026-01-26' },
    { title: 'Annual Function', date: '2026-02-10' }
  ]
}

export default siteData;
