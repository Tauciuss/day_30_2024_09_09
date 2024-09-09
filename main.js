const fetchRandomUser = () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        user = data.results[0];
        document.getElementById("picture").src = user.picture.large;
        document.getElementById("userTitle").textContent = `Hi, My name is`
        document.getElementById("user_value").textContent = `${user.name.title} ${user.name.first} ${user.name.last}`
       
      });
    }
    fetchRandomUser()
    
    const updateInfo = (title, value) => {
      document.getElementById("userTitle").textContent = title;
      document.getElementById("user_value").textContent = value;
    }; 
    
var person_circle = document.getElementById("name");
var envelope = document.getElementById("email")
var calendar = document.getElementById("date")
var bi_map = document.getElementById("map")
var telephone = document.getElementById("phone")
var lock = document.getElementById("pass")


const nameInfo = () => {
    updateInfo("Hi, My name is", `${user.name.first} ${user.name.last}`);
    person_circle.setAttribute("class","active");
    envelope.setAttribute("class","");
    calendar.setAttribute("class","");
    bi_map.setAttribute("class","");
    telephone.setAttribute("class","");
    lock.setAttribute("class","");
};
const emailInfo = () => {
    updateInfo("My email address is", user.email)
    person_circle.setAttribute("class","");
    envelope.setAttribute("class","active");
    calendar.setAttribute("class","");
    bi_map.setAttribute("class","");
    telephone.setAttribute("class","");
    lock.setAttribute("class","");
};
const dateInfo = () => {
    updateInfo("My birthday is", user.dob.date.slice(0, 10))
    person_circle.setAttribute("class","");
    envelope.setAttribute("class","");
    calendar.setAttribute("class","active");
    bi_map.setAttribute("class","");
    telephone.setAttribute("class","");
    lock.setAttribute("class","");
};
const mapInfo = () => {
    updateInfo("My address is", `${user.location.street.number} ${user.location.street.name}`)
    person_circle.setAttribute("class","");
    envelope.setAttribute("class","");
    calendar.setAttribute("class","");
    bi_map.setAttribute("class","active");
    telephone.setAttribute("class","");
    lock.setAttribute("class","");
};
const phoneInfo = () => {
    updateInfo("My phone number is", user.cell)
    person_circle.setAttribute("class","");
    envelope.setAttribute("class","");
    calendar.setAttribute("class","");
    bi_map.setAttribute("class","");
    telephone.setAttribute("class","active");
    lock.setAttribute("class","");
};
const passInfo = () => {
    updateInfo("My password is", user.login.password)
    person_circle.setAttribute("class","");
    envelope.setAttribute("class","");
    calendar.setAttribute("class","");
    bi_map.setAttribute("class","");
    telephone.setAttribute("class","");
    lock.setAttribute("class","active");
};

openNew = () => document.getElementById('new').style.display = 'block'
closeNew = () =>document.getElementById('new').style.display = 'none'
      