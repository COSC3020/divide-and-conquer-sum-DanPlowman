function divideAndConquerSum(a) {
        if (a.length ===0)
        {
            return 0;
        }
        else if (a.length <2)
        {
            return a[0];
        }
        else 
        {
        var min =0;
        var max = a.length;
        var split = Math.ceil((min+max/3))
        let b=a.splice(0,split);
        let c=a.splice(0,split);

            return divideAndConquerSum(a) + divideAndConquerSum(b) + divideAndConquerSum(c);
        }
}
let arr =[0];
console.log(JSON.stringify(divideAndConquerSum(arr)));
console.log(JSON.stringify(arr.reduce(function(a, b) { return a + b; }, 0)));
console.log(JSON.stringify(divideAndConquerSum(arr)) == JSON.stringify(arr.reduce(function(a, b) { return a + b; }, 0)));
arr =[];
console.log(JSON.stringify(divideAndConquerSum(arr)));
console.log(JSON.stringify(arr.reduce(function(a, b) { return a + b; }, 0)));
console.log(JSON.stringify(divideAndConquerSum(arr)) == JSON.stringify(arr.reduce(function(a, b) { return a + b; }, 0)));
arr =[7];
console.log(JSON.stringify(divideAndConquerSum(arr)));
console.log(JSON.stringify(arr.reduce(function(a, b) { return a + b; }, 0)));
console.log(JSON.stringify(divideAndConquerSum(arr)) == JSON.stringify(arr.reduce(function(a, b) { return a + b; }, 0)));
