const totalImages = 86; // 画像の総数を指定
const images = [];
for (let i = 1; i <= totalImages; i++) {
    images.push(i + '.png');
}

const selectedImages = new Set();
let count = 0;

// ボタンをクリックしたときの処理
function buttonClick1() {
    if (count >= 5) {
        alert('おま5ですよ');
        return;
    }

    // 重複しないようにする
    let randomImage;
    do {
        const randomIndex = Math.floor(Math.random() * images.length);
        randomImage = images[randomIndex];
    } while (selectedImages.has(randomImage));
    
    selectedImages.add(randomImage);
    
    let P1Element = document.getElementById('P1');

    // 新しい画像要素を作成して追加
    let randomImageElement = document.createElement('img');
    randomImageElement.src = 'Stock Icons2/' + randomImage;
    randomImageElement.alt = 'ランダム画像';
    P1Element.appendChild(randomImageElement);

    count++;

}

// リセットボタンクリックしたときの処理
function reset() {
    // 選択された画像セットとカウント変数をリセット
    selectedImages.clear();
    count = 0;

    // P1要素内の全ての画像を削除
    let P1Element = document.getElementById('P1');
    P1Element.innerHTML = '';
}

// ボタン要素を取得
let button2 = document.getElementById('btn');
let resetButton = document.getElementById('reset');

// clickしたときのイベント、clickしたあとの行動
button2.addEventListener('click', buttonClick1);
resetButton.addEventListener('click', reset);
