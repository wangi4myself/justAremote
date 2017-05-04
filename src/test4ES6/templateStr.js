// var name = "Bob", time = "today";
// console.info(`Hello ${name}, how are you ${time}?`);
// var greeting = `\`Yo\` World!`;
// console.log(greeting);
//
// function authorize(user, action) {
//
//     console.log(`User ${user.name} is not authorized to do ${action}.`);
//
// }
// let user1={'name':'wangjin','age':'25'};
// authorize(user1,'chifan');

const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data));
