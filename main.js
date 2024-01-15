const lowerRow = document.getElementById("lower-row");
const middleRow = document.getElementById("middle-row");
lowerRow.addEventListener("scroll", () => {
  // Percentage
  const percentage =
    lowerRow.scrollLeft / (lowerRow.scrollWidth - lowerRow.clientWidth);
  console.debug(percentage, lowerRow.scrollLeft, lowerRow.scrollWidth);

  //   middleRow.scrollTo({
  //     left: lowerRow.scrollLeft,
  //     behavior: "instant",
  //   });
  scrollToPercentage(percentage);
});

/**
 *
 * @param {number} percentage
 */
function scrollToPercentage(percentage) {
  middleRow.scrollTo({
    left: (middleRow.scrollWidth - middleRow.clientWidth) * percentage,
    behavior: "instant",
  });
}

// /**
//  * @type {IntersectionObserverInit}
//  */
// const options = {
//   root: document.getElementById("lower-row"),
//   rootMargin: "0px",
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver((entries) => {
//   //   entries.forEach((entry) => {
//   //     console.debug(entry);
//   //   });

//   console.debug(entries[0].intersectionRatio);
// }, options);

// const boxes = document.querySelectorAll("#lower-row .box");

// boxes.forEach((box) => {
//   observer.observe(box);
// });
