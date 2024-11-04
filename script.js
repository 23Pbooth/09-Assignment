let array = []


document.getElementById("btnsubmit").onclick = function(){ 

    const nameInput = document.getElementById('txtName').value;
    const directorInput = document.getElementById('txtDirector').value;
    const ratingInput = document.getElementById('txtRating').value

    
    const newItem = { name: nameInput, director: directorInput, rating: ratingInput };
    array.push(newItem);

   
    updateTable();

    
    document.getElementById('dataForm').reset();
}

function updateTable(){
    const tableBody = document.getElementById("table_Container").getElementsByTagName('tbody')[0]
    tableBody.innerHTML = ''
    array.forEach(item => {
        const newRow = tableBody.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2)

        cell1.textContent = item.name;
        cell2.textContent = item.director;
        cell3.textContent = item.rating;
})
}
/*
function displayTable(i){
    let dsp = document.getElementById("tbody")
        dsp.innerHTML = ""
    let td = document.createElement("td")
    td.textContent = array[i].name;
    dsp.appendChild(td);
    td = document.createElement("td");
    td.textContent = array[i].type;
    dsp.appendChild(td);

    
}

document.getElementById("btnsubmit").onclick = function(){
    let cName = document.getElementById("txtName").value;
    let cDirec = document.getElementById("txtDirector").value;
    let cRating = document.getElementById("txtRating").value
    let obj = {
        name: cName,
        director: cDirec,
        rating: cRating,
    }
    array.push(obj)
    displayTable()
}
 */