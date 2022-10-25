var PlayerLvl = document.getElementById('level')
var Submit = document.getElementById('sb')
function searchfunc(){
    const token = "17|2bjIThBL1nVrE8fDjPTygHbp8GtTyuTO8NMdmsmx"
    const auth = {headers : {Authorization :`Bearer ` + token}}
    axios.get(`https://toram-id.info/api/v1/monsters/3?level=${PlayerLvl.value}&bonusexp=0&between=9`, auth)
        .then(response => {
            const users = response.data.data;
            const sorted = users.sort((elem1, elem2) => elem2.xp - elem1.xp )
            document.getElementById("app").innerHTML = `
            <h1 class="app-title">Boss Type</h1>
            ${sorted.map(bosstemplate).join("")}`;
            return false
        })
}
Submit.addEventListener('click', searchfunc);

function bonusexp(xp, PlayerLv, BossLv) {
    if (BossLv <= PlayerLv + 5 && PlayerLv - 5 <= BossLv) {
        return `${xp * 11}` ;
    } else if (BossLv <= PlayerLv + 6 && PlayerLv - 6 <= BossLv) {
        return `${xp * 10}` ;
    } else if (BossLv <= PlayerLv + 7 && PlayerLv - 7 <= BossLv) {
        return `${xp * 9}` ;
    } else if (BossLv <= PlayerLv + 8 && PlayerLv - 8 <= BossLv) {
        return `${xp * 7}` ;
    } else if (BossLv <= PlayerLv + 9 && PlayerLv - 9 <= BossLv) {
        return `${xp * 3}` ;
    } else {
        return `${xp}`;
    }
}
function bosstemplate(data0) {
    return `
      <div class="animal">
      <img class="pet-photo" src="${data0.picture}">
      <h2 class="pet-name"><a href="https://toram-id.info/monster/${data0.id}">${data0.name} 
      <span class="species">(${bonusexp(data0.xp, PlayerLvl.value, data0.level)} EXP)</span></a></h2>
      <p><strong>Level:</strong> ${data0.level}</p>
      <p><strong>Element:</strong> ${data0.element.name}</p>
      <p><strong>HP:</strong> ${data0.hp}</p>
      <p><strong>Location:</strong> ${data0.map.name}</p>
      </div>
    `;
}