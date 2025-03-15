const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/ 2019/05/14/16/43 /rchids- 420282 0__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/ 2019/05/14/16/43 /rchids- 420282 0_ 1280 .jpg",
    описание: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/ 2019/05/14/22/05 /container- 420367 7__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/ 2019/05/14/22/05 /container- 420367 7_ 1280 .jpg",
    описание: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/ 2019/05/16/09/47 /beach- 420678 5__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/ 2019/05/16/09/47 /beach- 420678 5_ 1280 .jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/ 2016/11/18/16/19 /flowers- 183561 9__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/ 2016/11/18/16/19 /flowers- 183561 9_ 1280 .jpg",
    описание: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/ 2018/09/13/10/36 /mountains- 367433 4__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/ 2018/09/13/10/36 /mountains- 367433 4_ 1280 .jpg",
    описание: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/ 2019/05/16/23/04 /landscape- 420857 1__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/ 2019/05/16/23/04 /landscape- 420857 1_ 1280 .jpg",
    описание: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/ 2019/05/17/09/27 /the-alps- 420927 2__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/ 2019/05/17/09/27 /the-alps- 420927 2_ 1280 .jpg",
    описание: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/ 2019/05/16/21/10 /landscape- 420825 5__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/ 2019/05/16/21/10 /landscape- 420825 5_ 1280 .jpg",
    описание: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/ 2019/05/17/04/35 /lighthouse- 420884 3__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/ 2019/05/17/04/35 /lighthouse- 420884 3_ 1280 .jpg",
    описание: "Lighthouse Coast Sea",
  },
];

const galleryContainer = document.querySelector(".gallery");

galleryContainer.innerHTML = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>`
  )
  .join("");

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  const { target } = event;
  if (!target.classList.contains("gallery-image")) return;

  const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" alt="${target.alt}" />
  `);

  instance.show();
});

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const img = event.target.closest(".gallery-image");
  if (!img) return;

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `<img src="${img.dataset.source}" alt="${img.alt}">`;
  document.body.appendChild(modal);

  setTimeout(() => modal.classList.add("show"), 10);

  modal.addEventListener("click", () => {
    const modalImg = modal.querySelector("img");
    modalImg.classList.add("fade-out");

    setTimeout(() => {
      modal.classList.remove("show");
      setTimeout(() => modal.remove(), 300);
    }, 200);
  });
});
