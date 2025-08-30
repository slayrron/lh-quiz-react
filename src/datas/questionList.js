import img0 from "../assets/0.jpg"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img7 from "../assets/7.jpg"
import img8 from "../assets/8.jpg"
import img9 from "../assets/9.jpg"
import img10 from "../assets/10.jpg"
import img11 from "../assets/11.jpg"
import img12 from "../assets/12.jpg"


export const questionList = [
    {
        id: 0,
        question: "Hors agglomération, la limitation est de 80 km/h",
        category: "Route 1",
        image: img0,
        answers: ["Vrai", "Faux"],
        goodAnswerIndex: [0]
    },
    {
        id: 1,
        question: "En agglomération, à combien est limitée la vitesse ?",
        category: "Route 2",
        image: img1,
        answers: ["80km/h", "30km/h", "60km/h", "50km/h"],
        goodAnswerIndex: [3]
    },
    {
        id: 2,
        question: "Je suis placé sur la voie de gauche dans ce carrefour giratoire, je suis bien placé pour...",
        category: "Route 2",
        image: img2,
        answers: ["Tourner à droite", "Continuer tout droit", "Tourner à gauche", "Faire un demi-tour"],
        goodAnswerIndex: [2, 3]
    },
    {
        id: 3,
        question: "Un piéton est distrait sur le passage piéton",
        category: "Usagers 2",
        image: img3,
        answers: ["Je klaxonne", "Je le contourne en chevauchant la voie d'en face", "J'attends"],
        goodAnswerIndex: [2]
    },
    {
        id: 4,
        question: "Je peux passer",
        category: "Panneau 2",
        image: img4,
        answers: ["Oui", "Non"],
        goodAnswerIndex: [1]
    },
    {
        id: 5,
        question: "Je peux tourner à gauche",
        category: "Panneau 2",
        image: img5,
        answers: ["Oui", "Non"],
        goodAnswerIndex: [1]
    },
    {
        id: 6,
        question: "Le sens interdit s'applique",
        category: "Panneau 2",
        image: img6,
        answers: ["Immédiatement", "Dans 50m", "Dans 150m"],
        goodAnswerIndex: [0]
    },
    {
        id: 7,
        question: "Je suis en agglomération, je devrai céder le passage",
        category: "Panneau 2",
        image: img7,
        answers: ["Immédiatement", "Dans 50m", "Dans 150m"],
        goodAnswerIndex: [1]
    },
    {
        id: 8,
        question: "Je devrai céder le passage",
        category: "Panneau 2",
        image: img8,
        answers: ["Dans 50m", "Dans 150m"],
        goodAnswerIndex: [1]
    },
    {
        id: 9,
        question: "Ceci est un panneau...",
        category: "Panneau 1",
        image: img6,
        answers: ["STOP", "Céder le passage", "Sens interdit", "Stationnement interdit"],
        goodAnswerIndex: [2]
    },
    {
        id: 10,
        question: "Ceci est un panneau...",
        category: "Panneau 1",
        image: img8,
        answers: ["Céder le passage", "Croisement", "Virages sérrés"],
        goodAnswerIndex: [0]
    },
    {
        id: 11,
        question: "Les panneaux ronds sous fond bleu indiquent",
        category: "Panneau 1",
        image: img5,
        answers: ["Une information", "Un danger", "Une suggestion", "Une obligation"],
        goodAnswerIndex: [3]
    },
    {
        id: 12,
        question: "Les panneaux carrés sous fond bleu indiquent",
        category: "Panneau 1",
        image: img9,
        answers: ["Une information", "Un danger", "Une suggestion", "Une obligation"],
        goodAnswerIndex: [0]
    },
    {
        id: 13,
        question: "Ceci est un panneau indiquant la présence à proximité...",
        category: "Panneau 1",
        image: img9,
        answers: ["d'une zone de promenade", "d'un parking", "d'un parc"],
        goodAnswerIndex: [1]
    },
    {
        id: 14,
        question: "Je peux passer par là",
        category: "Panneau 2",
        image: img10,
        answers: ["Oui", "Non",],
        goodAnswerIndex: [1]
    },
    {
        id: 15,
        question: "La limitation s'applique",
        category: "Panneau 2",
        image: img11,
        answers: ["Immédiatement", "Dans 50m", "Dans 150m"],
        goodAnswerIndex: [0]
    },
    {
        id: 16,
        question: "Je suis bien placé pour...",
        category: "Route 2",
        image: img12,
        answers: ["Aller à Paris", "Aller à Mérignac", "Dépasser la voiture de droite", "Aller à Talence"],
        goodAnswerIndex: [0,1,2]
    },
    {
        id: 17,
        question: "Hors agglomération, il est formellement interdit de klaxonner",
        category: "Route 1",
        image: img0,
        answers: ["Vrai", "Faux"],
        goodAnswerIndex: [1]
    },
]