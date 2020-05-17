const quotationChanger = /(^| |\n|\B)'(.+?\n*.+?)'( |\.|\!|\?|$|\n)/g;

const nameTest = /^[a-zа-я]{2,20}$/gi;
const telTest = /^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/g;
const emailTest = /^[^\.\-\\/_]?([a-z0-9]+[\.\-_]?)+[^\.\-_]@[^\.\-_]([a-z0-9\.\-_]+)\.([a-z0-9]{2,6})$/gi;

const isValid = (testField, elementDOM) => {
   if (document.querySelector(`#${elementDOM}`).value.search(testField) === -1) {
      document.querySelector(`#${elementDOM}`).classList.add('invalid');
      document.querySelector(`.${elementDOM}`).classList.add('active');
   } else {
      document.querySelector(`#${elementDOM}`).classList.remove('invalid');
      document.querySelector(`.${elementDOM}`).classList.remove('active');
   }
}

document.querySelector('#change').addEventListener('click', () => {
   const textArea = document.querySelector('#regexp-changer');
   let changedText = textArea.value.replace(quotationChanger, '$1"$2"$3');
   document.querySelector('#regexp-result').value = changedText;
});

document.querySelector('#send').addEventListener('click', () => {
   isValid(nameTest, 'name');
   isValid(telTest,'tel');
   isValid(emailTest, 'email');
});