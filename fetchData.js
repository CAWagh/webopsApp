
const getTodos = async () => {
  const response = await fetch("https://icanhazdadjoke.com/slack");
  const data = await response.json();
  return data;
};

setInterval(() => {
  getTodos()
    .then((data) => {
      let txt;
      let para = document.createElement("p");
      let element = document.getElementById("new");
      element.innerHTML = "";
      txt = document.createTextNode(data.attachments[0].fallback);
      para.appendChild(txt);
      var snd = new Audio("/alert.mp3");
      snd.play();
      setTimeout(() => {alert(data.attachments[0].fallback)}, 500);
      element.appendChild(para);
      
      console.log("resolved", data);
    })
    .catch((error) => console.log("rejected", error));
}, 6000);
