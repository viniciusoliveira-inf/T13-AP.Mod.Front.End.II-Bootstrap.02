localStorage.removeItem('registros')
const registros = JSON.parse(localStorage.getItem('registros') || '[]');

let contador = 1;
let index, nome, detalhamento;
let registrosLocalStorage;

const dados = [
    {
        detalhamento: 'You can observe a lot just by watching.',
        nome: 'Yogi Berra'
    },
    {
        detalhamento: 'A house divided against itself cannot stand.',
        nome: 'Abraham Lincoln'
    },
    {
        detalhamento: 'Difficulties increase the nearer we get to the goal.',
        nome: 'Johann Wolfgang von Goethe'
    },
    {
        detalhamento: 'Fate is in your hands and no one elses.',
        nome: 'Byron Pulsifer'
    },
    {
        detalhamento: 'Be the chief but never the lord.',
        nome: 'Lao Tzu'
    },
    {
        detalhamento: 'Nothing happens unless first we dream.',
        nome: 'Carl Sandburg'
    },
    {
        detalhamento: 'Well begun is half done.',
        nome: 'Aristotle'
    },
    {
        detalhamento: 'Self-complacency is fatal to progress.',
        nome: 'Margaret Sangster'
    },
    {
        detalhamento: 'What you give is what you get.',
        nome: 'Byron Pulsifer'
    },
    {
        detalhamento: 'We can only learn to love by loving.',
        nome: 'Iris Murdoch'
    },
    {
        detalhamento: 'To lead people walk behind them.',
        nome: 'Lao Tzu'
    },
    {
        detalhamento: 'Trouble is only opportunity in work clothes.',
        nome: 'Henry J Kaiser'
    },
    {
        detalhamento: 'A rolling stone gathers no moss.',
        nome: 'Publilius Syrus'
    },
    {
        detalhamento: 'Ideas are the beginning points of all fortunes.',
        nome: 'Napoleon Hill'
    },
    {
        detalhamento: 'Everything in life is luck.',
        nome: 'Donald Trump'
    },
    {
        detalhamento: 'Doing nothing is better than being busy doing nothing.',
        nome: 'Lao Tzu'
    },
    {
        detalhamento: 'Trust yourself. You know more than you think you do.',
        nome: 'Benjamin Spock'
    },
    {
        detalhamento: 'Study the past, if you would divine the future.',
        nome: 'Confucius'
    },
    {
        detalhamento: 'From error to error one discovers the entire truth.',
        nome: 'Sigmund Freud'
    },
    {
        detalhamento: 'Well done is better than well said.',
        nome: 'Benjamin Franklin'
    },
    {
        detalhamento: 'Bite off more than you can chew, then chew it.',
        nome: 'Ella Williams'
    },
    {
        detalhamento: 'Work out your own salvation. Do not depend on others.',
        nome: 'Buddha'
    },
    {
        detalhamento: 'One today is worth two tomorrows.',
        nome: 'Benjamin Franklin'
    },
    {
        detalhamento: 'Once you choose hope, anythings possible.',
        nome: 'Christopher Reeve'
    },
    {
        detalhamento: 'God always takes the simplest way.',
        nome: 'Albert Einstein'
    },
    {
        detalhamento: 'One fails forward toward success.',
        nome: 'Charles Kettering'
    },
    {
        detalhamento: 'Learning is a treasure that will follow its owner everywhere.',
        nome: 'Chinese proverb'
    },
    {
        detalhamento: 'Be as you wish to seem.',
        nome: 'Socrates'
    },
    {
        detalhamento: 'The world is always in movement.',
        nome: 'V Naipaul'
    },
    {
        detalhamento: 'Never mistake activity for achievement.',
        nome: 'John Wooden'
    },
    {
        detalhamento: 'What worries you masters you.',
        nome: 'Haddon Robinson'
    },
    {
        detalhamento: 'One faces the future with ones past.',
        nome: 'Pearl Buck'
    },
    {
        detalhamento: 'Goals are the fuel in the furnace of achievement.',
        nome: 'Brian Tracy'
    },
    {
        detalhamento: 'Who sows virtue reaps honour.',
        nome: 'Leonardo da Vinci'
    },
    {
        detalhamento: 'Be kind whenever possible. It is always possible.',
        nome: 'Dalai Lama'
    },
    {
        detalhamento: 'He is able who thinks he is able.',
        nome: 'Buddha'
    },
    {
        detalhamento: 'A goal without a plan is just a wish.',
        nome: 'Larry Elder'
    },
    {
        detalhamento: 'To succeed, we must first believe that we can.',
        nome: 'Michael Korda'
    },
    {
        detalhamento: 'Learn from yesterday, live for today, hope for tomorrow.',
        nome: 'Albert Einstein'
    },
    {
        detalhamento: 'A weed is no more than a flower in disguise.',
        nome: 'James Lowell'
    },
    {
        detalhamento: 'Do, or do not. There is no try.',
        nome: 'Yoda'
    },
    {
        detalhamento: 'All serious daring starts from within.',
        nome: 'Harriet Beecher Stowe'
    },
    {
        detalhamento: 'The best teacher is experience learned from failures.',
        nome: 'Byron Pulsifer'
    },
    {
        detalhamento: 'Think how hard physics would be if particles could think.',
        nome: 'Murray GellMann'
    },
    {
        detalhamento: 'Time is the wisest counsellor of all.',
        nome: 'Pericles'
    },
    {
        detalhamento: 'You give before you get.',
        nome: 'Napoleon Hill'
    },
    {
        detalhamento: 'Wisdom begins in wonder.',
        nome: 'Socrates'
    },
    {
        detalhamento: 'Without courage, wisdom bears no fruit.',
        nome: 'Baltasar Gracian'
    },
    {
        detalhamento: 'Change in all things is sweet.',
        nome: 'Aristotle'
    },
    {
        detalhamento: 'What you fear is that which requires action to overcome.',
        nome: 'Byron Pulsifer'
    },
    {
        detalhamento: 'When performance exceeds ambition, the overlap is called success.',
        nome: 'Cullen Hightower'
    },
    {
        detalhamento: 'When deeds speak, words are nothing.',
        nome: 'African proverb'
    },
    {
        detalhamento: 'Real magic in relationships means an absence of judgement of others.',
        nome: 'Wayne Dyer'
    },
    {
        detalhamento: 'I never think of the future. It comes soon enough.',
        nome: 'Albert Einstein'
    },
    {
        detalhamento: 'Skill to do comes of doing.',
        nome: 'Ralph Emerson'
    },
    {
        detalhamento: 'Wisdom is the supreme part of happiness.',
        nome: 'Sophocles'
    },
    {
        detalhamento: 'I believe that every person is born with talent.',
        nome: 'Maya Angelou'
    },
    {
        detalhamento: 'Important principles may, and must, be inflexible.',
        nome: 'Abraham Lincoln'
    },
    {
        detalhamento: 'The undertaking of a new action brings new strength.',
        nome: 'Richard Evans'
    },
    {
        detalhamento: 'The years teach much which the days never know.',
        nome: 'Ralph Emerson'
    },
    {
        detalhamento: 'Our distrust is very expensive.',
        nome: 'Ralph Emerson'
    },
    {
        detalhamento: 'Great talent finds happiness in execution.',
        nome: 'Johann Wolfgang von Goethe'
    },
    {
        detalhamento: 'Faith in oneself is the best and safest course.',
        nome: 'Michelangelo'
    },
    {
        detalhamento: 'Courage is going from failure to failure without losing enthusiasm.',
        nome: 'Winston Churchill'
    },
    {
        detalhamento: 'The two most powerful warriors are patience and time.',
        nome: 'Leo Tolstoy'
    },
    {
        detalhamento: 'Anticipate the difficult by managing the easy.',
        nome: 'Lao Tzu'
    },
    {
        detalhamento: 'Those who are free of resentful thoughts surely find peace.',
        nome: 'Buddha'
    },
    {
        detalhamento: 'A short saying often contains much wisdom.',
        nome: 'Sophocles'
    },
    {
        detalhamento: 'Only do what your heart tells you.',
        nome: 'Princess Diana'
    },
    {
        detalhamento: 'Life is movement-we breathe, we eat, we walk, we move!',
        nome: 'John Pierrakos'
    },
    {
        detalhamento: 'No one can make you feel inferior without your consent.',
        nome: 'Eleanor Roosevelt'
    },
    {
        detalhamento: 'Argue for your limitations, and sure enough theyre yours.',
        nome: 'Richard Bach'
    },
    {
        detalhamento: 'Luck is what happens when preparation meets opportunity.',
        nome: 'Seneca'
    },
    {
        detalhamento: 'Victory belongs to the most persevering.',
        nome: 'Napoleon Bonaparte'
    },
    {
        detalhamento: 'Love all, trust a few, do wrong to none.',
        nome: 'William Shakespeare'
    },
    {
        detalhamento: 'In order to win, you must expect to win.',
        nome: 'Richard Bach'
    },
    {
        detalhamento: 'A goal is a dream with a deadline.',
        nome: 'Napoleon Hill'
    },
    {
        detalhamento: 'You can do it if you believe you can!',
        nome: 'Napoleon Hill'
    },
    {
        detalhamento: 'Smile, breathe, and go slowly.',
        nome: 'Thich Nhat Hanh'
    },
    {
        detalhamento: 'Nobody will believe in you unless you believe in yourself.',
        nome: 'Liberace'
    },
    {
        detalhamento: 'Do more than dream: work.',
        nome: 'William Arthur Ward'
    },
    {
        detalhamento: 'No man was ever wise by chance.',
        nome: 'Seneca'
    },
    {
        detalhamento: 'He that is giddy thinks the world turns round.',
        nome: 'William Shakespeare'
    },
    {
        detalhamento: 'Do something wonderful, people may imitate it.',
        nome: 'Albert Schweitzer'
    },
    {
        detalhamento: 'Do one thing every day that scares you.',
        nome: 'Eleanor Roosevelt'
    },
    {
        detalhamento: 'If you cannot be silent be brilliant and thoughtful.',
        nome: 'Byron Pulsifer'
    },
    {
        detalhamento: 'Who looks outside, dreams; who looks inside, awakes.',
        nome: 'Carl Jung'
    },
    {
        detalhamento: 'What we think, we become.',
        nome: 'Buddha'
    },
    {
        detalhamento: 'The shortest answer is doing.',
        nome: 'Lord Herbert'
    },
    {
        detalhamento: 'All our knowledge has its origins in our perceptions.',
        nome: 'Leonardo da Vinci'
    },
    {
        detalhamento: 'Trusting our intuition often saves us from disaster.',
        nome: 'Anne Wilson Schaef'
    },
    {
        detalhamento: 'Truth is powerful and it prevails.',
        nome: 'Sojourner Truth'
    },
    {
        detalhamento: 'Light tomorrow with today!',
        nome: 'Elizabeth Browning'
    },
    {
        detalhamento: 'Silence is a fence around wisdom.',
        nome: 'German proverb'
    },
    {
        detalhamento: 'Society develops wit, but its contemplation alone forms genius.',
        nome: 'Madame de Stael'
    },
    {
        detalhamento: 'The simplest things are often the truest.',
        nome: 'Richard Bach'
    },
    {
        detalhamento: 'Yesterday I dared to struggle. Today I dare to win.',
        nome: 'Bernadette Devlin'
    },
    {
        detalhamento: 'No alibi will save you from accepting the responsibility.',
        nome: 'Napoleon Hill'
    },
    {
        detalhamento: 'If you can dream it, you can do it.',
        nome: 'Walt Disney'
    },
    {
        detalhamento: 'It is better to travel well than to arrive.',
        nome: 'Buddha'
    }
]

while (contador <= 3) {
    gerarLinha()
    contador = contador + 1;
}

function gerarLinha() {
    index = Math.floor(Math.random() * dados.length);
    nome = dados[index].nome;
    detalhamento = dados[index].detalhamento;
    registrosLocalStorage = {
        codigo: index,
        nome: nome,
        detalhamento: detalhamento
    }
    registros.push(registrosLocalStorage);
    localStorage.setItem('registros', JSON.stringify(registros));
    document.getElementById('accordionExample').innerHTML = '';
    for (const item of registros) {
        let referencia = item.nome.split(' ').join('') + item.codigo;
        document.getElementById('accordionExample').innerHTML +=
            `<div class="accordion-item">
                <h2 class="accordion-header" id="${item.codigo}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${referencia}" aria-expanded="true" aria-controls="${referencia}">
                        <strong>${item.nome} #${item.codigo}</strong>
                    </button>
                </h2>
                <div id="${referencia}" class="accordion-collapse collapse" aria-labelledby="${item.codigo}" data-bs-parent="#accordionExample">
                    <div class="accordion-body">${item.detalhamento}</div>
                </div>
            </div>`
    }
}