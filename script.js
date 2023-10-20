"use strict";

/* ======================================= General  variables ======================================= */
// const movies = [
//   {
//     title: "Beyond Earth",
//     thumbnail: {
//       trending: {
//         small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
//         large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
//       },
//       regular: {
//         small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
//         medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
//         large: "./assets/thumbnails/beyond-earth/regular/large.jpg",
//       },
//     },
//     year: 2019,
//     category: "Movie",
//     rating: "PG",
//     isBookmarked: false,
//     isTrending: true,
//   },
//   {
//     title: "Bottom Gear",
//     thumbnail: {
//       trending: {
//         small: "./assets/thumbnails/bottom-gear/trending/small.jpg",
//         large: "./assets/thumbnails/bottom-gear/trending/large.jpg",
//       },
//       regular: {
//         small: "./assets/thumbnails/bottom-gear/regular/small.jpg",
//         medium: "./assets/thumbnails/bottom-gear/regular/medium.jpg",
//         large: "./assets/thumbnails/bottom-gear/regular/large.jpg",
//       },
//     },
//     year: 2021,
//     category: "Movie",
//     rating: "PG",
//     isBookmarked: false,
//     isTrending: true,
//   },
//   {
//     title: "Undiscovered Cities",
//     thumbnail: {
//       trending: {
//         small: "./assets/thumbnails/undiscovered-cities/trending/small.jpg",
//         large: "./assets/thumbnails/undiscovered-cities/trending/large.jpg",
//       },
//       regular: {
//         small: "./assets/thumbnails/undiscovered-cities/regular/small.jpg",
//         medium: "./assets/thumbnails/undiscovered-cities/regular/medium.jpg",
//         large: "./assets/thumbnails/undiscovered-cities/regular/large.jpg",
//       },
//     },
//     year: 2019,
//     category: "TV Series",
//     rating: "E",
//     isBookmarked: false,
//     isTrending: true,
//   },
//   {
//     title: "1998",
//     thumbnail: {
//       trending: {
//         small: "./assets/thumbnails/1998/trending/small.jpg",
//         large: "./assets/thumbnails/1998/trending/large.jpg",
//       },
//       regular: {
//         small: "./assets/thumbnails/1998/regular/small.jpg",
//         medium: "./assets/thumbnails/1998/regular/medium.jpg",
//         large: "./assets/thumbnails/1998/regular/large.jpg",
//       },
//     },
//     year: 2021,
//     category: "Movie",
//     rating: "18+",
//     isBookmarked: false,
//     isTrending: true,
//   },
//   {
//     title: "Dark Side of the Moon",
//     thumbnail: {
//       trending: {
//         small: "./assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
//         large: "./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg",
//       },
//       regular: {
//         small: "./assets/thumbnails/dark-side-of-the-moon/regular/small.jpg",
//         medium: "./assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
//         large: "./assets/thumbnails/dark-side-of-the-moon/regular/large.jpg",
//       },
//     },
//     year: 2018,
//     category: "TV Series",
//     rating: "PG",
//     isBookmarked: true,
//     isTrending: true,
//   },
//   {
//     title: "The Great Lands",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/the-great-lands/regular/small.jpg",
//         medium: "./assets/thumbnails/the-great-lands/regular/medium.jpg",
//         large: "./assets/thumbnails/the-great-lands/regular/large.jpg",
//       },
//     },
//     year: 2019,
//     category: "Movie",
//     rating: "E",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "The Diary",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/the-diary/regular/small.jpg",
//         medium: "./assets/thumbnails/the-diary/regular/medium.jpg",
//         large: "./assets/thumbnails/the-diary/regular/large.jpg",
//       },
//     },
//     year: 2019,
//     category: "TV Series",
//     rating: "PG",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "Earth’s Untouched",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/earths-untouched/regular/small.jpg",
//         medium: "./assets/thumbnails/earths-untouched/regular/medium.jpg",
//         large: "./assets/thumbnails/earths-untouched/regular/large.jpg",
//       },
//     },
//     year: 2017,
//     category: "Movie",
//     rating: "18+",
//     isBookmarked: true,
//     isTrending: false,
//   },
//   {
//     title: "No Land Beyond",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/no-land-beyond/regular/small.jpg",
//         medium: "./assets/thumbnails/no-land-beyond/regular/medium.jpg",
//         large: "./assets/thumbnails/no-land-beyond/regular/large.jpg",
//       },
//     },
//     year: 2019,
//     category: "Movie",
//     rating: "E",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "During the Hunt",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/during-the-hunt/regular/small.jpg",
//         medium: "./assets/thumbnails/during-the-hunt/regular/medium.jpg",
//         large: "./assets/thumbnails/during-the-hunt/regular/large.jpg",
//       },
//     },
//     year: 2016,
//     category: "TV Series",
//     rating: "PG",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "Autosport the Series",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/autosport-the-series/regular/small.jpg",
//         medium: "./assets/thumbnails/autosport-the-series/regular/medium.jpg",
//         large: "./assets/thumbnails/autosport-the-series/regular/large.jpg",
//       },
//     },
//     year: 2016,
//     category: "TV Series",
//     rating: "18+",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "Same Answer II",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/same-answer-2/regular/small.jpg",
//         medium: "./assets/thumbnails/same-answer-2/regular/medium.jpg",
//         large: "./assets/thumbnails/same-answer-2/regular/large.jpg",
//       },
//     },
//     year: 2017,
//     category: "Movie",
//     rating: "E",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "Below Echo",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/below-echo/regular/small.jpg",
//         medium: "./assets/thumbnails/below-echo/regular/medium.jpg",
//         large: "./assets/thumbnails/below-echo/regular/large.jpg",
//       },
//     },
//     year: 2016,
//     category: "TV Series",
//     rating: "PG",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "The Rockies",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/the-rockies/regular/small.jpg",
//         medium: "./assets/thumbnails/the-rockies/regular/medium.jpg",
//         large: "./assets/thumbnails/the-rockies/regular/large.jpg",
//       },
//     },
//     year: 2015,
//     category: "TV Series",
//     rating: "E",
//     isBookmarked: true,
//     isTrending: false,
//   },
//   {
//     title: "Relentless",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/relentless/regular/small.jpg",
//         medium: "./assets/thumbnails/relentless/regular/medium.jpg",
//         large: "./assets/thumbnails/relentless/regular/large.jpg",
//       },
//     },
//     year: 2017,
//     category: "Movie",
//     rating: "PG",
//     isBookmarked: true,
//     isTrending: false,
//   },
//   {
//     title: "Community of Ours",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/community-of-ours/regular/small.jpg",
//         medium: "./assets/thumbnails/community-of-ours/regular/medium.jpg",
//         large: "./assets/thumbnails/community-of-ours/regular/large.jpg",
//       },
//     },
//     year: 2018,
//     category: "TV Series",
//     rating: "18+",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "Van Life",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/van-life/regular/small.jpg",
//         medium: "./assets/thumbnails/van-life/regular/medium.jpg",
//         large: "./assets/thumbnails/van-life/regular/large.jpg",
//       },
//     },
//     year: 2015,
//     category: "Movie",
//     rating: "PG",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "The Heiress",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/the-heiress/regular/small.jpg",
//         medium: "./assets/thumbnails/the-heiress/regular/medium.jpg",
//         large: "./assets/thumbnails/the-heiress/regular/large.jpg",
//       },
//     },
//     year: 2021,
//     category: "Movie",
//     rating: "PG",
//     isBookmarked: true,
//     isTrending: false,
//   },
//   {
//     title: "Off the Track",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/off-the-track/regular/small.jpg",
//         medium: "./assets/thumbnails/off-the-track/regular/medium.jpg",
//         large: "./assets/thumbnails/off-the-track/regular/large.jpg",
//       },
//     },
//     year: 2017,
//     category: "Movie",
//     rating: "18+",
//     isBookmarked: true,
//     isTrending: false,
//   },
//   {
//     title: "Whispering Hill",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/whispering-hill/regular/small.jpg",
//         medium: "./assets/thumbnails/whispering-hill/regular/medium.jpg",
//         large: "./assets/thumbnails/whispering-hill/regular/large.jpg",
//       },
//     },
//     year: 2017,
//     category: "Movie",
//     rating: "E",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "112",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/112/regular/small.jpg",
//         medium: "./assets/thumbnails/112/regular/medium.jpg",
//         large: "./assets/thumbnails/112/regular/large.jpg",
//       },
//     },
//     year: 2013,
//     category: "TV Series",
//     rating: "PG",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "Lone Heart",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/lone-heart/regular/small.jpg",
//         medium: "./assets/thumbnails/lone-heart/regular/medium.jpg",
//         large: "./assets/thumbnails/lone-heart/regular/large.jpg",
//       },
//     },
//     year: 2017,
//     category: "Movie",
//     rating: "E",
//     isBookmarked: true,
//     isTrending: false,
//   },
//   {
//     title: "Production Line",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/production-line/regular/small.jpg",
//         medium: "./assets/thumbnails/production-line/regular/medium.jpg",
//         large: "./assets/thumbnails/production-line/regular/large.jpg",
//       },
//     },
//     year: 2018,
//     category: "TV Series",
//     rating: "PG",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "Dogs",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/dogs/regular/small.jpg",
//         medium: "./assets/thumbnails/dogs/regular/medium.jpg",
//         large: "./assets/thumbnails/dogs/regular/large.jpg",
//       },
//     },
//     year: 2016,
//     category: "TV Series",
//     rating: "E",
//     isBookmarked: true,
//     isTrending: false,
//   },
//   {
//     title: "Asia in 24 Days",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/asia-in-24-days/regular/small.jpg",
//         medium: "./assets/thumbnails/asia-in-24-days/regular/medium.jpg",
//         large: "./assets/thumbnails/asia-in-24-days/regular/large.jpg",
//       },
//     },
//     year: 2020,
//     category: "TV Series",
//     rating: "PG",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "The Tasty Tour",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/the-tasty-tour/regular/small.jpg",
//         medium: "./assets/thumbnails/the-tasty-tour/regular/medium.jpg",
//         large: "./assets/thumbnails/the-tasty-tour/regular/large.jpg",
//       },
//     },
//     year: 2016,
//     category: "TV Series",
//     rating: "PG",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "Darker",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/darker/regular/small.jpg",
//         medium: "./assets/thumbnails/darker/regular/medium.jpg",
//         large: "./assets/thumbnails/darker/regular/large.jpg",
//       },
//     },
//     year: 2017,
//     category: "Movie",
//     rating: "18+",
//     isBookmarked: true,
//     isTrending: false,
//   },
//   {
//     title: "Unresolved Cases",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/unresolved-cases/regular/small.jpg",
//         medium: "./assets/thumbnails/unresolved-cases/regular/medium.jpg",
//         large: "./assets/thumbnails/unresolved-cases/regular/large.jpg",
//       },
//     },
//     year: 2018,
//     category: "TV Series",
//     rating: "18+",
//     isBookmarked: false,
//     isTrending: false,
//   },
//   {
//     title: "Mission: Saturn",
//     thumbnail: {
//       regular: {
//         small: "./assets/thumbnails/mission-saturn/regular/small.jpg",
//         medium: "./assets/thumbnails/mission-saturn/regular/medium.jpg",
//         large: "./assets/thumbnails/mission-saturn/regular/large.jpg",
//       },
//     },
//     year: 2017,
//     category: "Movie",
//     rating: "PG",
//     isBookmarked: true,
//     isTrending: false,
//   },
// ];

let content;

const getData = async () => {
  try {
    const raw = await fetch(`http://127.0.0.1:5000/api/v1/`);
    const data = raw.json();

    return data;
  } catch (err) {
    return err;
  }
};

const getMovies = async () => {
  const raw = await fetch(`http://127.0.0.1:5000/api/v1/content/movies`);
  const data = raw.json();

  return data;
};

const getSeries = async () => {
  const raw = await fetch(`http://127.0.0.1:5000/api/v1/content/series`);
  const data = raw.json();

  return data;
};

const getBookmarked = async () => {
  const raw = await fetch(`http://127.0.0.1:5000/api/v1/content/bookmark`);
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
const homePage = document.querySelector(".home");
const moviesContainer = document.querySelector(".movies");
const tvShows = document.querySelector(".tv-shows");
const bookmarked = document.querySelector(".bookmarked");
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

let movieItems;
let serieItems;
let bookmarkedItems;

/* ======================================= General*/
function bookmarkCheck() {
  const movieItems = document.querySelectorAll(".movie-item");
  movieItems.forEach((item) => {
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

    item.addEventListener("click", function (event) {
      //
      const movieTitle = this.children[2].children[1].innerText;
      const contentId = this.getAttribute("id");

      //
      if (event.target.closest(".bookmark")) {
        //
        const bookmarkIcons = event.target
          .closest(".bookmark")
          .querySelectorAll("ion-icon");

        // console.log("bookmarkIcons", bookmarkIcons);
        //
        // movies.forEach((movie) => {
        // if (movie._id === contentId) {
        //

        const updateContent = async () => {
          const raw = await fetch(`127.0.0.1:5000/api/v1/`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: contentId,
              isBookmarked: true,
            }),
          });

          const data = raw.json();

          return data;
        };

        updateContent().then((res) => {
          console.log("update res", res);
        });

        // movie.isBookmarked = !movie.isBookmarked;

        // bookmarkIcons.forEach((icon) => {
        //   icon.classList.toggle("hidden");
        // });

        // if (movie.isBookmarked) {
        //   movie.isBookmarked = false;
        //   // event.target.closest(".bookmark").classList.remove("active");
        //   bookmarkIcons.forEach((icon) => {
        //     icon.classList.toggle("hidden");
        //   });
        // } else {
        //   movie.isBookmarked = true;
        //   // event.target.closest(".bookmark").classList.add("active");
        //   bookmarkIcons.forEach((icon) => {
        //     icon.classList.toggle("hidden");
        //   });
        // }
        // console.log(movie.isBookmarked);
        // }
        // });
      }
    });

    // item.addEventListener("click", function (event) {
    //   //
    //   //
    //   const movieTitle = this.children[2].children[1].innerText;
    //   const contentId = this.getAttribute("id");

    //   //
    //   if (event.target.closest(".bookmark")) {
    //     //
    //     const bookmarkIcons = event.target
    //       .closest(".bookmark")
    //       .querySelectorAll("ion-icon");

    //     // console.log("bookmarkIcons", bookmarkIcons);
    //     //
    //     movies.forEach((movie) => {
    //       if (movie._id === contentId) {
    //         //
    //         movie.isBookmarked = !movie.isBookmarked;

    //         bookmarkIcons.forEach((icon) => {
    //           icon.classList.toggle("hidden");
    //         });
    //         // if (movie.isBookmarked) {
    //         //   movie.isBookmarked = false;
    //         //   // event.target.closest(".bookmark").classList.remove("active");
    //         //   bookmarkIcons.forEach((icon) => {
    //         //     icon.classList.toggle("hidden");
    //         //   });
    //         // } else {
    //         //   movie.isBookmarked = true;
    //         //   // event.target.closest(".bookmark").classList.add("active");
    //         //   bookmarkIcons.forEach((icon) => {
    //         //     icon.classList.toggle("hidden");
    //         //   });
    //         // }
    //         // console.log(movie.isBookmarked);
    //       }
    //     });
    //   }
    // });
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
      } else if (index === 1) {
        fillMovies();
        mainInput.setAttribute("placeholder", "Search for Movies");
      } else if (index === 2) {
        fillTVShows();
        mainInput.setAttribute("placeholder", "Search for TV series");
      } else if (index === 3) {
        fillBookmarked();
        mainInput.setAttribute("placeholder", "Search for bookmarked shows");
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
  content.forEach((item) => {
    if (item.isTrending) {
      trending.innerHTML += fillItem(item);
    }
  });
}
function fillRecommended() {
  content.forEach((item) => {
    if (!item.isTrending) {
      recommended.innerHTML += fillItemSm(item);
    }
  });
}

/* ======================================= Display Relevant Items functions*/
function fillMovies() {
  if (!movieItems) {
    getMovies().then((res) => {
      movieItems = res.data;
      //
      moviesContainerSection.innerHTML = "";
      //
      movieItems.forEach((item) => {
        // console.log(movie.category);
        if (item.category === "Movie") {
          // console.log(movie.category);
          moviesContainerSection.innerHTML += fillItemSm(item);
        }
      });
    });
  } else if (movieItems) {
    //
    moviesContainerSection.innerHTML = "";
    //
    movieItems.forEach((item) => {
      // console.log(movie.category);
      if (item.category === "Movie") {
        // console.log(movie.category);
        moviesContainerSection.innerHTML += fillItemSm(item);
      }
    });
  }
}
function fillTVShows() {
  if (!serieItems) {
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
    });
  } else if (serieItems) {
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
  }
}
function fillBookmarked() {
  if (!bookmarkedItems) {
    getBookmarked().then((res) => {
      bookmarkedItems = res.data;

      //
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
    });
  } else if (bookmarkedItems) {
    //
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
  }
}

/* ======================================= Call functions*/
//

window.addEventListener("load", () => {
  getData().then((res) => {
    content = res.data;

    fillTrending();
    fillRecommended();

    bookmarkCheck();
  });
  //
  mainHeaderListener();
  mainInputListener();
});
