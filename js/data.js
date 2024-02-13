let products = [
  {
    id: 1,
    title: "Wall for Free",
    size: "large",
    image:
      "image/pngtree-modern-double-colors-neon-lights-on-brick-background-image_324803.jpg",
    count: 0,
    isMe: false,
  },
  {
    id: 2,
    title: "Portfolio for Free",
    size: "Medium",
    image: "image/1_xOCCa6DH-mS2Hqy8t8JhsQ.png",
    count: 0,
    isMe: false,
  },
  {
    id: 3,
    title: "Information Secuirty Book",
    size: "large",
    image: "image/network.jpg",
    count: 0,
    isMe: false,
  },
  {
    id: 4,
    title: "Concept Of Design In Web APP",
    size: "large",
    image: "image/Concept-of-Designing-Web-Illustration-Graphics-1-580x387.jpg",
    count: 0,
    isMe: false,
  },
  {
    id: 5,
    title: "Lenovo Laptop",
    size: "large",
    image: "image/FB_IMG_1617136767125.jpg",
    count: 0,
    isMe: false,
  },
  {
    id: 6,
    title: "Modren C++ Challenger",
    size: "large",
    image: "image/smaller.png",
    count: 0,
    isMe: false,
  },
  {
    id: 7,
    title: "GALAXNOT20 Altra",
    size: "medium",
    image: "image/Samsung-Galaxy-Note-20.jpg",
    count: 0,
    isMe: false,
  },
  {
    id: 8,
    title: "GalaxyNot20 Eltra",
    size: "small",
    image: "image/Samsung-Galaxy-Note-20-Ultra.png",
    count: 0,
    isMe: false,
  },
  {
    id: 9,
    title: "Small Office Security",
    size: "medium",
    image: "image/cef74c87-8b6e-4483-bc9b-8eaa1fc5de1d.png._CB317136244_.png",
    count: 0,
    isMe: false,
  },
  {
    id: 10,
    title: "Modren C++ Challengas",
    size: "small",
    image: "image/smaller.png",
    count: 0,
    isMe: false,
  },
];

function saveProDataToLocalStorage(pro) {
  localStorage.setItem("dbProducts", JSON.stringify(pro));
}
function loadingDataFromDB() {
  let pData = JSON.parse(localStorage.getItem("dbProducts"));
  console.log(pData);
  pData != "" ? (products = pData) : products;
}
 //saveProDataToLocalStorage(products);
// console.log(products);
// loadingDataFromDB();
// function up() {
//   let i = 1;
//   for (d of newproducts) {
//     d.id = i;
//     i++;
//   }
// }
// up();
