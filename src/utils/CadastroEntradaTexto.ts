const secoes = [
  {
    id: 1,
    titulo: "Insira alguns dados básicos",
    entradaTexto: [
      { id: 1, label: "Nome", placeholder: "Digite seu nome completo" },
      { id: 2, label: "Email", placeholder: "Digite seu email" },
      { id: 3, label: "Crie uma senha", placeholder: "Insira sua senha", secureTextEntry: true },
      { id: 4, label: "Confirme sua senha", placeholder: "Insira sua senha", secureTextEntry: true },
    ],
    checkbox: [],
  },
  {
    id: 2,
    titulo: "Agora, mais alguns dados sobre você:",
    entradaTexto: [
      { id: 1, label: "CEP", placeholder: "Insira seu CEP" },
      { id: 2, label: "Endereço", placeholder: "Insira seu endereço" },
      { id: 3, label: "Número", placeholder: "Insira seu número" },
      { id: 4, label: "Complemento", placeholder: "Insira seu complemento" },
      { id: 5, label: "Telefone", placeholder: "(00) 00000-0000" },
    ],
    checkbox: [],
  },
  {
    id: 3,
    titulo: "Quais são os seus objetivos?",
    entradaTexto: [],
    checkbox: [
      { id: 1, value: "Ser mais organizado" },
      { id: 2, value: "Ter mais foco" },
      { id: 3, value: "Aumentar minha produtividade" },
      { id: 4, value: "Reduzir a ansiedade" },
      { id: 5, value: "Diminuir a procrastinação" },
      { id: 6, value: "Melhorar minha qualidade de vida" },
      { id: 7, value: "Aprender novas habilidades" },
      { id: 8, value: "Ter mais equilíbrio emocional" },
      { id: 9, value: "Aumentar minha energia diária" },
      { id: 10, value: "Estabelecer uma rotina saudável" },
    ],
  },
];

export { secoes };
