interface Card {
  id: number;
  type: 'Agências' | 'Chatbot' | 'Marketing Digital' | 'Geração de Leads' | 'Mídia Paga';
  title: string;
  description: string;
  url?: string;
  materials?: Material[];
}

interface Material {
  type: 'doc' | 'xls' | 'ppt' | 'zip';
  description: string;
  url: string;
}

export const cardsData: Card[] = [
  {
    id: 1,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
    url: 'https://www.youtube.com/watch?v=7C2z4GqqS5E',
    materials: [
      { type: 'doc', description: 'Document', url: '' },
      { type: 'xls', description: 'Spreadsheet', url: '' },
      { type: 'ppt', description: 'Presentation', url: '' },
    ],
  },
  {
    id: 2,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
    url: 'https://www.youtube.com/watch?v=7C2z4GqqS5E',
    materials: [
      { type: 'doc', description: 'Document2', url: '' },
      { type: 'xls', description: 'Spreadsheet2', url: '' },
      { type: 'zip', description: 'Folder2', url: '' },
    ],
  },
  {
    id: 3,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 4,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 5,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 6,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 7,
    type: 'Chatbot',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 8,
    type: 'Marketing Digital',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 9,
    type: 'Geração de Leads',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 10,
    type: 'Mídia Paga',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 11,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 12,
    type: 'Chatbot',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 13,
    type: 'Marketing Digital',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 13',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 14,
    type: 'Geração de Leads',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 14',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 15,
    type: 'Mídia Paga',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 15',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 16,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 17,
    type: 'Chatbot',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 18,
    type: 'Marketing Digital',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 19,
    type: 'Geração de Leads',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 19',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 20,
    type: 'Mídia Paga',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 20',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 21,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 21',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 22,
    type: 'Chatbot',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 22',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 23,
    type: 'Marketing Digital',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 23',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 24,
    type: 'Geração de Leads',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 24',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 25,
    type: 'Mídia Paga',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 25',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 26,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 26',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 27,
    type: 'Chatbot',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 27',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 28,
    type: 'Marketing Digital',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 28',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 29,
    type: 'Geração de Leads',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 29',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
];
