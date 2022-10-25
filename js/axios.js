const BOSSTYPE = {'-1': 'Boss', '0': 'Miniboss', '1': 'Normal Monster',};
var PlayerLvl = document.getElementById('level')
const rawlv = PlayerLvl.value;
var Submit = document.getElementById('sb')
function searchfunc(){
    const token = "17|2bjIThBL1nVrE8fDjPTygHbp8GtTyuTO8NMdmsmx"
    const auth = {headers : {Authorization :`Bearer ` + token}}
    axios.get(`https://toram-id.info/api/v1/monsters/3?level=${PlayerLvl.value}&bonusexp=0&between=9`, auth)
        .then(response => {
            const users = response.data.data;
            const sorted = users.sort((elem1, elem2) => elem2.xp - elem1.xp )
            console.log(sorted)
            document.getElementById("app").innerHTML = `
            ${sorted.map(bosstemplate).join("")}`;
        })
}

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
Submit.addEventListener('click', searchfunc);
function bosstemplate(RawData) {
    return `
      <div class="animal">
      <img class="pet-photo" src="${RawData.picture}">
      <h2 class="pet-name"><a href="https://toram-id.info/monster/${RawData.id}">${RawData.name} 
      <span class="species">(${bonusexp(RawData.xp, rawlv, RawData.level)} EXP)</span></a></h2>
      <p class="infoboss"><strong>Level:</strong> ${RawData.level}</p>
      <p class="infoboss"><strong>Elemen:</strong> ${RawData.element.name}</p>
      <p class="infoboss"><strong>HP:</strong> ${RawData.hp}</p>
      <p class="infoboss"><strong>Lokasi:</strong> ${RawData.map.name}</p>
      </div>
    `;
}