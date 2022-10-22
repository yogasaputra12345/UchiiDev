
const token = "17|2bjIThBL1nVrE8fDjPTygHbp8GtTyuTO8NMdmsmx"
    const createTr = user => {
        const tr = document.createElement('li')
        // add user details to `li`
        tr.textContent = `${user.name} (Lv ${user.level}) EXP: ${(user.xp) * 11}, Map: ${user.map.name}`
        return tr
    }
    

    const appendToDOM = users => {
        const table = document.getElementById('list')
        //iterate over all users
        users.map(user => {
            table.appendChild(createTr(user))
        })
    }
    const auth = {
        headers : {
            Authorization :`Bearer ` + token
        }
    }
    const apii = new URL(`https://toram-id.info/api/v1/monsters/3`)
    const playerlv = "200";
    axios.get(`${apii}?level=${playerlv}&bonusexp=0&between=5`, auth)
        .then(response => {
            const users = response.data.data;
            const sorted = users.sort((elem1, elem2) => elem2.xp - elem1.xp )
            appendToDOM(sorted)
    })