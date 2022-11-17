const number = parseInt(prompt('ente an integer'));


for (let i = 1; i <= 10; i++){


    const result = i * number;

    document.write(`${number} * ${i} = ${result}` +'<br>')

}