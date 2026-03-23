//task 1
let data = [
    { event: "click", time: 1 },
    { event: "click", time: 2 },
    { event: "scroll", time: 3 },
    { event: "scroll", time: 4 },
    { event: "click", time: 5 }
];
let info = [
    {
        event: data[0].event,
        count: 1
    }
];
let prev = '';
let indexOfinfo=1;

for (let i = 1; i < data.length; i++) {
    c=1;
    
    prev = data[i - 1].event;
    if (prev == data[i].event) {
        info[indexOfinfo-1].count =++c;
        continue;
    }
    else {
        info[indexOfinfo] = {
            event: data[i].event ,
            count : 1
        };
    }
    indexOfinfo++;
}

console.log(info);