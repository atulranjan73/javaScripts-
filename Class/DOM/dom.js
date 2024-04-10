var phoneBook = []
function addcontact(){
    const name  = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    const contact = {
        name: name ,
        phonNumber : phone ,
    };
    phoneBook.push(contact);
    console.log(phoneBook);
}

function redercontact(){
    phoneBook.forEach((item , index) =>{
        resut += '<p> Name : ${item.name} </p> <p></p>'
    })
}
document.getElementById("addcontact").addEventListener("click" ,addcontact);