/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Nick Gurnard",
  title: "Hi, I'm Nick!",
  subTitle: emoji(
    "A passionate Roboticist 🤖 I come from a mechanical engineering background and love everything robotics. I am pursuing a Master's degree to expand my programming expertise and explore controls, computer vision, motion planning/mapping, SLAM, machine learning, and multi-agent systems. Seems like a lot, but they are all correlated!" 
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LieN6Qm1v1SDxxzlFMNnMCeI9qWfYAdZ/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ngurnard",
  linkedin: "https://www.linkedin.com/in/nicholas-gurnard/",
  gmail: "nk.gurnard@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "LIFELONG LEARNER WHO WANTS TO EXPLORE THE AUTONOMOUS VEHICLE SPACE, AUTOMATION, AND MULTI-AGENT SYSTEMS.",
  skills: [
    emoji(
      "⚡ Integration of both mechanical design and programming in robotic systems"
    ),
    emoji("⚡ Design optimal control algorithms for robotic control, planning, and mapping"),
    emoji(
      "⚡ Test system  hardware and software to ensure peak performance"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    //{
      //skillName: "html-5",
      //fontAwesomeClassname: "fab fa-html5"
    //},
    //{
      //skillName: "JavaScript",
      //fontAwesomeClassname: "fab fa-js"
    //},
    //{
      //skillName: "reactjs",
      //fontAwesomeClassname: "fab fa-react"
    //},
    //{
      //skillName: "nodejs",
      //fontAwesomeClassname: "fab fa-node"
    //},
    //{
      //skillName: "npm",
      //fontAwesomeClassname: "fab fa-npm"
    //},
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    //{
      //skillName: "docker",
      //fontAwesomeClassname: "fab fa-docker"
    //}
    {
      skillName: "Solidworks",
      fontAwesomeClassname: "fas fa-drafting-compass"
    },
    {
      skillName: "git/GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Ubuntu Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Arduino/Raspberry Pi",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "R/RStudio",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "C++/C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Pennsylvania",
      logo: require("./assets/images/pennShield2.png"),
      subHeader: "Master of Science in Robotics",
      duration: "August 2021 - May 2023",
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "University of California, Irvine",
      logo: require("./assets/images/UCI_seal.png"),
      subHeader: "Bachelor of Science in Mechanical Engineering",
      duration: "September 2017 - March 2021",
      desc: "Ranked top 3 in the program; Awarded Summa Cum Laude.",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mechanical Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    },
    {
      Stack: "Soft Skills (Customer Relations, Teamwork, etc.)",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Manufacturing Engineering Intern",
      company: "Applied Medical",
      companylogo: require("./assets/images/appliedMedical.jpg"),
      date: "June 2019 - August 2019",
      desc: "Owned  the  full  development  of  End-of-Arm-Tooling  devices,  medical  devices,  and  test  fixtures  for tack-welding, quality control testing, part assembly, and insert/injection molding for plastics.",
      descBullets: [
        "Developed and inspection method to detect and correct manufacturing error, reducing part failures from 50% down to ~12-15%.",
        "Improved automated manufacturing efficiency and reduced overall labor hours."
      ]
    },
    {
      role: "Crew Member",
      company: "Jersey Mike's Subs",
      companylogo: require("./assets/images/jerseyMikes.jpeg"),
      date: "June 2020 – August 2021",
      desc: "Delivered quality product to customers with no exceptions as a senior crew member. Worked on community outreach by encouraging new customers to enter our franchise. Maintained sanitary work environment and ensured customers had a great experience."
    },
    {
      role: "Level 4 Associate",
      company: "In-N-Out Burger",
      companylogo: require("./assets/images/inNout.jpeg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Ensured workplace efficency and fluidity by leading lower level associates. Always delivered outstanding product with a smile and a positive attitude. "
    },
    {
      role: "PSA - Professional Sports Authenticator",
      company: "Collector's Universe",
      companylogo: require("./assets/images/psa.jpg"),
      date: "May 2020 – August 2020",
      desc: "Worked on the team of the world's largest and most trusted grading company. We collected, professionally graded, and verified playing cards, sports equipment, memorabilia, & signatures."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "THIS SECTION DETAILS MY FAVORITE PROJECTS. MORE DETAILS ON THE FOLLOWING PROJECTS AND MANY OTHER PROJECTS CAN BE FOUND ON MY LINKEDIN PROFILE (CLICK BELOW).",
  projects: [
    {
      image: require("./assets/images/marsRover.png"),
      projectName: "Manipulator Simulations - Mars Rover Arm",
      projectDesc: "Calculated the forward and inverse kinematics of various robot arms (including the actual Mars Rover with real specifications), platform robots, and robitc wrists. It was then animated using Mathematica.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/in/nicholas-gurnard/"
        }
      ]
    },
    {
      image: require("./assets/images/AutonomousCar.png"),
      projectName: "Autonomous Skid-Steered Robot",
      projectDesc: "Designed, tested, and implemented a PID controller on a 4WD skid-steered robot. The robot successfully navigated a lane by using sensor inputs from wheel encoders, a color sensor, and IR sensors.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/in/nicholas-gurnard/"
        }
      ]
    },
    {
      image: require("./assets/images/corrplot.png"),
      projectName: "Activity Prediction - Machine Learning Model",
      projectDesc: "Calssified human activity from time-series smartwatch and smartphone accelerometer & gyroscope data. Achieved accuracy upwards of 85% using random forests when all 18 activities were modeled simultaneously (~95% when segmented by category).",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/in/nicholas-gurnard/"
        }
      ]
    },
    {
      image: require("./assets/images/wearableSensing.png"),
      projectName: "Wearable Sensing Rehabilitation Device",
      projectDesc: "As project lead of BrilliAnt, we worked on creating a smartwatch application that motivated debilitated patients to perform quality rehab exercises via statistical measures, complex movement quality algorithms, and a fun and easy to use user interface.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/in/nicholas-gurnard/"
        }
      ]
    },
    {
      image: require("./assets/images/quadcopter.png"),
      projectName: "Payload Delivery Drone",
      projectDesc: "Designed, manufactured, tested, and competed with a payload delivery drone that automously delivered various packages based on the color of target it detected and the distance from said target (human controlled flight).",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/in/nicholas-gurnard/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me!"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (949) 257-8760",
  email_address: "nk.gurnard@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
