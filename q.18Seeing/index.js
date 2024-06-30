var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var location = ["mexico", "poland", "australia", "canada", "pakistan"];
// • Print your array in its original order
console.log("original:");
console.log(location);
// • Print your array in alphabetical order without modifying the actual lis
console.log("copy");
console.log(__spreadArray([], location, true).sort());
// • Show that your array is still in its original order by printing it.
console.log("original:");
console.log(location);
// Print your array in reverse alphabetical order without changing the order of the
//  original list.
console.log("copy:");
console.log(__spreadArray([], location, true).sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("original:");
console.log(location);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("original:");
console.log(location.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original
//  order.
console.log("original:");
console.log(location.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
// changed.
console.log("original:");
console.log(location.sort());
//  Sort to change your array so it’s stored in reverse alphabetical order. Print the list to 
// show that its order has changed.
console.log("original:");
console.log(location.sort().reverse());
