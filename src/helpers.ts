/**
 * Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */
 const shuffle = (a: any[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export type HatchType = {
  nr: number;
  img: string;
  author: string;
  text: string;
  open: boolean;
}

// Bad one-liners from https://onelinefun.com/christmas
export const hatchArray: HatchType[] = [
  {
    nr: 1,
    img: './img/1.jpg',
    author: 'Mahatma Gandhi',
    text:
      'Live as if you were to die tomorrow. Learn as if you were to live forever',
    open: false
  },
  {
    nr: 2,
    img: './img/2.jpg',
    author: 'Bernard M. Baruch',
    text:'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.',
    open: false
  },
  {
    nr: 3,
    img: './img/3.jpg',
    author: 'Virginia Satir',
    text:"We must not allow other people’s limited perceptions to define us",
    open: false
  },
  {
    nr: 4,
    img: './img/4.jpg',
    author: 'Oscar Wilde',
    text:"Be yourself; everyone else is already taken.",
    open: false
  },
  {
    nr: 5,
    img: './img/5.jpg',
    author: 'Napoleon Hill',
    text: 'If you cannot do great things, do small things in a great way.',
    open: false
  },
  {
    nr: 6,
    img: './img/6.jpg',
    author: 'Milton Berle',
    text: 'If opportunity doesn’t knock, build a door.',
    open: false
  },
  {
    nr: 7,
    img: './img/7.jpg',
    author: 'Mark Twain',
    text: 'Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
    open: false
  },
  {
    nr: 8,
    img: './img/8.jpg',
    author: 'Robert Frost',
    text: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
    open: false
  },
  {
    nr: 9,
    img: './img/9.jpg',
    author: 'Deepam Chatterjee',
    text: "When you are totally at peace with yourself, nothing can shake you.",
    open: false
  },
  {
    nr: 10,
    img: './img/10.jpg',
    author: 'Maya Angelou',
    text:'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
    open: false
  },
  {
    nr: 11,
    img: './img/11.jpg',
    author: ' Charles Kettering',
    text: "Believe and act as if it were impossible to fail.",
    open: false
  },
  {
    nr: 12,
    img: './img/12.jpg',
    author: 'Alan Kay',
    text:"The best way to predict the future is to invent it.",
    open: false
  },
  {
    nr: 13,
    img: './img/13.jpg',
    author: 'Jimmy Johnson',
    text:
      "The difference between ordinary and extraordinary is that little extra.",
    open: false
  },
  {
    nr: 14,
    img: './img/14.jpg',
    author: 'Theodore Roosevelt',
    text:'Believe you can and you’re halfway there.',
    open: false
  },
  {
    nr: 15,
    img: './img/15.jpg',
    author: 'Norman Vincent',
    text: 'Change your thoughts and you change your world.',
    open: false
  },
  {
    nr: 16,
    img: './img/16.jpg',
    author: 'Albert Einstein',
    text: 'A person who never made a mistake never tried anything new.',
    open: false
  },
  {
    nr: 17,
    img: './img/17.jpg',
    author: 'Eleanor Roosevelt',
    text:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    open: false
  },
  {
    nr: 18,
    img: './img/18.jpg',
    author: 'Helen Keller',
    text:
      'The only thing worse than being blind is having sight but no vision.',
    open: false
  },
  {
    nr: 19,
    img: './img/19.jpg',
    author: 'Franklin D. Roosevelt',
    text:
      "The only thing we have to fear is fear itself.",
    open: false
  },
  {
    nr: 20,
    img: './img/20.jpg',
    author: 'Edith Wharton',
    text: "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
    open: false
  },
  {
    nr: 21,
    img: './img/21.jpg',
    author: 'Socrates',
    text:
      'The only true wisdom is knowing that you know nothing.',
    open: false
  },
  {
    nr: 22,
    img: './img/22.jpg',
    author: 'Leonardo da Vinci',
    text:
      'As a well-spent day brings happy sleep, so a life well spent brings happy death.',
    open: false
  },
  {
    nr: 23,
    img: './img/23.jpg',
    author: 'Benjamin Franklin',
    text:
      'Never leave that till tomorrow which you can do today.',
    open: false
  },
  {
    nr: 24,
    img: './img/24.jpg',
    author: ' Wayne Dyer',
    text:
      "When you judge another, you do not define them; you define yourself.”",
    open: false
  },
  {
    nr: 25,
    img: './img/25.jpg',
    author: 'Anais Nin',
    text:"Life shrinks or expands in proportion to one’s courage.",
    open: false
  }
];

export const createCalendar = (): HatchType[] => shuffle(hatchArray);
