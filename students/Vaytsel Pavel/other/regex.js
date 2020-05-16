const text = `
Lorem 'ipsum dolor sit amet', consectetur adipiscing aren't, Ut ullamco ut 'aliquip ex ea commodo' consequat. 
Duis aute irure aren't in  cillum dolore eu fugiat nulla pariatur. 'Excepteur sint' 'occaecat' aren't`;

//replace single quotes to doubles without apostrophe
console.log(text.replace(/'/g, '"').replace(/([a-zA-Z])"([a-zA-Z])/g, "$1'$2"));
