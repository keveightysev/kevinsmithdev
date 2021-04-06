import kansha from "../assets/images/kansha.png";
import curio from "../assets/images/curio.png";
import graffiti from "../assets/images/graffiti.png";
import flextogether from "../assets/images/flextogether.png";
import gsd from "../assets/images/gsd.png";
import recaller from "../assets/images/recaller.png";
import pricenavigator from "../assets/images/pricenavigator.png";

const projects = [
  {
    title: "Kansha Rewards",
    slug: "kansha-rewards",
    type: "team",
    tech: ["react", "redux", "node", "postgresql"],
    image: kansha,
    abstract:
      "I had the privilege of leading a team of develepors and one UX designer to build Kansha Rewards as part of Lambda School Labs in February and March of 2020. This platform allows employers to send recognition awards to employees. The team I led inherited this project from a previous team, and we were tasked with redesigning the app from the ground up. I wrote code alongside the developers as well as mentored them on writing alogrithms and other best practices.",
    links: [
      {
        url: "https://kansharewards.com/",
        text: "Live Site",
      },
      {
        url: "https://github.com/Lambda-School-Labs/kansha-fe",
        text: "Front End Repository",
      },
      {
        url: "https://github.com/Lambda-School-Labs/kansha-be",
        text: "Back End Repository",
      },
    ],
  },
  {
    title: "Curio",
    slug: "curio",
    type: "team",
    tech: ["react", "node", "postgresql"],
    image: curio,
    abstract:
      "In January 2020, Lambda School held a hackathon that lasted 48 hours. I led a team of seven developers to build an application that allows users to upload pictures and descriptions of their collectibles. It was a great experience to build something in such a small amount of time, while also having thing opportunity to mentor students.",
    links: [
      {
        url: "https://curio-app.netlify.app/",
        text: "Live Site",
      },
      {
        url: "https://github.com/curio-app/frontend",
        text: "Front End Repository",
      },
      {
        url: "https://github.com/curio-app/backend",
        text: "Back End Repository",
      },
    ],
  },
  {
    title: "Airbnb Price Navigator",
    slug: "airbnb-price-navigator",
    type: "team",
    tech: ["react"],
    image: pricenavigator,
    abstract:
      "A fellow student had asked for a developer to build out a front end for an app that lets you find estimates on how much a person could list their property on Airbnb. I enjoyed this experience as I was able to work with data science and UX students to make an appealing application.",
    links: [
      {
        url: "https://pricenavigator.netlify.app/",
        text: "Live Site",
      },
      {
        url:
          "https://github.com/Airbnb-Price-Navigator/airbnb-price-navigator-front-end",
        text: "Repository",
      },
    ],
  },
  {
    title: "ReCaller",
    slug: "recaller",
    type: "team",
    tech: ["react", "node", "firebase", "twilio", "stripe"],
    image: recaller,
    abstract:
      "As part of Lambda School's curriculum, 6 weeks are devoted to building an application with 4 other students. This portion of the curriculum is called Labs, and this was the project that my team was assigned to build. We loved working on this project, as we were able to work with several external APIs including Twilio, Stripe, and Deepgram to build an app that let users schedule phone calls with loved ones, recorded the calls, and then stored a transcription and recording for future access.",
    links: [
      {
        url: "https://recaller-14a1f.firebaseapp.com/",
        text: "Live Site",
      },
      {
        url: "https://github.com/labs12-mom-caller/Front-End",
        text: "Front End Repository",
      },
      {
        url: "https://github.com/labs12-mom-caller/Backend",
        text: "Back End Repository",
      },
    ],
  },
  {
    title: "FlexTogether Onboarding",
    slug: "flextogether",
    type: "team",
    tech: ["react", "redux"],
    image: flextogether,
    abstract:
      "This project was a build week project at Lambda School, and FlexTogether was a company that requested an application that allowed users who were onboarding to their product to schedule time with other users. The project gave me a firmer understanding of how an application is used by people from wide ranging demographics.",
    links: [
      {
        url: "https://lbwft.netlify.app/",
        text: "Live Site",
      },
      {
        url: "https://github.com/lbw-flextogether/frontend",
        text: "Repository",
      },
    ],
  },
  {
    title: "Internet Graffiti Wall",
    slug: "graffiti-wall",
    type: "personal",
    tech: ["react"],
    image: graffiti,
    abstract:
      'My favorite ongoing personal project - the Internet Graffiti Wall is an app that lets you "spraypaint" a virtual brick wall. I love this project because I built it using the Canvas API, and it was my first fully self taught project, without using instruction or tutorials.',
    links: [
      {
        url: "http://graffiti.iridigital.com/",
        text: "Live Site",
      },
      {
        url: "https://github.com/keveightysev/graffiti",
        text: "Repository",
      },
    ],
  },
  {
    title: "GSD",
    slug: "gsd",
    type: "personal",
    tech: ["react"],
    image: gsd,
    abstract:
      "In February 2019, I learned React while completing the Lambda School curriculum. This was the first fully functioning application that I built with it, and I keep it around for sentimental value.",
    links: [
      {
        url: "https://kevins-task-list.netlify.app/",
        text: "Live Site",
      },
      {
        url: "https://github.com/keveightysev/React-Todo",
        text: "Repository",
      },
    ],
  },
];

export default projects;
