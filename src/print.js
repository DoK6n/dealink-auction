import createTags from './createTags.js';

const timer = (closingTime, status, index) => {
  const remainingTime = document.querySelector('.remainingTime' + index);

  setInterval(() => {
    const dday = new Date(Date.parse(closingTime)).getTime();
    const today = new Date().getTime();
    const gap = dday - today;
    const day = Math.abs(Math.ceil(gap / (1000 * 60 * 60 * 24)));
    let hour = Math.abs(Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let min = Math.abs(Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60)));
    let sec = Math.abs(Math.ceil((gap % (1000 * 60)) / 1000));

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    if (status === 'AUCTION_COMPLETED' || gap === 0) {
      remainingTime.innerHTML = '경매 종료';
    } else {
      remainingTime.innerHTML = `D-${day} ${hour}:${min}:${sec} 남음`;
    }
  }, 1000);
};

const print = (data, index) => {
  createTags(index);

  const productImage = document.querySelector('.productImage' + index);
  const dibs = document.querySelector('.dibs' + index);
  const productName = document.querySelector('.productName' + index);
  const price = document.querySelector('.price' + index);

  productImage.setAttribute('style', 'background-image: url(' + data.imagePath + ')');
  productName.innerHTML = data.productName;
  price.innerHTML = '가격 ' + parseInt(data.currentPrice).toLocaleString('ko-KR') + '원';
  dibs.innerHTML = '♥' + data.count;

  timer(data.closingTime, data.status, index);
};

export default print;
