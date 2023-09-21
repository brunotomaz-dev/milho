import { IQuestionsSeed } from '../../interface/IQuestions';

enum Pragas {
  'Água em sangue' = 1,
  'Rãs',
  'Mosquitos',
  'Moscões',
  'Morte dos Rebanhos',
  'Furúnculos',
  'Granizo',
  'Gafanhotos',
  'Escuridão',
  'Morte dos primogênitos',
}

const questions: IQuestionsSeed[] = [
  {
    tier: 'n1',
    questions: [
      {
        question: 'De qual nação era o rei Ciro?',
        answer: 'Persia',
        options: ['Persia', 'Babilônia', 'Assíria', 'Medos'],
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
        question:
          'Uma mulher quebrou o ____ de Abimeleque com uma pedra de moinho',
        answer: 'Crânio',
        options: ['Crânio', 'Braço', 'Pé', 'Joelho'],
      },
      {
        question:
          'O principal alimento dos israelitas durante sua peregrinação no deserto foi:',
        answer: 'Maná',
        options: ['Maná', 'Pão', 'Peixe', 'Carne'],
      },
      {
        question: 'Quantas pessoas sobreviveram ao dilúvio?',
        answer: '8',
        options: ['8', '10', '12', '6'],
      },
      {
        question: 'Quem matou Abel?',
        answer: 'Caim',
        options: ['Caim', 'Adão', 'Eva', 'Sete'],
      },
      {
        question: 'Mulher por quem Sansão se enamorou:',
        answer: 'Dalila',
        options: ['Dalila', 'Rute', 'Raabe', 'Ester'],
      },
      {
        question:
          'Moisés ordenou que matassem cada israelita ligado a esse deus falso:',
        answer: 'Baal de Peor',
        options: ['Baal de Peor', 'Moloque', 'Quemos', 'Astarote'],
      },
      {
        question:
          'Forma comum de livro durante o período de escrita da Bíblia:',
        answer: 'Rolo',
        options: ['Rolo', 'Pergaminho', 'Papiro', 'Tábua'],
      },
    ],
  },
  {
    tier: 'n2',
    questions: [
      {
        question: 'Qual foi a 1ª praga do Egito?',
        answer: Pragas[1],
        options: [Pragas[1], Pragas[3], Pragas[2], Pragas[5]],
      },
      {
        question: 'Qual foi a 10ª praga do Egito?',
        answer: Pragas[10],
        options: [Pragas[10], Pragas[9], Pragas[8], Pragas[7]],
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
        question: 'Sua fé era sem \'sem hipocrisia\'',
        answer: 'Timóteo',
        options: ['Timóteo', 'Tito', 'Paulo', 'Pedro'],
      },
      {
        question: 'Quem foi o sucessor do profeta Elias?',
        answer: 'Eliseu',
        options: ['Eliseu', 'Elifaz', 'Elias', 'Jeú'],
      },
      {
        question:
          'Filho de Azalias e secretário da corte, a quem Hilquias entregou o livro da lei',
        answer: 'Safã',
        options: ['Safã', 'Sefaías', 'Josias', 'Semaías'],
      },
      {
        question: 'Neto de Arão que traspassou Zinri e Cosbi com uma lança',
        answer: 'Fineias',
        options: ['Fineias', 'Eleazar', 'Itamar', 'Abiatar'],
      },
      {
        question:
          ' Jeová ordenou que Jacó morasse nesse lugar logo após Diná ser desonrada:',
        answer: 'Betel',
        options: ['Betel', 'Siquém', 'Hebrom', 'Mamré'],
      },
      {
        question:
          'Para qual cidade Ló fugiu quando Sodoma e Gomorra foram destruídas?',
        answer: 'Zoar',
        options: ['Zoar', 'Belém', 'Betsaida', 'Jerusalém'],
      },
      {
        question:
          'A perspicácia do homem o torna menos propenso a manifestar o quê? (Provérbios 19:11)',
        answer: 'Ira',
        options: ['Ira', 'Orgulho', 'Inveja', 'Ganância'],
      },
      {
        question: 'Primeiro juiz citado por nome depois de Josué:',
        answer: 'Otniel',
        options: ['Otniel', 'Eúde', 'Gideão', 'Sansão'],
      },
    ],
  },
  {
    tier: 'n3',
    questions: [
      {
        question: 'Qual foi a 2ª praga do Egito?',
        answer: Pragas[2],
        options: [Pragas[2], Pragas[3], Pragas[4], Pragas[5]],
      },
      {
        question: 'Qual foi a 3ª praga do Egito?',
        answer: Pragas[3],
        options: [Pragas[3], Pragas[2], Pragas[5], Pragas[6]],
      },
      {
        question: 'Qual foi a 4ª praga do Egito?',
        answer: Pragas[4],
        options: [Pragas[4], Pragas[7], Pragas[8], Pragas[2]],
      },
      {
        question: 'Qual foi a 5ª praga do Egito?',
        answer: Pragas[5],
        options: [Pragas[5], Pragas[6], Pragas[7], Pragas[8]],
      },
      {
        question: 'Qual foi a 6ª praga do Egito?',
        answer: Pragas[6],
        options: [Pragas[6], Pragas[7], Pragas[8], Pragas[9]],
      },
      {
        question: 'Qual foi a 7ª praga do Egito?',
        answer: Pragas[7],
        options: [Pragas[7], Pragas[8], Pragas[9], Pragas[10]],
      },
      {
        question: 'Qual foi a 8ª praga do Egito?',
        answer: Pragas[8],
        options: [Pragas[8], Pragas[9], Pragas[10], Pragas[7]],
      },
      {
        question: 'Qual foi a 9ª praga do Egito?',
        answer: Pragas[9],
        options: [Pragas[9], Pragas[10], Pragas[7], Pragas[8]],
      },
      {
        question:
          'Idioma em que originalmente foi escrito o evangelho de Mateus:',
        answer: 'Hebraico',
        options: ['Hebraico', 'Latim', 'Grego', 'Aramaico'],
      },
      {
        question:
          'Deus grego que o povo de Listra identificou como se fosse Barnabé:',
        answer: 'Zeus',
        options: ['Zeus', 'Hermes', 'Apolo', 'Dionísio'],
      },
      {
        question:
          'Deus grego que o povo de Listra identificou como se fosse Paulo:',
        answer: 'Hermes',
        options: ['Hermes', 'Zeus', 'Apolo', 'Dionísio'],
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
      {
        question:
          'Guerreiro geteu que foi leal a Davi durante a rebelião de Absalão:',
        answer: 'Itai',
        options: ['Itai', 'Benaia', 'Joabe', 'Simei'],
      },
      {
        question:
          'Profeta que disse: \'Rasguem o seu coração, não as suas roupas\'',
        answer: 'Joel',
        options: ['Joel', 'Amós', 'Oséias', 'Jonas'],
      },
    ],
  },
];

export default questions;
