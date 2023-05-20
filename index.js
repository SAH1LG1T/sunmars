window.onload = () => {
  let e = document.getElementById("ss"),
    t = document.getElementById("stickyNav"),
    n = document.getElementById("stickyMob");
  let reviewCard = document.getElementById("rc");
  let service = document.getElementById("serviceL");
  let h=document.getElementsByClassName("home")[0]
  let a=document.getElementsByClassName("about")[0]
  let sol=document.getElementsByClassName("sol")[0]
  let cons=document.getElementsByClassName("cons")[0]

  let wel=document.getElementsByClassName("welPage")[0]
  let ds = document.getElementById("ds");
  let dss = document.getElementById("dss");

  let hovered=false
service.addEventListener("mouseover",()=>{
  if(hovered==false){
  ds.style.display="flex"
  ds.style.position="absolute"

 hovered=true
  }
})

ds.addEventListener("mouseleave",()=>{
  if(hovered==true){
  ds.style.display="none"
  hovered=false
  }
})

h.addEventListener("mouseover",()=>{
  if(hovered==true){
  ds.style.display="none"
 hovered=false
  }
})
a.addEventListener("mouseover",()=>{
  if(hovered==true){
  ds.style.display="none"
 hovered=false
  }
})
sol.addEventListener("mouseover",()=>{
  if(hovered==true){
  ds.style.display="none"
 hovered=false
  }
})
cons.addEventListener("mouseover",()=>{
  if(hovered==true){
  ds.style.display="none"
 hovered=false
  }
})
// pro.addEventListener("mouseover",()=>{
//   if(hovered==true){
//   ds.style.display="none"
//  hovered=false
//   }
// })


  // get slider round circle
  let f, s, th, ft, fft;
  f = document.getElementById("f");
  s = document.getElementById("s");
  th = document.getElementById("t");
  ft = document.getElementById("ft");
  fft = document.getElementById("fft");
  var l = window.innerWidth;
  if(l<1300 && l>1200){
let fi= document.getElementsByClassName("fif")
for (let index = 0; index < fi.length; index++) {
fi[index].style.height="15px"
fi[index].style.width="15px"
fi[index].style.marginTop="7px"

  
}
  }
  window.innerHeight;
  e.innerText = l;
  let d = 0;
  let reached = 0;
  function o(e, t, n, l) {
    let d = document.getElementById(e),
      o = t,
      i = n - t,
      s = t < n ? 1 : -1,
      a = Math.abs(Math.floor(l / i)),
      r = setInterval(() => {
        
        (o += s), (d.innerText = o + "+"), o == n && clearInterval(r);
      }, a);
  }
  window.addEventListener("scroll", () => {
    var e = this.scrollY;
    550 <= e
      ? ((t.style.display = "flex"),
        (t.style.position = "fixed"),
        (t.style.marginTop = "-5.5%"),
        l < 800 &&
          ((n.style.display = "flex"),
          (n.style.zIndex = 2),
          (n.style.position = "fixed"),
          (n.style.color = "#fff")))
      : e < 650 &&
        ((t.style.display = "none"), l < 800 && (n.style.display = "none")),
      600 < e &&
        ((d += 1), 1 == d && (o("n1", 0, 100, 3e3), o("n2", 0, 50, 2e3)));
    if (e > 800) {
      t.style.zIndex = 2;
    }
  })
  //let box= document.getElementById("box")
  // setting card slider on screen sizes
  function slider(time, st, id, moveTo) {
    setInterval(() => {
      let box = document.getElementById(id);
      let currentSP = box.scrollLeft;
      box.scrollLeft = box.scrollLeft + moveTo;

      if (currentSP > 250 && currentSP < 400) {
        f.style.backgroundColor = "white";
        s.style.backgroundColor = "#130f40";
      } else if (currentSP > 500 && currentSP < 700) {
        f.style.backgroundColor = "white";

        s.style.backgroundColor = "white";
        th.style.backgroundColor = "#130f40";
      } else if (currentSP > 700 && currentSP < 1100) {
        f.style.backgroundColor = "white";

        s.style.backgroundColor = "white";
        th.style.backgroundColor = "white";
        ft.style.backgroundColor = "#130f40";
      } else if (currentSP > 900 && currentSP < 2000) {
        f.style.backgroundColor = "white";

        s.style.backgroundColor = "white";
        th.style.backgroundColor = "white";
        ft.style.backgroundColor = "white";
        fft.style.backgroundColor = "#130f40";
      }
    }, st);
    // again start slider from begining
    setInterval(() => {
      let box = document.getElementById(id);
      box.scrollLeft = 0;
      fft.style.backgroundColor = "#fff";
      f.style.backgroundColor = "#130f40";
    }, time);
  }
  if (l > 800) {
    slider(14000, 2000, "testimonials", 300);
  } else {
    slider(5000, 1500, "testimonials", 300);
    slider(4500, 1500, "nbs", 330);
  }
};

function sendEmail() {
  const emailBody = {
    SecureToken: "445bfc2e-a67b-4a89-809b-290055bd260e",
    To: "Sales@sunmars.in",
    From: "kirti2198@gmail.com",
    Subject: "New Contact Form Enquiry",
    Body: `Name: ${document.getElementById("name").value}  <br>
    Email: ${document.getElementById("email").value} <br>
    PhoneNo: ${document.getElementById("phone").value} <br> 
    Site : ${document.getElementById("site").value} <br>
    Message : ${document.getElementById("message").value} <br>
    `,
  };
  Email.send(emailBody).then((message) => alert(message));
}

function sendSubscriptionEmail() {
  const emailBody = {
    SecureToken: "445bfc2e-a67b-4a89-809b-290055bd260e",
    To: "Sales@sunmars.in",
    From: "kirti2198@gmail.com",
    Subject: "Subscription Mail",
    Body: `Email: ${
      document.getElementById("subscribe-email-2").value
    }is subscribed to our news letter
    `,
  };
  Email.send(emailBody).then((message) => alert(message));
}
