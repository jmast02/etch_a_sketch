var body = document.getElementsByTagName('body')[0]
var div = document.getElementById('tbl')
var table = document.createElement('table')
var tableBody = document.createElement('tbody')
table.appendChild(tableBody)






function createGrid(){

  

    for(var r = 0; r < 16; r++){

        var tr = document.createElement('tr')
        tableBody.appendChild(tr)
        tr.addEventListener('mouseover', function(e){
            e.target.classList.add('color')
        })
        
        


        for(var c = 0; c < 16; c++){

            var td = document.createElement('td')
            tr.appendChild(td)
            td.addEventListener('mouseover', function(e){
                e.target.classList.add('color')
            })
            

            
        }

        }

    div.appendChild(table)

}



createGrid();

function clearGrid(){
    location.reload();
}




 













 