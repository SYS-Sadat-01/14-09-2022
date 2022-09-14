const arr= [
    {
        "name":"Yousaf",
        "lname":"Sadat",
        "Dep":"Civil_Engineering",
        "id_no":"kpt_962",
        "phone":"0707570272",
        "email":"sayedyousufsadaat1@gmail.com",
        "photo":"09-14-2022\pic.jpg"

        
    },


    {
        "name":"Hamza",
        "lname":"Nawabi",
        "Dep":"Civil_Engineering",
        "id_no":"kpt_962",
        "phone":"0707570272",
        "email":"sayedyousufsadaat1@gmail.com",
        "photo":"E:\Startupistan\09-14-2022\pic.jpg"

        
    },

    {
        "name":"Sharifullah",
        "lname":"Shirzad",
        "Dep":"Civil_Engineering",
        "id_no":"kpt_962",
        "phone":"0707570272",
        "email":"sayedyousufsadaat1@gmail.com",
        "photo":"E:\Startupistan\09-14-2022\pic.jpg"

        
    }
]
 var count = arr.length;
 var placeholder = document.querySelector('#data')
 var out = '';

 var i = 0;
 var j = 1;

 while(i<count){
    out += `
            <tr>
                  <td>${j++}</td>
                  <td>${arr[i].name}</td>
                  <td>${arr[i].lname}</td>
                  <td>${arr[i].Dep}</td>
                  <td>${arr[i].id_no}</td>
                  <td>${arr[i].phone}</td>
                  <td>${arr[i].email}</td>
                  <td>${arr[i].photo}</td>
            </tr>
            `
            i++
            placeholder.innerHTML = out;
 }
