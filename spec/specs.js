describe('coinCounter', function() {
  it("determines if a quarter is in fact the denomination of change needed", function() {
    expect(coinCounter(25, true, true, true)).to.eql([1,0,0,0]);
  });

  it("correctly returns number of quarters and dimes", function() {
    expect(coinCounter(45, true, true, true)).to.eql([1,2,0,0]);
  });

  it("correctly decides on an amount of nickles to provide in change", function() {
    expect(coinCounter(30, true, true, true)).to.eql([1,0,1,0]);
  });

  it("correctly identifies all change", function() {
    expect(coinCounter(67, true, true, true)).to.eql([2,1,1,2]);
  })

});
