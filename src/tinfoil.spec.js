const expect = require('chai').expect;
const TinFoil = require('./tinfoil').TinFoil;

describe('Password Generator', () => {
  it('should have a password generator function', () => {
    expect(Object.prototype.hasOwnProperty.call(TinFoil, 'generateRandomPassword')).to.equal(true);
  });

  it('should generate a random number', () => {
    const randomNumber = TinFoil.getRandomArrayIndex(0, 100);
    expect(randomNumber).to.be.below(100);
    expect(randomNumber).to.be.above(0);
  });

  it('should generate a random password without special characters', () => {
    const randomPassword = TinFoil.generateRandomPassword(12, false);
    console.log('Password:', randomPassword);
    expect(typeof randomPassword).to.equal('string');
    expect(randomPassword.length).to.equal(12);
  });

  it('should generate a random password with special characters', () => {
    const randomPassword = TinFoil.generateRandomPassword(16, true);
    console.log('Password with Special:', randomPassword);
    expect(typeof randomPassword).to.equal('string');
    expect(randomPassword.length).to.equal(16);
  });
});
