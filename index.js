import { log as sayIt } from 'utils';

function shoutify(strings, ...values) {
  values = values.map((val) => {
    return val.toUpperCase();
  });

  return String.raw(strings, ...values);
}

let event = {
  name: 'WSD', desc: 'awesome'
};
let { name, desc } = event;
let loudly = shoutify `${'name'} is ${desc}!`;

sayIt(loudly);
