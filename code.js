function divideAndConquerSum(a) {
        if (a.length ===0)
        {
            return 0;
        }
        else if(a.length ===1)
        {
            return a[0];
        }
        else if(a.length <3)
        {
            return divideAndConquerSum(a[0])+divideAndConquerSum(a[1])+divideAndConquerSum(a[2]);
        }
        else
        {
        var min =0;
        var max = a.length;
        var split = Math.floor((min+max/3))
        var Lmid = split;
        var Umid = max-split;
            return divideAndConquerSum(a.slice(0,(split))) + divideAndConquerSum(a.slice((split),(max-split))) + divideAndConquerSum(a.slice((max-split)));
        }
}

console.log(divideAndConquerSum([1,5,2,6,-2,-7,2,7,-5,6,9,-2,2,6]))
