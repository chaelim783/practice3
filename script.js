// 이름 생성 함수
function generateName() {
  const firstName = getRandomElement(firstNameData);
  const lastName = getRandomElement(lastNameData);
  return `${firstName}${lastName}`;
}

// 한자 및 뜻 가져오기
function getChineseAndMeaning(name) {
  const chinese = chineseData[name] || '데이터 없음';
  const meaning = meaningData[name] || '데이터 없음';
  return { chinese, meaning };
}

// 랜덤 요소 가져오기
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 버튼 클릭 이벤트 리스너
document.getElementById('generateButton').addEventListener('click', function() {
  const nameResultElement = document.getElementById('nameResult');
  const nameMeaningElement = document.getElementById('nameMeaning');

  const name = generateName();
  const { chinese, meaning } = getChineseAndMeaning(name);

  nameResultElement.textContent = `생성된 이름: ${name}`;
  nameMeaningElement.textContent = `한자: ${chinese}, 뜻: ${meaning}`;

  // 애니메이션 효과 추가
  nameResultElement.classList.remove('animate__fadeIn');
  nameMeaningElement.classList.remove('animate__fadeIn');
  void nameResultElement.offsetWidth; // 트리거 리플로우
  void nameMeaningElement.offsetWidth; // 트리거 리플로우
  nameResultElement.classList.add('animate__fadeIn');
  nameMeaningElement.classList.add('animate__fadeIn');
});

// 미리 정의된 데이터 (실제로는 외부에서 가져와야 함)
const firstNameData = ["승", "지", "민", "우", "예", "도", "하", "민", "윤", "서", "재", "태", "진", "효", "준", "현", "승", "성", "민"];
const lastNameData = ["김", "이", "박", "최", "정", "강", "조", "윤", "임", "장", "한", "오", "서", "신", "권", "황", "안", "송", "전", "홍"];

const chineseData = {};
const meaningData = {};

// 각 이름 조합에 대해 한자와 의미 생성
for (let i = 0; i < firstNameData.length; i++) {
  for (let j = 0; j < lastNameData.length; j++) {
    const fullName = firstNameData[i] + lastNameData[j];
    chineseData[fullName] = generateRandomChineseCharacter() + ' ' + generateRandomChineseCharacter();
    meaningData[fullName] = generateMeaning(firstNameData[i]) + '와 ' + generateMeaning(lastNameData[j]);
  }
}

// 랜덤 한자 생성 함수 (실제 사용 시에는 의미 있는 한자를 사용해야 함)
function generateRandomChineseCharacter() {
  const characters = '一二三四五六七八九十百千';
  return characters[Math.floor(Math.random() * characters.length)];
}

// 의미 생성 함수 (실제 사용 시에는 의미 있는 설명을 추가해야 함)
function generateMeaning(namePart) {
  const meanings = {
    "승": "승리",
    "지": "지혜",
    "민": "민첩",
    "우": "우주",
    "예": "예술",
    "도": "도덕",
    "하": "하늘",
    "윤": "윤택",
    "서": "서사",
    "재": "재능",
    "태": "태평",
    "진": "진실",
    "효": "효도",
    "준": "준수",
    "현": "현명",
    "성": "성취",
    "김": "황금",
    "이": "백자",
    "박": "백성",
    "최": "최고",
    "정": "바름",
    "강": "강인",
    "조": "조화",
    "임": "임금",
    "장": "장수",
    "한": "한결같음",
    "오": "오성",
    "신": "신뢰",
    "권": "권세",
    "황": "황금빛",
    "안": "안정",
    "송": "소나무",
    "전": "전문",
    "홍": "풍부"
  };
  return meanings[namePart] || '의미 없음';
}

console.log(chineseData);
console.log(meaningData);
