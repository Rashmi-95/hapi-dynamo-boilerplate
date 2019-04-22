const Chai = require('chai');
const Lab = require('lab');

exports.lab = Lab.script();
const { lab } = exports;
const { expect } = Chai;

const controllers = require('../../app/controllers');

lab.experiment('Trial testing', () => {
  lab.test('Getting trial', async () => {
    const result = await controllers.trial.get();
    expect(result).to.eq('trial');
  });
});
