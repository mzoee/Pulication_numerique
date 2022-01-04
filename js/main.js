const souvenir = document.getElementById("souvenir");
if (souvenir) {
  souvenir.addEventListener("click", (e) => {
    if (e.target.dataset && e.target.dataset.type === "moreinfo") {
      const modal = document.getElementById("souvenirModal");
      const city = e.target.dataset.city;
      const modalTitle = document.getElementById("souvenirModalLabel");
      let modalBody = "";
      switch (city) {
        case "ispahan":
          modalBody =
            "Cette technique consiste à réaliser des motifs, le plus souvent des formes en étoile, en incrustant de fines baguettes de bois (ébène, Teck, jujubier, oranger, rosier), laiton (pour les parties dorées), et os de chameau (parties blanches). L'ivoire, l'or et l'argent peuvent également être utilisés pour les pièces de collection.";
          break;
        case "mashhad":
          modalBody =
            "L'Iran est de loin le premier producteur mondial de Safran, également connu sous le nom d'épice dorée, avec plus de 185 tonnes produites en 2002, ce qui représente plus de 90% de la récolte mondiale.";
          break;
        case "shiraz":
          modalBody =
            "L'amidon, le sucre, l'eau de rose, la cardamome, l'huile et le safran sont les ingrédients utilisés dans la préparation de ce bonbon.";
          break;
        case "tabriz":
          modalBody =
            "Le baklava de Tabriz est connu sous le nom de baklava d'Istanbul. Ce baklava a un goût très agréable et est entré dans d'autres villes d'Iran depuis Tabriz. Les principaux ingrédients du baklava sont la farine, le sucre, les œufs et la cardamome. Le baklava a différents types et formes et en termes de goût, il a des saveurs de pistache, de noix de coco et d'amande. Des noyaux de noix, des amandes ou des pistaches peuvent également y être utilisés. ";
          break;
        case "tehran":
          modalBody =
            "Le doogh, cette boisson iranienne populaire, a une définition simple : ((diluer le yaourt avec de l'eau ou des résidus de babeurre de yaourt dilué))";
          break;
        default:
          modalBody = "";
      }
      modal.querySelector(".modal-body").textContent = modalBody;
      modalTitle.textContent = `${city.toUpperCase()} SOUVENIR`;
      modal.show();
    }
  });
}
