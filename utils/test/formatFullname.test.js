const format = require('../formatFullname');
const expect = require('chai').expect;

describe('Format', () => {
  it('should return an error if "fullname" arg is not a string', () => {
    expect(format(undefined)).to.equal('Error');
    expect(format(12)).to.equal('Error');
    expect(format({})).to.equal('Error');
    expect(format([])).to.equal('Error');
    expect(format(function() {})).to.equal('Error');
  });
  it('should return an error if there is no "fullname" arg', () => {
    expect(format()).to.equal('Error');
  });
  it('should return an error if the format is not <firstName> <lastName>', () => {
    expect(format('John Doe Test')).to.equal('Error');
    expect(format('John')).to.equal('Error');
  });
  it('should properly format fullname', () => {
    expect(format('john doe')).to.equal('John Doe');
    expect(format('JOHN DOE')).to.equal('John Doe');
    expect(format('JOHN doE')).to.equal('John Doe');
  });
});