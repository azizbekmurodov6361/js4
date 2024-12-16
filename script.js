function user(ism, data, yiling) {
    return console.log(`${ism}, Yoshingiz: ${data-yiling}`);
}
user(prompt("Ismingizni kiriting"), prompt("Hozirgi yilni kiriting"), prompt("Tug'ulgan yilingizni kiriting"));

function misol() {
    const num1 = Math.floor(Math.random() * 100); 
    const num2 = Math.floor(Math.random() * 100);  
    const usul = ['+', '-', '*', '/']; 
    const taxmin = usul[Math.floor(Math.random() * usul.length)];

    let setjavob;

    switch (taxmin) {
        case '+':
            setjavob = num1 + num2;
            break;
        case '-':
            setjavob = num1 - num2;
            break;
        case '*':
            setjavob = num1 * num2;
            break;
        case '/':

            while (num2 === 0) {
                num2 = Math.floor(Math.random() * 100);
            }
            javob = (num1 / num2).toFixed(2);
            break;
    }

    return { javob: `${num1} ${taxmin} ${num2}`, setjavob: setjavob };
}

function savol() {
    const savolprt = parseInt(prompt("Nechta misol ishlashni xohlaysiz?"));
    let Count = 0;

    for (let i = 0; i < savolprt; i++) {
        const { javob, setjavob } = misol();
        const result = parseFloat(prompt(`${i+1}-Misol : ${javob} = ?`));

        if (result === setjavob) {
            console.log(`Sizning javobingiz to'g'ri - ${setjavob}`);
            Count++;
        } else {
            console.log(`Sizning javobingiz noto'g'ri - ${result}! To'g'ri javob - ${setjavob}`);
        }
    }

}

savol();
