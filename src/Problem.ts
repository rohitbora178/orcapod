const L = 180;
const photos = [
  [640, 480],
  [120, 300],
  [180, 180]
];

for (let i = 0; i < photos.length; i++) {
  let W = photos[i][0];
  let H = photos[i][1];

  if (W < L || H < L) {
    console.log("UPLOAD ANOTHER");
  } else if (W === H) {
    console.log("ACCEPTED");
  } else {
    console.log("CROP IT");
  }
}

// Output:

// CROP IT
// UPLOAD ANOTHER
// ACCEPTED
