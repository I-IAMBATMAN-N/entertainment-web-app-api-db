"use strict";

/* ======================================= General  variables ======================================= */
const getData = async () => {
  try {
    const raw = await fetch(`https://jb-fm-api.netlify.app/api/stream-service`);
    const data = raw.json();

    return data;
  } catch (err) {
    return err;
  }
};

const getMovies = async () => {
  const raw = await fetch(
    `https://jb-fm-api.netlify.app/api/stream-service/movies`
  );
  const data = raw.json();

  return data;
};

const getSeries = async () => {
  const raw = await fetch(
    `https://jb-fm-api.netlify.app/api/stream-service/tv-series`
  );
  const data = raw.json();

  return data;
};

const getBookmarked = async () => {
  const raw = await fetch(
    `https://jb-fm-api.netlify.app/api/stream-service/bookmarked`
  );
  const data = raw.json();

  return data;
};

//Header items
// - nav items -
const navItems = document.querySelectorAll(".list-item");
// - user icon -
const userIcon = document.querySelectorAll(".user-icon");

//Page containers
const mainInput = document.getElementById("main-input");
const trending = document.querySelector(".trending-container");
const recommended = document.querySelector(".recommended-container");

/* ======================================= Rest sections variables ======================================= */
let homePage = document.querySelector(".home");
let moviesContainer = document.querySelector(".movies");
let tvShows = document.querySelector(".tv-shows");
let bookmarked = document.querySelector(".bookmarked");
const search = document.querySelector(".search");

const homePageSection = homePage.querySelector(".recommended-container");
const moviesContainerSection = moviesContainer.querySelector(
  ".recommended-container"
);
const tvShowsSection = tvShows.querySelector(".recommended-container");
const bookmarkedSectionMovies = bookmarked.children[0].querySelector(
  ".recommended-container"
);
const bookmarkedSectionTVShows = bookmarked.children[1].querySelector(
  ".recommended-container"
);
const searchSection = search.querySelector(".recommended-container");
const containers = [homePage, moviesContainer, tvShows, bookmarked, search];

let bookmarkIcons;

let content;

let movieItems;
let serieItems;
let bookmarkedItems;

/* ======================================= General*/
function bookmarkCheck() {
  // console.log("BOOKMARK CHECK ACTIVE");
  // const movieItems = document.querySelectorAll(".movie-item");
  // movieItems.forEach((item) => {
  //
  // checks acc. to window.innerWidth device type and returns event string
  const deviceEvent = function () {
    let event = "";
    if (window.innerWidth <= 768) {
      event = "touchstart";
    } else {
      event = "click";
    }

    return event;
  };

  bookmarkIcons.forEach((bookmark) => {
    bookmark.addEventListener("click", function (event) {
      //
      // console.log("CLICKING BOOKMARK");
      //
      const movieTitle = String(
        event.target.closest(".movie-item").children[2].children[1].innerText
      );

      let title = "";

      if (movieTitle.search(" ") > -1) {
        title = movieTitle.replace(/ /g, "-");
      } else {
        title = movieTitle;
      }

      const updateContent = async () => {
        const raw = await fetch(
          `https://jb-fm-api.netlify.app/api/stream-service/bookmark/${title}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = raw.json();

        return data;
      };
      //
      homePage = document.querySelector(".home");
      moviesContainer = document.querySelector(".movies");
      tvShows = document.querySelector(".tv-shows");
      bookmarked = document.querySelector(".bookmarked");

      updateContent().then((res) => {
        //
        content = res.data;
        // console.log("content", content);
        movieItems = content.filter(
          (item) => item.category.toLowerCase() === "movie"
        );
        // console.log("movieItems", movieItems);
        serieItems = content.filter(
          (item) => item.category.toLowerCase() === "tv series"
        );
        // console.log("serieItems", serieItems);
        bookmarkedItems = content.filter((item) => item.isBookmarked === true);
        // console.log("bookmarkedItems", bookmarkedItems);

        if (homePage.classList.contains("active")) {
          // console.log("ALL");

          fillTrending();
          fillRecommended();

          bookmarkCheck();
        } else if (moviesContainer.classList.contains("active")) {
          // console.log("MOVIES");
          fillMovies();

          bookmarkCheck();
        } else if (tvShows.classList.contains("active")) {
          // console.log("TV SERIES");
          fillTVShows();

          bookmarkCheck();
        } else if (bookmarked.classList.contains("active")) {
          // console.log("BOOKMARKED");
          fillBookmarked();

          bookmarkCheck();
        }
      });
    });
  });
}
function mainInputListener() {
  mainInput.addEventListener("input", function () {
    //
    let mainIndex = 0;
    function displayContainer() {
      containers.forEach((container, index) => {
        if (container.classList.contains("active")) {
          if (index === 0) {
            containers.forEach((container) => {
              if (container.classList.contains("active")) {
                container.classList.remove("active");
              }
            });
            search.classList.add("active");
          } else if (index === 1 || index === 2) {
            // console.log(containers[index].children[0].children[1]);
            containers[index].children[0].children[1].innerHTML = ``;
            mainIndex = index;
          } else if (index === 3) {
            containers[index].children[0].children[1].innerHTML = ``;
            containers[index].children[1].children[1].innerHTML = ``;
            mainIndex = index;
            // containers[index].children[0].children[1].innerHTML = ``;
          }
        }
      });
    }
    /* ======================================= Main Input Search function ======================================= */
    /* searches on input relevant content acc. to main-input inner text*/
    function displayItems() {
      let counter = 0;
      searchSection.innerHTML = "";
      //
      content.forEach((item) => {
        if (
          item.title.toLowerCase().search(mainInput.value.toLowerCase()) >= 0
        ) {
          counter++;
          if (mainIndex === 0) {
            searchSection.innerHTML += fillItemSm(item);
          } else if (mainIndex === 1) {
            if (item.category === "Movie") {
              moviesContainerSection.innerHTML += fillItemSm(item);
            }
          } else if (mainIndex === 2) {
            if (item.category === "TV Series") {
              tvShowsSection.innerHTML += fillItemSm(item);
            }
          } else if (mainIndex === 3) {
            if (item.isBookmarked) {
              if (item.category === "Movie") {
                bookmarkedSectionMovies.innerHTML += fillItemSm(item);
              } else if (item.category === "TV Series") {
                bookmarkedSectionTVShows.innerHTML += fillItemSm(item);
              }
            }
          }
        }
        if (mainInput.value.length > 0) {
          searchSection.previousElementSibling.innerText = `Found '${counter}' result${
            counter > 1 ? "s" : ""
          } on '${mainInput.value}'`;
        } else {
          containers.forEach((container) => {
            if (container.classList.contains("active")) {
              container.classList.remove("active");
            }
          });
          homePage.classList.add("active");
        }
      });
    }
    //
    displayContainer();
    //
    displayItems();
  });
}
function mainHeaderListener() {
  navItems.forEach((navItem, index) => {
    navItem.addEventListener("click", function () {
      containers.forEach((container) => {
        if (container.classList.contains("active")) {
          container.classList.remove("active");
        }
      });
      containers[index].classList.add("active");

      if (index === 0) {
        mainInput.setAttribute("placeholder", "Search for Movies or TV series");

        fillTrending();
        fillRecommended();

        bookmarkCheck();
      } else if (index === 1) {
        mainInput.setAttribute("placeholder", "Search for Movies");
        fillMovies();

        bookmarkCheck();
      } else if (index === 2) {
        mainInput.setAttribute("placeholder", "Search for TV series");
        fillTVShows();

        bookmarkCheck();
      } else if (index === 3) {
        mainInput.setAttribute(
          "placeholder",
          "Search for bookmarked Movies and TV series"
        );
        fillBookmarked();

        bookmarkCheck();
      }
    });
  });
}

/* ======================================= Display items General functions*/
function fillItem(movie) {
  function selectImg(movie) {
    let string;
    const breakpointSm = 375;
    const breakpointMd = 768;

    if (movie.isTrending) {
      if (window.innerWidth <= breakpointMd) {
        string = `${movie.thumbnail.trending.small}`;
      } else if (window.innerWidth > breakpointMd) {
        string = `${movie.thumbnail.trending.large}`;
      }
    } else {
      if (window.innerWidth <= breakpointSm) {
      } else if (window.innerWidth <= breakpointMd) {
        string = `${movie.thumbnail.regular.small}`;
      } else if (window.innerWidth > breakpointMd) {
        string = `${movie.thumbnail.regular.large}`;
      }
    }
    return string;
  }
  return `
  <figure id="${movie._id}" class="movie-item lg">
            <div class="bookmark">
            <ion-icon class="bookmark--icon  ${
              movie.isBookmarked ? "hidden" : ""
            }" name="bookmark-outline"></ion-icon>
            <ion-icon class="bookmark--icon  ${
              movie.isBookmarked ? "" : "hidden"
            }" name="bookmark" ></ion-icon>
            </div>
            <img
              src=${selectImg(movie)}
              alt=""
              class="movie-img background"
            />
            <figcaption>
              <ul class="movie-properties">
                <li class="movie-property">
                  <img src="assets/icon-category-movie.svg" alt="" />
                  <p>${movie.year}</p>
                </li>
                <li class="movie-property">
                  <img src="assets/icon-category-movie.svg" alt="" />
                  <p>${movie.category}</p>
                </li>
                <li class="movie-property">
                  <img src="assets/icon-category-movie.svg" alt="" />
                  <p>${movie.rating}</p>
                </li>
              </ul>
              <h3 class="heading-medium md">${movie.title}</h3>
            </figcaption> 
          </figure>
  `;
}
function fillItemSm(movie) {
  function selectImg(movie) {
    let string;
    const breakpointSm = 375;
    const breakpointMd = 768;

    if (movie.isTrending) {
      if (window.innerWidth <= breakpointMd) {
        string = `${movie.thumbnail.trending.small}`;
      } else if (window.innerWidth > breakpointMd) {
        string = `${movie.thumbnail.trending.large}`;
      }
    } else {
      if (window.innerWidth <= breakpointSm) {
      } else if (window.innerWidth <= breakpointMd) {
        string = `${movie.thumbnail.regular.small}`;
      } else if (window.innerWidth > breakpointMd) {
        string = `${movie.thumbnail.regular.large}`;
      }
    }
    return string;
  }

  return `
  <figure id="${movie._id}" class="movie-item sm">
    <div class="bookmark">
      <ion-icon class="bookmark--icon  ${
        movie.isBookmarked ? "hidden" : ""
      }" name="bookmark-outline"></ion-icon>
      <ion-icon class="bookmark--icon  ${
        movie.isBookmarked ? "" : "hidden"
      }" name="bookmark" ></ion-icon>
    </div>
    <img
      src="${movie.thumbnail.regular.small}"
      src="${selectImg(movie)}"
      alt="${movie.title}"
      class="movie-img"
    />
    <figcaption>
      <ul class="movie-properties">
        <li class="movie-property">
          <p>${movie.year}</p>
        </li>
        <li class="movie-property">
          <img src="assets/icon-category-movie.svg" alt="" />
          <p>${movie.category}</p>
        </li>
        <li class="movie-property">
          <p>${movie.rating}</p>
        </li>
      </ul>
      <h3 class="heading-medium">${movie.title}</h3>
    </figcaption>
  </figure>
    `;
}

/* ======================================= Initial Bootup functions*/
function fillTrending() {
  trending.innerHTML = "";
  content.forEach((item) => {
    if (item.isTrending) {
      trending.innerHTML += fillItem(item);
    }
  });
  //
  bookmarkIcons = document.querySelectorAll(".container.active .bookmark");
}
function fillRecommended() {
  recommended.innerHTML = "";
  content.forEach((item) => {
    if (!item.isTrending) {
      recommended.innerHTML += fillItemSm(item);
    }
    //
    bookmarkIcons = document.querySelectorAll(".container.active .bookmark");
    bookmarkCheck();
  });
}

/* ======================================= Display Relevant Items functions*/
function fillMovies() {
  getMovies().then((res) => {
    movieItems = res.data;
    //
    moviesContainerSection.innerHTML = "";
    //
    movieItems.forEach((item) => {
      // console.log(movie.category);
      moviesContainerSection.innerHTML += fillItemSm(item);
    });
    //
    bookmarkIcons = document.querySelectorAll(".container.active .bookmark");
    bookmarkCheck();
  });
}
function fillTVShows() {
  getSeries().then((res) => {
    // console.log("SERIES DATA", data);
    serieItems = res.data;
    //
    tvShowsSection.innerHTML = "";
    //
    serieItems.forEach((item) => {
      // console.log(movie.category);
      if (item.category === "TV Series") {
        // console.log(movie.category);
        tvShowsSection.innerHTML += fillItemSm(item);
      }
    });
    //
    bookmarkIcons = document.querySelectorAll(".container.active .bookmark");
    bookmarkCheck();
  });
  //
}
function fillBookmarked() {
  getBookmarked().then((res) => {
    bookmarkedItems = res.data;
    //
    bookmarkedSectionMovies.innerHTML = "";
    bookmarkedSectionTVShows.innerHTML = "";
    //
    bookmarkedItems.forEach((item) => {
      // console.log(movie.category);
      if (item.category === "Movie") {
        // console.log(movie.category);
        bookmarkedSectionMovies.innerHTML += fillItemSm(item);
      } else if (item.category === "TV Series") {
        bookmarkedSectionTVShows.innerHTML += fillItemSm(item);
      }
    });
    //
    bookmarkIcons = document.querySelectorAll(".container.active .bookmark");
    bookmarkCheck();
  });
}

/* ======================================= Call functions*/
//

window.addEventListener("load", () => {
  mainHeaderListener();
  mainInputListener();
  //
  getData().then((res) => {
    content = res.data;

    fillTrending();
    fillRecommended();

    bookmarkIcons = document.querySelectorAll(".container.active .bookmark");

    bookmarkCheck();
  });
});
