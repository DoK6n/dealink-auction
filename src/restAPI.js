import print from './print.js';

const url = 'https://rest.dealink.co.kr/auction/group/2?page=0&size=6&sort=createdDate,desc';

const getAPI = async url => {
  const res = await fetch(url);
  const product = await res.json();
  return product;
};

getAPI(url).then(data => {
  data.map((data, index) => {
    print(data, index);
  });
});
