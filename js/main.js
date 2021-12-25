const souvenir = document.getElementById("souvenir");
if (souvenir) {
  souvenir.addEventListener("click", (e) => {
    if (e.target.dataset && e.target.dataset.type === "moreinfo") {
      const modal = document.getElementById("souvenirModal");
      const city = e.target.dataset.city;
      const modalTitle = document.getElementById("souvenirModalLabel");
      let modalBody = "";
      switch (city) {
        case "isfahan":
          modalBody =
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi esse totam! Provident, quae vitae neque ipsum ullam repellat corrupti modi labore molestiae voluptas recusandae. Quibusdam nihil, fugiat modi ut voluptates officia ea ullam ex eius nobis voluptatibus maiores. Cumque enim, id corrupti eaque pariatur voluptatibus consequatur aliquam molestiae. Tenetur!";
          break;
        case "mashhad":
          modalBody =
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, eos! Consequatur aliquam accusamus odio assumenda? Ullam id, inventore enim iste itaque quam quos ipsa, error similique eius veritatis corrupti ad unde, explicabo eos? Laborum neque eligendi minus delectus quas id?";
          break;
        case "shiraz":
          modalBody =
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, suscipit. Error, ad. Nam, consequuntur. Unde, maxime at! Ducimus, quia sapiente cumque perspiciatis hic blanditiis libero natus ad odio asperiores at beatae, repudiandae esse quidem reiciendis, laborum facere doloremque impedit minus. Voluptate error necessitatibus vitae debitis.";
          break;
        case "tabriz":
          modalBody =
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi esse totam! Provident, quae vitae neque ipsum ullam repellat corrupti modi labore molestiae voluptas recusandae. Quibusdam nihil, fugiat modi ut voluptates officia ea ullam ex eius nobis voluptatibus maiores. Cumque enim, id corrupti eaque pariatur voluptatibus consequatur aliquam molestiae. Tenetur!";
          break;
        case "tehran":
          modalBody =
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, eos! Consequatur aliquam accusamus odio assumenda? Ullam id, inventore enim iste itaque quam quos ipsa, error similique eius veritatis corrupti ad unde, explicabo eos? Laborum neque eligendi minus delectus quas id?";
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
