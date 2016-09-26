(function(exports) {

  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed:" + assertionToCheck + " is NOT truthy");
    } else {
      console.log("tests passed");
    }
  }

  function isFalse(assertionToCheck) {
    if(assertionToCheck) {
      throw new Error("Assertion failed:" + assertionToCheck + " is NOT falsy");
    }
  }

  exports.isTrue = isTrue;
  exports.isFalse = isFalse;
})(this);
