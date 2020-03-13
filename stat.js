function reduce(array, combine, start) {
    var current = start;
        for (var element of array) {
            current = combine(current, element);
               }return current;
} 

var max=function(data){
    return  reduce(
        data,
        function(a,b){
            return a<b.credit?a:b.credit;
        },10)
}