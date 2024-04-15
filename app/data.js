import { v4 as uuidv4 } from "uuid";


function projectData() {
  return [
    {
      name: "Weather",
      image: {
        src: "/weather.jpg",
        width: 450,
        height: 250,
      },
      link:"https://weather-app-two-orpin-36.vercel.app/",
      gitLink:"https://github.com/Si-creations/Weather-app",
      technology: ["html", "scss", "js","ts","api"],
      buttonName1: "Prezriet kód",
      buttonName2: "Prezriet projekt",
      id: uuidv4(),
    },
    {
      name: "Capture",
      image: {
        src: "/capture.png",
        width: 450,
        height: 250,
      },
      link:"https://capture-kohl.vercel.app/",
      gitLink:"https://github.com/Si-creations/Capture",
      technology: ["html", "css", "js"],
      buttonName1: "Prezriet projekt",
      buttonName2: "Prezriet kód",
      id: uuidv4(),
    },
    {
      name: "Capture",
      image: {
        src: "/capture.png",
        width: 450,
        height: 250,
      },
      link:"https://capture-kohl.vercel.app/",
      gitLink:"https://github.com/Si-creations/Capture",
      technology: ["html", "css", "js"],
      buttonName1: "Prezriet projekt",
      buttonName2: "Prezriet kód",
      id: uuidv4(),
    },
    {
      name: "Capture",
      image: {
        src: "/capture.png",
        width: 450,
        height: 250,
      },
      link:"https://capture-kohl.vercel.app/",
      gitLink:"https://github.com/Si-creations/Capture",
      technology: ["html", "css", "js"],
      buttonName1: "Prezriet projekt",
      buttonName2: "Prezriet kód",
      id: uuidv4(),
    },

    //ADD MORE HERE
  ];
}

export default projectData;
