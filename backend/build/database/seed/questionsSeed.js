"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Questions_ODM_1 = __importDefault(require("../model/Questions.ODM"));
let questionsData;
class SeedQuestions extends Questions_ODM_1.default {
    async seedMany() {
        await this._model.insertMany(questionsData);
    }
}
questionsData = [
    {
        tier: 'n1',
        questions: [
            {
                question: 'Sua fé era sem \'sem hipocrisia\'',
                answer: 'Timóteo',
                options: ['Timóteo', 'Tito', 'Paulo', 'Pedro'],
            },
            {
                question: 'Quem era o pai de Abraão?',
                answer: 'Tera',
                options: ['Tera', 'Noé', 'Jacó', 'Isaque'],
            },
            {
                question: 'Quem era o pai de Isaque?',
                answer: 'Abraão',
                options: ['Abraão', 'Jacó', 'Noé', 'Tera'],
            },
            {
                question: 'Quem era o pai de Jacó?',
                answer: 'Isaque',
                options: ['Isaque', 'Abraão', 'Noé', 'Tera'],
            },
            {
                question: 'Quem era o pai de José?',
                answer: 'Jacó',
                options: ['Jacó', 'Isaque', 'Abraão', 'Noé'],
            },
            {
                question: 'Uma mulher quebrou o ____ de Abimeleque com uma pedra de moinho',
                answer: 'Crânio',
                options: ['Crânio', 'Braço', 'Pé', 'Joelho'],
            },
            {
                question: 'O principal alimento dos israelitas durante sua peregrinação no deserto foi:',
                answer: 'Maná',
                options: ['Maná', 'Pão', 'Peixe', 'Carne'],
            },
            {
                question: 'Quantas pessoas sobreviveram ao dilúvio?',
                answer: '8',
                options: ['8', '10', '12', '6'],
            },
        ],
    },
    {
        tier: 'n2',
        questions: [
            {
                question: 'De qual nação era o rei Ciro?',
                answer: 'Persia',
                options: ['Persia', 'Babilônia', 'Assíria', 'Medos'],
            },
            {
                question: 'Quando Ciro permitiu que os judeus voltassem para Jerusalém?',
                answer: '538 a.C.',
                options: ['538 a.C.', '539 a.C.', '537 a.C.', '536 a.C.'],
            },
            {
                question: 'Quando Jerusalém foi destruída?',
                answer: '586 a.C.',
                options: ['586 a.C.', '587 a.C.', '588 a.C.', '589 a.C.'],
            },
            {
                question: 'Quem matou Abel?',
                answer: 'Caim',
                options: ['Caim', 'Adão', 'Eva', 'Sete'],
            },
            {
                question: 'Quem foi Mefibosete?',
                answer: 'Filho de Jonatã',
                options: [
                    'Filho de Jonatã',
                    'Filho de Saul',
                    'Filho de Davi',
                    'Filho de Samuel',
                ],
            },
            {
                question: 'Qual foi a 3ª praga do Egito?',
                answer: 'Piolhos',
                options: ['Piolhos', 'Rãs', 'Água em sangue', 'Moscas'],
            },
            {
                question: 'Qual foi a 4ª praga do Egito?',
                answer: 'Moscas',
                options: ['Moscas', 'Rãs', 'Água em sangue', 'Piolhos'],
            },
            {
                question: 'O que era o Maná?',
                answer: 'Pão do céu',
                options: ['Pão do céu', 'Pão da terra', 'Pão de Deus', 'Pão dos anjos'],
            },
        ],
    },
    {
        tier: 'n3',
        questions: [
            {
                question: 'Sua fé era sem \'sem hipocrisia\'',
                answer: 'Timóteo',
                options: ['Timóteo', 'Tito', 'Paulo', 'Pedro'],
            },
            {
                question: 'Quem era o pai de Abraão?',
                answer: 'Tera',
                options: ['Tera', 'Noé', 'Jacó', 'Isaque'],
            },
            {
                question: 'Quem era o pai de Isaque?',
                answer: 'Abraão',
                options: ['Abraão', 'Jacó', 'Noé', 'Tera'],
            },
            {
                question: 'Quem era o pai de Jacó?',
                answer: 'Isaque',
                options: ['Isaque', 'Abraão', 'Noé', 'Tera'],
            },
            {
                question: 'Quem era o pai de José?',
                answer: 'Jacó',
                options: ['Jacó', 'Isaque', 'Abraão', 'Noé'],
            },
            {
                question: 'Uma mulher quebrou o ____ de Abimeleque com uma pedra de moinho',
                answer: 'Crânio',
                options: ['Crânio', 'Braço', 'Pé', 'Joelho'],
            },
            {
                question: 'O principal alimento dos israelitas durante sua peregrinação no deserto foi:',
                answer: 'Maná',
                options: ['Maná', 'Pão', 'Peixe', 'Carne'],
            },
            {
                question: 'Quantas pessoas sobreviveram ao dilúvio?',
                answer: '8',
                options: ['8', '10', '12', '6'],
            },
        ],
    },
    {
        tier: 'n4',
        questions: [
            {
                question: 'Quando foi a primeira vez que Deus falou com Samuel?',
                answer: 'Quando ele era criança',
                options: [
                    'Quando ele era criança',
                    'Quando ele era jovem',
                    'Quando ele era adulto',
                    'Quando ele era idoso',
                ],
            },
            {
                question: 'Primeira cidade visitada pelo Apóstolo Paulo:',
                answer: 'Salamina',
                options: ['Salamina', 'Pafos', 'Perge', 'Antioquia'],
            },
        ],
    },
];
exports.default = SeedQuestions;
//# sourceMappingURL=questionsSeed.js.map