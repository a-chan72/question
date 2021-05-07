//　宣言
const titleText = document.getElementById('title');
const questionText = document.getElementById('question');
const btn1 = document.getElementById('btn1'); 
const textbox = document.getElementById("ipt");
let value;

// 音の挿入
const correctAudio = new Audio();
correctAudio.src = 'yes.mp3';

const incorrectAudio = new Audio();
incorrectAudio.src = 'no.mp3';

let sum;
let correctAnswer;

// 問題文
const questions = [
    { question: 'タロウ君のお母さんには5人の子供がいます。イチロー、ジロー、サブロー、シロー、あとの1人はなんでしょう？', answer:'タロウ' },
    { question: '何をあげても「いらない。」と言うのはどこの国の人？',answer:'日本'},
    { question: 'ロダン作の「考える人」は、何を考えているでしょうか？',answer:'特に何も考えていない。'},
    { question: 'アニメ「エヴァンゲリオン」より、使徒が来た時のパターン色は何色か漢字で答えよ。', answer:'青' },
    { question: 'たくさんかってもお金を払わなくてもいいのって何？',　answer:'草',　},
    { question: '中華料理店でよく見かける天津飯の考案された国はどこか答えよ。',answer:'日本'　},
    { question: 'いつも消防車に乗ってる動物ってなに？',answer:'馬'}
];

//　カウント
function writeQuestion() {
    titleText.textContent = `Question${sum + 1}` ;
    questionText.textContent = questions[sum].question;
}

// ボタンを押したら実行される
function onAnswer() {
    value = textbox.value;
    if(value === ''){
        alert('入力してください。');
        //画面更新.画面更新の中断
        return false;
    }

    if (value === questions[sum].answer) {
        console.log('正解');
        correctAnswer++;
        correctAudio.play();
    } else {
        console.log('不正解');
        incorrectAudio.play();
    }

    sum++;

//回答数の表示
    if (sum >= questions.length) {
        alert(`${questions.length}問中${correctAnswer}問正解です`);
        onStart();
    } else {
        writeQuestion();
    }
    console.log(value);
    textbox.value = '';
}

function onStart() {
    sum = 0;
    correctAnswer = 0;
    writeQuestion();

}
// btn1.onclick = function() {

// }

onStart();