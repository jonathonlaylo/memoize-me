/*jshint esversion: 6 */
  //get element
  //if element exits in cache
  //serve the vlaue from code
  //else
  //if element does not exist in cache
  //save to the cache
  //serve element
function memoizeQuery() {
  var cache = {};
  return function (sel) {
    if (cache.hasOwnProperty('sel')){
      console.log('returning cache');
      return cache[sel];
    } else {
      console.log('setting cache');
      cache[sel] = document.querySelectorAll(sel);
      return cache[sel];
      //shorthand
      // return cache[sel] = document.querySelectorAll(sel);
    }
  };
}