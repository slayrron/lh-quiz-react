import img0 from "../assets/0.jpg"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img7 from "../assets/7.jpg"
import img8 from "../assets/8.jpg"

export const questionList = [
    {
        id: 0,
        question: "Hors agglomération, la limitation est de 80 km/h",
        image: img0,
        answers: ["Vrai", "Faux"],
        goodAnswerIndex: [0]
    },
    {
        id : 1,
        question: "En agglomération, à combien est limitée la vitesse ?",
        image: img1,
        answers: ["80km/h", "30km/h", "60km/h", "50km/h"],
        goodAnswerIndex: [3]
    },
    {
        id : 2,
        question: "Je suis placé sur la voie de gauche dans ce carrefour giratoire, je suis bien placé pour...",
        image: img2,
        answers: ["Tourner à droite", "Continuer tout droit", "Tourner à gauche", "Faire un demi-tour"],
        goodAnswerIndex: [2, 3]
    },
    {
        id : 3,
        question: "Un piéton est distrait sur le passage piéton",
        image: img3,
        answers: ["Je klaxonne", "Je le contourne en chevauchant la voie d'en face", "J'attends"],
        goodAnswerIndex: [2]
    },
    {
        id : 4,
        question: "Je peux passer",
        image: img4,
        answers: ["Oui", "Non"],
        goodAnswerIndex: [1]
    },
    {
        id : 5,
        question: "Je peux tourner à gauche",
        image: img5,
        answers: ["Oui", "Non"],
        goodAnswerIndex: [1]
    },
    {
        id : 6,
        question: "Le sens interdit s'applique",
        image: img6,
        answers: ["Immédiatement", "Dans 50m", "Dans 150m"],
        goodAnswerIndex: [0]
    },
    {
        id : 7,
        question: "Je suis en agglomération, je devrai céder le passage",
        image: img7,
        answers: ["Immédiatement", "Dans 50m", "Dans 150m"],
        goodAnswerIndex: [1]
    },
    {
        id : 8,
        question: "Je devrai céder le passage",
        image: img8,
        answers: ["Dans 50m", "Dans 150m"],
        goodAnswerIndex: [1]
    },

]