import img0 from "../assets/0.jpg"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"

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
    }
]