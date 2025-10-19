const tabs = document.querySelectorAll(".tab-button");
const tabContent = document.getElementById("tabContent");
const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumbs img");

const categories = {
  new: [
    { title: "Starfield", img: "images/starfield.jpeg", trailer: "https://www.youtube.com/watch?v=kfYEiTdsyas" },
    { title: "Alan Wake 2", img: "images/alanwake2.jpeg", trailer: "https://www.youtube.com/watch?v=dlQ3FeNu5Yw" },
    { title: "Baldur's Gate 3", img: "images/baldursgate3.jpeg", trailer: "https://www.youtube.com/watch?v=XuCfkgaaa08" },
    { title: "Spider-Man 2", img: "images/spiderman2.jpeg", trailer: "https://www.youtube.com/watch?v=1s9Yln0YwCw" },
    { title: "Forza Motorsport", img: "images/forzamotorsports.jpg", trailer: "https://www.youtube.com/watch?v=em4gv1Ietko" },
    { title: "Dead Space Remake", img: "images/deadspace.jpg", trailer: "https://www.youtube.com/watch?v=G5JviLRgXes" },
    { title: "Lies of P", img: "images/liesofp.jpg", trailer: "https://www.youtube.com/watch?v=kXZoKdr-xeo" },
    { title: "Mortal Kombat 1", img: "images/mortalkombat1.jpeg", trailer: "https://www.youtube.com/watch?v=UZ6eFEjFfJ0" },
    { title: "Armored Core VI", img: "images/armoredcore.jpg", trailer: "https://www.youtube.com/watch?v=kKO1s-CUZvY" }
  ],
  popular: [
    { title: "Elden Ring", img: "images/eldenring.jpeg", trailer: "https://www.youtube.com/watch?v=E3Huy2cdih0" },
    { title: "GTA V", img: "images/gta5.jpeg", trailer: "https://www.youtube.com/watch?v=QdBZY2fkU-0" },
    { title: "Cyberpunk 2077", img: "images/cyberpunk.jpg", trailer: "https://www.youtube.com/watch?v=8X2kIfS6fb8" },
    { title: "DOOM Eternal", img: "images/doometernal.jpeg", trailer: "https://www.youtube.com/watch?v=dTA0VhSCCnY" },
    { title: "Witcher 3", img: "images/witcher.jpeg", trailer: "https://www.youtube.com/watch?v=c0i88t0Kacs" },
    { title: "Assassin’s Creed Valhalla", img: "images/acvalhalla.jpg", trailer: "https://www.youtube.com/watch?v=TsxW5G0eUgo" },
    { title: "Resident Evil 4 Remake", img: "images/re4.jpg", trailer: "https://www.youtube.com/watch?v=uGxFz_CzlnI" },
    { title: "Hogwarts Legacy", img: "images/hogwarts.jpeg", trailer: "https://www.youtube.com/watch?v=1O6Qstncpnc" },
    { title: "God of War Ragnarok", img: "images/gowr.jpg", trailer: "https://www.youtube.com/watch?v=EE-4GvjKcfs" }
  ],
  upcoming: [
    { title: "High On Life 2", img: "images/highonlife.jpg", trailer: null },
    { title: "Resident Evil Requiem", img: "images/rerequiem.jpeg", trailer: null },
    { title: "Grand Theft Auto VI", img: "images/gta6.jpeg", trailer: "https://www.youtube.com/watch?v=QdBZY2fkU-0" }
  ],

  indie: [
    { title: "Hollow Knight", img: "images/hollowknight.jpeg", trailer: "https://www.youtube.com/watch?v=UAO2urG23S4" },
    { title: "Celeste", img: "images/celeste.jpg", trailer: "https://www.youtube.com/watch?v=70d9irlxiB4" },
    { title: "Stardew Valley", img: "images/stardewvalley.jpeg", trailer: "https://www.youtube.com/watch?v=8A7A1X1TVNc" },
    { title: "Undertale", img: "images/undertale.jpeg", trailer: "https://www.youtube.com/watch?v=SqjY_-beWi0" },
    { title: "Hades", img: "images/hades.jpg", trailer: "https://www.youtube.com/watch?v=91t0ha9x0AE" }
  ],
  best: [
    { title: "The Witcher 3", img: "images/witcher.jpeg", trailer: "https://www.youtube.com/watch?v=c0i88t0Kacs" },
    { title: "Red Dead Redemption 2", img: "images/rdr2.jpeg", trailer: "https://www.youtube.com/watch?v=eaW0tYpxyp0" },
    { title: "The Elder Scrolls V: Skyrim", img: "images/skyrim.jpeg", trailer: "https://www.youtube.com/watch?v=JSRtYpNRoN0" },
    { title: "The Last of Us 2", img: "images/tlou2.jpeg", trailer: "https://www.youtube.com/watch?v=vhII1qlcZ4E" },
    { title: "God of War", img: "images/gow.jpeg", trailer: "https://www.youtube.com/watch?v=K0u_kAWLJOA" }
  ]
};


function renderTab(tab) {
  tabContent.innerHTML = "";
  categories[tab].forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");

    let content = `<img src="${game.img}" alt="${game.title}"><h4>${game.title}</h4>`;
    
    if (game.trailer) {
      content += `<a href="${game.trailer}" target="_blank">Fragmanı İzle</a>`;
    } else {
      content += `<p>Bu oyunun fragmanı henüz mevcut değil.</p>`;
    }
    
    card.innerHTML = content;
    tabContent.appendChild(card);
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab-button.active").classList.remove("active");
    tab.classList.add("active");
    renderTab(tab.dataset.tab);
  });
});

// Sayfa yüklendiğinde "Yeni Çıkanlar" tabı gösterilsin
renderTab("new");

thumbs.forEach(thumb => {
  thumb.addEventListener("mouseenter", () => {
    mainImage.src = thumb.dataset.image;
  });
});