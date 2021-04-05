const list = document.querySelector('#list');

const createTags = index => {
  const auction = document.createElement('div');
  const productImage = document.createElement('div');
  const remainingTime = document.createElement('div');
  const dibs = document.createElement('div');
  const productInfo = document.createElement('div');
  const productName = document.createElement('p');
  const price = document.createElement('p');
  auction.className = 'auction';
  productImage.className = 'productImage';
  remainingTime.className = 'remainingTime';
  dibs.className = 'dibs';
  productInfo.className = 'productInfo';
  productName.className = 'productName';
  price.className = 'price';

  auction.classList.add('auction'+index);
  productImage.classList.add('productImage'+index);
  remainingTime.classList.add('remainingTime'+index);
  dibs.classList.add('dibs'+index);
  productInfo.classList.add('productInfo'+index);
  productName.classList.add('productName'+index);
  price.classList.add('price'+index);

  productImage.append(remainingTime);
  productImage.append(dibs);
  auction.append(productImage);

  productInfo.append(productName);
  productInfo.append(price);
  auction.append(productInfo);

  list.append(auction);
};

export default createTags;
