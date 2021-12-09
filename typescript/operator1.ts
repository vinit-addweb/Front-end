var w = 5+2;
var e = 10;
var r = 12+7;

if((w == e) && (w==r) && (r==e))
{
    console.log("All are equal");
}
else if ((w > e) && (w>r)){
    console.log(w+" is greator")
}

else if ((w < e) && (e>r)){
    console.log(e+" is greator")
}

else if ((r > e) && (w<r)){
    console.log(r+" is greator")
}