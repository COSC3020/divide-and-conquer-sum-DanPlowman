function divideAndConquerSum(a) {
        if (a.length ===0)
        {
            return -1;
        }
        else if (a.length ===1)
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
