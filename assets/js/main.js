let data = {
    licniAsistent: [
      {
        title: "Lični asistent",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi reprehenderit nisi odio ex quod, ut aperiam quis ducimus saepe, provident laborum nobis accusamus fugiat quasi cupiditate! Libero, quasi alias.",
      },
    ],
    specijalniBonusi: [
      {
        title: "Specijalni bonusi",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi reprehenderit nisi odio ex quod, ut aperiam quis ducimus saepe, provident laborum nobis accusamus fugiat quasi cupiditate! Libero, quasi alias.",
      },
    ],
    limiti: [
        {
          title: "VEĆI LIMITI ISPLATA",
          desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi reprehenderit nisi odio ex quod, ut aperiam quis ducimus saepe, provident laborum nobis accusamus fugiat quasi cupiditate! Libero, quasi alias.",
        },
      ],
      rezervacijeAvion: [
        {
          title: "REZERVACIJE AVIONSKIH KARATA",
          desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi reprehenderit nisi odio ex quod, ut aperiam quis ducimus saepe, provident laborum nobis accusamus fugiat quasi cupiditate! Libero, quasi alias.",
        },
      ],
      rezervacijeUlaznice: [
        {
          title: "REZERVACIJE ULAZNICA",
          desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi reprehenderit nisi odio ex quod, ut aperiam quis ducimus saepe, provident laborum nobis accusamus fugiat quasi cupiditate! Libero, quasi alias.",
        },
      ],
      dodatneNagrade: [
        {
          title: "DODATNE NAGRADE",
          desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi reprehenderit nisi odio ex quod, ut aperiam quis ducimus saepe, provident laborum nobis accusamus fugiat quasi cupiditate! Libero, quasi alias.",
        },
      ],
  };
  
  function render(podatak) {
    renderAsistent(podatak.licniAsistent[0], "licniAsistent");
    renderBonusi(podatak.specijalniBonusi[0], "specijalniBonusi");
  }
  render(data);
  
  function renderAsistent(asistent, id) {
    var print = `<div id="${id}">
      <h2 class="about-naslov">${asistent.title}</h2>
      <p>${asistent.desc}</p>
    </div>`;
    return print;
  }
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".popup-active");
    const popupContent = document.querySelector(".popup-content-active");

    document.querySelector(".asisstent-btn").addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "block";
        popupContent.style.display = "flex";

        let asisstentData = data.licniAsistent[0];
        let asisstentContent = renderAsistent(asisstentData, "licniAsistent");
        popupContent.innerHTML = asisstentContent;

    });
        var noviElement = document.createElement("span");
        noviElement.id = "close-btn";
        popup.appendChild(noviElement);
        noviElement.textContent = "X";

        let closeBtn = document.querySelector("#close-btn");
        closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
        popup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});

function renderBonusi(bonus, id1) {
    var print = `<div id="${id1}">
      <h2 class="about-naslov">${bonus.title}</h2>
      <p>${bonus.desc}</p>
    </div>`;
    return print;
  }
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".popup-active");
    const popupContent = document.querySelector(".popup-content-active");

    document.querySelector(".bonus-btn").addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "block";
        popupContent.style.display = "flex";

        let bonusData = data.specijalniBonusi[0];
        let bonusContent = renderBonusi(bonusData, "specijalniBonusi");
        popupContent.innerHTML = bonusContent;

    });
        var noviElement = document.createElement("span");
        noviElement.id = "close-btn";
        popup.appendChild(noviElement);
        noviElement.textContent = "X";

        let closeBtn = document.querySelector("#close-btn");
        closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
        popup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});