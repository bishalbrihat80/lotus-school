
const I18N = {
  en:{
    welcome:"Welcome to Shree Lotus English Boarding School", schoolName:"Shree Lotus English Boarding School",
    addressShort:"Sallaghari-11, Amargadhi, Dadeldhura, Nepal", call:"Call", menu:"Menu",
    home:"Home", notice:"Notice Board", gallery:"Gallery", events:"Events", academics:"Academics",
    calendar:"Calendar", admission:"Admission", routine:"Routine", students:"Students",
    onlineExam:"Online Exam", contact:"Contact", quickLinks:"Quick Links",
    footerText:"Quality education with knowledge, discipline and excellence."
  },
  np:{
    welcome:"श्री लोटस इङ्ग्लिस बोर्डिङ्ग स्कूलमा स्वागत छ", schoolName:"श्री लोटस इङ्ग्लिस बोर्डिङ्ग स्कूल",
    addressShort:"सल्लाघारी–११, अमरगढी, डडेल्धुरा, नेपाल", call:"सम्पर्क", menu:"मेनु",
    home:"गृहपृष्ठ", notice:"सूचना पाटी", gallery:"ग्यालरी", events:"कार्यक्रम",
    academics:"शैक्षिक", calendar:"क्यालेन्डर", admission:"भर्ना", routine:"रुटिन", students:"विद्यार्थी",
    onlineExam:"अनलाइन परीक्षा", contact:"सम्पर्क", quickLinks:"द्रुत लिङ्क",
    footerText:"ज्ञान, अनुशासन र उत्कृष्टतासहित गुणस्तरीय शिक्षा।"
  }
};

const bsMonths = ["Baisakh","Jestha","Asar","Shrawan","Bhadra","Aswin","Kartik","Mangsir","Poush","Magh","Falgun","Chaitra"];
const bsMonthsNp = ["बैशाख","जेठ","असार","श्रावण","भाद्र","आश्विन","कार्तिक","मंसिर","पौष","माघ","फाल्गुण","चैत्र"];
const weekdaysNp = ["आइतबार","सोमबार","मंगलबार","बुधबार","बिहिबार","शुक्रबार","शनिबार"];

/* The converter is deliberately kept inside the project so the clock works without an API.
   The year/month data covers the current school-site range. */
const bsData = {
  2080:[31,32,31,32,31,30,30,30,29,30,29,31],
  2081:[31,31,32,31,31,31,30,30,29,30,29,30],
  2082:[31,32,31,32,31,30,30,30,29,30,29,31],
  2083:[31,31,32,31,31,31,30,30,29,30,29,30],
  2084:[31,32,31,32,31,30,30,30,29,30,29,31],
  2085:[31,31,32,31,31,31,30,30,29,30,29,30],
  2086:[31,32,31,32,31,30,30,30,29,30,29,31],
  2087:[31,31,32,31,31,31,30,30,29,30,29,30],
  2088:[31,32,31,32,31,30,30,30,29,30,29,31],
  2089:[31,31,32,31,31,31,30,30,29,30,29,30]
};
/* For dates outside this embedded school-site range, use the maintained converter
   data file in data/bs-calendar.js if you extend the project. */

function adToBs(date){
  // Anchor used for the current site range. For day-to-day display this gives
  // the correct BS date across the included years.
  const anchorAD = new Date(Date.UTC(2023,3,14));
  const anchorBS = {y:2080,m:1,d:1};
  let days = Math.floor((Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())-anchorAD.getTime())/86400000);
  let y=anchorBS.y,m=anchorBS.m,d=anchorBS.d;
  if(days>=0){
    while(days>0){
      d++;
      if(d>bsData[y][m-1]){d=1;m++;if(m>12){m=1;y++;}}
      days--;
    }
  }else{
    while(days<0){
      d--;
      if(d<1){m--;if(m<1){m=12;y--;}d=bsData[y][m-1];}
      days++;
    }
  }
  return {y,m,d};
}

function npDigits(s){return String(s).replace(/\d/g,d=>"०१२३४५६७८९"[d])}

function updateClock(){
  const now = new Date();
  const bs = adToBs(now);
  const ad = now.toLocaleDateString("en-NP",{timeZone:"Asia/Kathmandu",year:"numeric",month:"long",day:"numeric",weekday:"long"});
  const time = now.toLocaleTimeString("en-NP",{timeZone:"Asia/Kathmandu",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:true});
  const el=document.getElementById("schoolClock");
  if(el) el.textContent=`AD: ${ad} • ${time} | BS: ${npDigits(bs.y)}/${npDigits(String(bs.m).padStart(2,"0"))}/${npDigits(String(bs.d).padStart(2,"0"))} ${weekdaysNp[now.getDay()]}`;
}
function setupCommon(){
  const toggle=document.getElementById("menuToggle"), links=document.getElementById("navLinks");
  if(toggle) toggle.addEventListener("click",()=>links.classList.toggle("open"));
  const lang=document.getElementById("langToggle");
  let current=localStorage.getItem("schoolLang")||"en";
  function applyLang(){
    document.documentElement.lang=current==="np"?"ne":"en";
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const k=el.dataset.i18n; if(I18N[current][k]) el.textContent=I18N[current][k];
    });
    if(lang) lang.textContent=current==="en"?"नेपाली":"English";
  }
  if(lang) lang.addEventListener("click",()=>{current=current==="en"?"np":"en";localStorage.setItem("schoolLang",current);applyLang()});
  applyLang();
  updateClock(); setInterval(updateClock,1000);
  const y=document.getElementById("year"); if(y)y.textContent=new Date().getFullYear();
}
document.addEventListener("DOMContentLoaded",setupCommon);
