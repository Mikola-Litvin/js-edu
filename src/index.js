/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      
      const master = 800;
      const basic = 500;

      let res = 0;

      if (knowsProgramming) {
        res = Math.ceil(master / config[focus]);
      }
      else {
        res = Math.ceil((master + basic) / config[focus]);
      }

      return res;
  };
  