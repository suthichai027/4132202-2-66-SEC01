    var num = 10;
    let name = "Wun";
    age = 20;

    fruit = ["apple","mango","tangmo"];
    ojb = {name:"Suthichai",age:20,tel:"0917100322"};

    data = {adress: ["49/1", "jira", "Buriram", 3100],name:"John"}

    console.log(fruit[1]);
    console.log(ojb.tel);
    console.log(data.adress[2]);

        document.getElementById("msg").innerHTML = data.adress[2];

        let longTxe = data.name + " : " + fruit[0];

        longTxe = `${data.name} : 
                   ${fruit[1]}`;

          $(function () {
            $("#msg").html(longTxe);
          }); //jQuery re
