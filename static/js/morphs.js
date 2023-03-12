async function load_morph_types(){
    let response = await axios.get(`https://ep2-data-api.herokuapp.com/${window.location.pathname}`);
    let morph = response.data;
    const morph_list = document.getElementById("morph-list")
    
    for (let i = 0; i < Object.keys(morph).length; i++) {


        let tr = document.createElement("tr");
        tr.setAttribute("id", `row_${morph[i].name}`)
        morph_list.append(tr);
        let morphTr = document.getElementById(`row_${morph[i].name}`);
        
        let td = document.createElement("td");
        td.setAttribute("id", `title_${morph[i].name}`)
        morphTr.append(td)
        let morphTd = document.getElementById(`title_${morph[i].name}`);
        morphTd.innerText = morph[i].name;

        let newTd = document.createElement("td");
        newTd.setAttribute("id", `bio_${morph[i].name}`)
        morphTr.append(newTd);
        let morphDesc = document.getElementById(`bio_${morph[i].name}`);
        morphDesc.innerHTML = morph[i].biological;
    }
}