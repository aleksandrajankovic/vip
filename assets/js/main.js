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
  
  function generateHTML(data, id) {
    return `<div id="${id}">
      <h2 class="about-naslov">${data.title}</h2>
      <p>${data.desc}</p>
    </div>`;
  }
  
  function generateHTML(data, id) {
    return `<div id="${id}">
        <h2 class="about-naslov">${data.title}</h2>
        <p>${data.desc}</p>
      </div>`;
  }
  
  function renderContent(content, id, buttonClass) {
    const popup = document.querySelector(".popup-active");
    const popupContent = document.querySelector(".popup-content-active");
  
    document.querySelector(`.${buttonClass}`).addEventListener("click", function (event) {
      event.preventDefault();
      popup.style.display = "block";
      popupContent.style.display = "flex";
  
      let contentData = data[content][0];
      let contentHTML = generateHTML(contentData, id);
      popupContent.innerHTML = contentHTML;
  
      var closeBtn = document.createElement("span");
      closeBtn.id = "close-btn";
      popupContent.appendChild(closeBtn);
      closeBtn.textContent = "X";
  
      closeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        popup.style.display = "none";
      });
    });
  
    popup.addEventListener("click", function () {
      popup.style.display = "none";
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

  var h1Elements = document.querySelectorAll('h1');

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {

  h1Elements.forEach(function (h1) {
    h1.style.fontFamily = "'Fira Sans', sans-serif";
  });
} else {

  h1Elements.forEach(function (h1) {
    h1.style.fontFamily = "'Roboto Flex Regular', sans-serif";
  });
}