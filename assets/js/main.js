let data = {
    licniAsistent: [
      {
        title: "Lični asistent",
        desc: "Vaš saveznik za efikasnost i olakšanje. Osećajte se sigurno u svakom trenutku.",
        image: "assets/icons/icon-1.svg"
      },
    ],
    specijalniBonusi: [
      {
        title: "Specijalni bonusi",
        desc: "Preuzmite ekskluzivne bonus pakete. Uživajte u posebno prilagođenim nagradama samo za vas.",
        image: "assets/icons/icon-2.svg"
      },
    ],
    limiti: [
        {
          title: "VEĆI LIMITI ISPLATA",
          desc: "Pružamo vam posebnu priliku da otvorite put ka većim sumama i povećanim limitom podizanja novca.",
          image: "assets/icons/icon-3.svg"
        },
      ],
      rezervacijeAvion: [
        {
          title: "REZERVACIJE AVIONSKIH KARATA",
          desc: "Samo jedan upit je dovoljan – omogućavamo brzu i efikasnu avionsku rezervaciju za VIP klijente.",
          image: "assets/icons/icon-4.svg"
        },
      ],
      rezervacijeUlaznice: [
        {
          title: "REZERVACIJE ULAZNICA",
          desc: "Pružamo privilegovanu mogućnost rezervacije ulaznica za VIP klijente - pošaljite upit i garantujemo vam mesto.",
          image: "assets/icons/icon-5.svg"
        },
      ],
      dodatneNagrade: [
        {
          title: "DODATNE NAGRADE",
          desc: "Nadmašujemo vaša očekivanja. Budite spremni za nova iznenađenja i nagrade koje će vas očarati.",
          image: "assets/icons/icon-6.svg"
        },
      ],
  };
  
  function generateHTML(contentData, id) {
    return `<div class="popup-box" id="${id}">
  <img class="popup-icon" src="${contentData.image}"/>
      <h2 class="about-naslov">${contentData.title}</h2>
      <p>${contentData.desc}</p>
    </div>`;
  }
  

  function renderContent(content, id, buttonClass) {
    const popup = document.querySelector(".popup-active");
    const popupContent = document.querySelector(".popup-content-active");
  
    document.querySelector(`.${buttonClass}`).addEventListener("click", function (event) {
      event.preventDefault();
  
      if (popup.classList.contains("show")) {
        return;
      }
  
      popup.style.display = "block";
      popupContent.style.display = "flex";
  
      let contentData = data[content][0];
      let contentHTML = generateHTML(contentData, id);
      popupContent.innerHTML = contentHTML;
  
      var closeBtn = document.createElement("img");
      closeBtn.id = "close-btn";
      closeBtn.src = "assets/icons/CLOSE-03 1.png"; 
      popupContent.appendChild(closeBtn);
  
      closeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
  
        setTimeout(function() {
          popup.style.display = "none";
        }, 300);
  
        setTimeout(function() {
          popup.classList.remove("show");
          popupContent.classList.remove("show");
        }, 10);
      });
  
      setTimeout(function() {
        popup.classList.add("show");
        popupContent.classList.add("show");
      }, 10);
    });
  
    popup.addEventListener("click", function () {
      setTimeout(function() {
        popup.style.display = "none";
      }, 300);
  
      setTimeout(function() {
        popup.classList.remove("show");
        popupContent.classList.remove("show");
      }, 10);
    });
  
    popupContent.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }
  
  
  document.addEventListener("DOMContentLoaded", function () {
    renderContent("licniAsistent", "licniAsistent", "asisstent-btn");
    renderContent("specijalniBonusi", "specijalniBonusi", "bonus-btn");
    renderContent("limiti", "limiti", "limit-btn");
    renderContent("rezervacijeAvion", "rezervacijeAvion", "rezervacije-btn");
    renderContent("rezervacijeUlaznice", "rezervacijeUlaznice", "ulaznice-btn");
    renderContent("dodatneNagrade", "dodatneNagrade", "nagrade-btn");
  });

