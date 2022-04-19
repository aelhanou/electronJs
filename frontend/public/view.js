

let $ = require('jquery')
let fs = require('fs')
const path = require('path')
let filename = 'yoooooooooooo.txt'
let sno = 0

$('#add-to-list').on('click', () => {
    let name = $('#Name').val()
    let email = $('#Email').val()
    fs.appendFile('/home/zer0/Music/graphqlBrief/frontend/public/yoooooooooooo.txt', name + ',' + email + '\n',(err)=>{
        if(err) console.log(err);

        console.log('created');
    })

    addEntry(name, email)
})

function addEntry(name, email) {
    if (name && email) {
        sno++
        let updateString = '<tr><td>' + sno + '</td><td>' + name + '</td><td>'
            + email + '</td></tr>'
        $('#contact-table').append(updateString)
    }
}






function loadAndDisplayContacts() {


    console.log('asfasfasf bro');
    //Check if file exists
    if (fs.existsSync(filename)) {
        let data = fs.readFileSync(filename, 'utf8').split('\n')

        data.forEach((contact, index) => {
            let [name, email] = contact.split(',')
            addEntry(name, email)
        })

    } else {
        console.log("File Doesn\'t Exist. Creating new file.")
        console.log(path.join(__dirname, filename));
        fs.writeFile("/home/zer0/Music/graphqlBrief/frontend/public/" + filename, '', (err) => {
            if (err)
                console.log(err)
        })
    }
}

loadAndDisplayContacts()