/**
 * @jest-environment jsdom
 */

const { loadNextQuiz, getSelectedOption, deselected } = require('./quiz');

// Mocking the DOM elements and functions
document.body.innerHTML = `
  <div id="quiz">
    <div id="question"></div>
    <input type="radio" id="a" class="answer">
    <input type="radio" id="b" class="answer">
    <input type="radio" id="c" class="answer">
    <input type="radio" id="d" class="answer">
  </div>
  <button id="submit"></button>
  <button id="next"></button>
  <button id="previous"></button>
`;

const answerElements = document.querySelectorAll(".answer");

// Mocking quizData
const quizData = [
    {
        question: "What is the primary goal of sex education?",
        options:[
            "To promote abstinence only",
            "To provide comprehensive information on sexual health",
            "To discourage any discussion about sex",
            "To focus solely on the risks of sexual activity"
        ],
        correct: 1,
        checked: -1
    },
    {
        question: "At what age is it recommended to start sex education for children?",
        options:[
            "10-12 years old",
            "5-7 years old",
            "15-17 years old",
            " 2-3 years old"
        ],
        correct: 1,
        checked: -1
    },
    {
        question: "Which sexually transmitted infection (STI) is caused by a virus?",
        options:[
            "Chlamydia",
            "Gonorrhea",
            "Syphilis",
            "Human Papillomavirus (HPV)"
        ],
        correct: 1,
        checked: -1
    },
    {
        question: "What is the menstrual cycle?",
        options:[
            "The monthly process of ovulation in females",
            "A yearly hormonal change in males",
            "The process of sperm production in males",
            "The growth of body hair in puberty"
        ],
        correct: 0,
        checked: -1
    },
    {
        question: "What is the importance of using contraception?",
        options:[
            "To prevent any form of intimacy",
            "To control someone's reproductive choices",
            "To reduce the risk of unintended pregnancies and STIs",
            "Contraception is not necessary in committed relationships"
        ],
        correct: 2,
        checked: -1

    },
    {
        question: "What is the most effective method of preventing unintended pregnancies and sexually transmitted infections (STIs)?",
        options:[
            "Abstinence",
            "Condom use",
            "Birth control pills",
            "Praying for protection"
        ],
        correct: 1,
        checked: -1

    },
    {
        question: "What is the primary role of parents and guardians in sex education?",
        options:[
            "To prevent any discussion about sex",
            "To be the sole providers of sex education",
            "To supplement school-based sex education with open and age-appropriate discussions",
            "To leave sex education entirely to schools"
        ],
        correct: 2,
        checked: -1

    },
    {
        question: "Which of the following statements about sexually transmitted infections (STIs) is true?",
        options:[
            "STIs can only be transmitted through sexual intercourse",
            "Condoms provide 100% protection against all STIs.",
            "Some STIs can be transmitted through skin-to-skin contact.",
            "STIs have no impact on reproductive health."
        ],
        correct: 2,
        checked:-1

    },
    {
        question: "What is the purpose of teaching about the concept of \"sexual health\" in sex education?",
        options:[
            "To discourage any discussion about sex",
            "To focus solely on avoiding diseases",
            "To promote a holistic understanding of physical, emotional, and social aspects of sexuality",
            "To limit discussions to reproductive health only"
        ],
        correct: 2,
        checked: -1
    },
    {
        question: "Which of the following is an example of a long-acting reversible contraceptive method?",
        options:[
            "Birth control pills",
            "Condoms",
            "Hormonal patches",
            "Intrauterine device (IUD)"
        ],
        correct: 3,
        checked: -1

    },
];

// Mocking global variables
let currentQuiz = 0;
let score = 0;

// Your code to initialize the quiz
loadNextQuiz();

// Unit tests
test("loadNextQuiz should update the question and options", () => {
    expect(document.getElementById("question").innerText).toContain("1:");
    expect(document.getElementById("a").nextSibling.innerText).toBe(quizData[0].options[0]);
    expect(document.getElementById("b").nextSibling.innerText).toBe(quizData[0].options[1]);
    expect(document.getElementById("c").nextSibling.innerText).toBe(quizData[0].options[2]);
    expect(document.getElementById("d").nextSibling.innerText).toBe(quizData[0].options[3]);
});

test("getSelectedOption should return the index of the selected option", () => {
    answerElements[1].checked = true;
    expect(getSelectedOption()).toBe(1);
});

test("deselected should uncheck all answer elements", () => {
    answerElements.forEach((element) => (element.checked = true));
    deselected();
    answerElements.forEach((element) => expect(element.checked).toBe(false));
});