
let arr = [ 1 ,2 ,3, 4, 5 ]


let result = arr.map ( data => data * 2)
let reduced = arr.reduce ( ( accumulated , cur_data ) => {
    return accumulated  + cur_data 
});

let filtered = arr.filter ( data => data % 2 == 0);

