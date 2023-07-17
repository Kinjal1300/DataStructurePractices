const str = 'ex3454am65p43le';
const pickString = (str, len = 0, res = '') => {
   if(len < str.length){
      const char = parseInt(str[len], 10) ? '' : str[len];
      return pickString(str, len+1, res+char);
   };
   return res;
};
console.log(pickString(str));


// ---------------------------------------


let s = "leetcode";

function reverse(str){
    if(str.length <= 1){
        return str;
    }
    else {
        return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
    }
}

console.log(reverse('Test'))