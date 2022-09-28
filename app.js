const jewishDays = {
  0: 'יום ראשון',
  1: 'יום שני',
  2: 'יום שלישי',
  3: 'יום רביעי',
  4: 'יום חמישי',
  5: 'יום שישי',
  6: 'יום שבת',
};

// let daysMap = new Map();
// daysMap.set()

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Please check "${selection}" selector, no such element exist`);
};

/***************************************************************************************
 * Jewish calendar REST API
 * https://www.hebcal.com/
 * https://www.hebcal.com/converter/?cfg=json&gy="
 * https://www.hebcal.com/home/195/jewish-calendar-rest-api
 * const dateUrl = 'https://www.hebcal.com/converter?cfg=json&gy=2021&gm=11&gd=18&g2h=1';
 ****************************************************************************************/

const dateTitle = getElement('.header__date');

const dateUrl = 'https://www.hebcal.com/converter?cfg=json';
fetch(dateUrl)
  .then((data) => data.json())
  .then((res) => {
    const date = new Date();
    dateTitle.innerHTML = `
            ${jewishDays[date.getDay()]} ,
            ${res.hebrew}  |
            ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}
            `;
  });
