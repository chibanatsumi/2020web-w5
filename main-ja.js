const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温華氏40度で外は寒かった。 :insertx:は出かけた。 :inserty:に着いた。  :insertz:. 体重110ポンドのBobは驚いたが、 :insertx:は驚かなかった。 :inserty:ではよくあることだった。';
let insertX = ['智','翔','雅紀','和也','潤'];
let insertY = ['東京ドーム','ディズニーランド','家'];
let insertZ = ['コンサートをしていた','デートしていた','踊っていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("日本").checked) {
    const weight = Math.round(110 * 0.454) + ' kg';
    const temperature =  '摂氏' + Math.round((40-32) * 5 / 9) + '度';
    newStory = newStory.replace('華氏40度',temperature);
    newStory = newStory.replace('110ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
