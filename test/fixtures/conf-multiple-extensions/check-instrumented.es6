function probe () {}

// When instrumented there will be references to variables like
// __cov_pwkoI2PYHp3LJXkn_erl1Q in the probe() source.
module.exports = function () {
  return /\bcov_\B/.test(probe + '')
}
