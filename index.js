function handleCursor(){
  const shopBody = document?.getElementById("shopBody");
  if(shopBody.style.display == "none"){
    console.log("INSIDEEEEEEEEEEEEEEE");
    
    document.addEventListener('mousemove', function(e) {
      const cursorElement = document.getElementById('custom-cursor-1'); 
          document.body.classList.remove('custom-cursor');
          cursorElement.style.display = 'none';
      
    });
  }
  
}


setInterval(() => {
  handleCursor()
}, 1000);





// handleShopContainer



const handleShopContainer = () => {
  const shopBody = document?.getElementById("shopBody");
  console.log("shopBody", shopBody);
  const CategoryEle = document?.getElementById("CategoryBody");
  CategoryEle.style = "display:none"
  const HealthEle = document?.getElementById("HealthBody");
  HealthEle.style = `display:none`
  const ArticleEle = document?.getElementById("ArticleBody");
  ArticleEle.style = "display:none"
  const AboutEle = document?.getElementById("AboutBody");
  AboutEle.style = "display:none"
  const EssentialsEle = document?.getElementById("Essentials");
  EssentialsEle.style = `display:none`

  shopBody.style.display === "flex" ? shopBody.style = "display:none" :
    shopBody.style = `display: flex;
  flex-wrap: wrap;
  justify-content: flex-start
  flex-direction: column !important;
  width: 420px;
  height: 120%;
  position: absolute;
  top: 15%;
  left: 0px;
  background-color: white;
  padding: 1%;
  z-index:99999;
  gap: 100px !important
  box-shadow: 10px 10px 50px 3px #cfcfcf;
  transition: width 3s ease-in-out;
  cursor: auto;
  // overflow-y: scroll;
  `;
  if(shopBody.style.display == "none"){
    console.log("INSIDEEEEEEEEEEEEEEE");
    
    document.addEventListener('mousemove', function(e) {
      const cursorElement = document.getElementById('custom-cursor-1'); 
          document.body.classList.remove('custom-cursor');
          cursorElement.style.display = 'none';
      
    });
  }
  // const customCursor = document?.getElementsByClassName('custom-cursor')
  // customCursor.style =  `{
  //   cursor: none;
  // }`


  // const coverEle = document?.getElementById("cover");
  // coverEle.style=`{
  //   position: relative;
  // }`
  
  // const customCursor1Ele = document?.getElementById("#custom-cursor-1");
  // customCursor1Ele.style = `{
  //   position: absolute;
  //   pointer-events: none;
  //   display: none;
  //   z-index: 1000;
  //   width: 39px;
  //   height: 39px;
  //   transform: translate(-50%, -50%);
  //   background-color: #fff;
  //   border: 1px solid gray;
  //   border-radius: 50%;
  //   box-sizing: border-box;
  // }`
  
   document.addEventListener('mousemove', function(e) {
    const cursorElement = document.getElementById('custom-cursor-1');
    const conditionMet = true; // Replace this with your specific condition
  
    if (conditionMet) {
        // Hide the default cursor and show the custom cursor
        document.body.classList.add('custom-cursor');
        cursorElement.style.display = 'block';
        cursorElement.style.left = e.pageX + 'px';
        cursorElement.style.top = e.pageY + 'px';
    } else {
        // Show the default cursor and hide the custom cursor
        document.body.classList.remove('custom-cursor');
        cursorElement.style.display = 'none';
    }
  });
}



function closeSidebar(id, cover) {
  const sidebar = document.getElementById(id);
  if (sidebar) {
    sidebar.style.width = '0px';
    sidebar.style.display = 'none'; 
    sidebar.classList.remove('active');
  }

  const contentCover = document.getElementById(cover);
  if (contentCover) {
    contentCover.classList.remove('active');
  }
}



// handleCategoryBody
function handleCategoryBody() {
  const categoryBody = document?.getElementById("CategoryBody");
  console.log("categoryBody", categoryBody);
  const EssentialsEle = document?.getElementById("Essentials");
  EssentialsEle.style = `display:none`
  categoryBody.style.display === "flex" ? categoryBody.style = "display:none" :
    categoryBody.style = `display: flex;
  display: flex;
  flex-direction:column;
  width: 300px;
  height: 120%;
  position: absolute;
  top: 15%;
  left: 0px;
  background-color: white;
  padding: 1%;
  overflow-y: scroll;
  box-shadow: 10px 10px 50px 3px #cfcfcf;
  transition: width 3s ease-in-out;
  z-index:99999;
  margin-top:13%
  transition: width 1s ease-in-out;
  `;
  document.addEventListener('mousemove', function(e) {
    const cursorElement = document.getElementById('custom-cursor-1');
    const conditionMet = true; // Replace this with your specific condition
  
    if (conditionMet) {
        // Hide the default cursor and show the custom cursor
        document.body.classList.add('custom-cursor');
        cursorElement.style.display = 'block';
        cursorElement.style.left = e.pageX + 'px';
        cursorElement.style.top = e.pageY + 'px';
    } else {
        // Show the default cursor and hide the custom cursor
        document.body.classList.remove('custom-cursor');
        cursorElement.style.display = 'none';
    }
  });
}

// help
function hanleHep() {
  const helpelement = document.getElementById("HelpContainer");
  helpelement.style = "display:flex"
}

// handleLongevity
function handleLongevity() {
  const SingleEle = document?.getElementById("Single");
  SingleEle.style = "display:none";
  const DailyEle = document?.getElementById("Daily");
  DailyEle.style = "display:none";
  const BundlesEle = document?.getElementById("Single");
  BundlesEle.style = "display:none";
  const shopBody = document?.getElementById("shopBody");
  shopBody.style = `
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  height: 100%;
  position: absolute;
  top: 15%;
  left: 0px;
  background-color: white;
  padding: 1%;
  box-shadow: 10px 10px 50px 3px #cfcfcf;
  transition: width 1s ease-in-out;  
  flex-direction: column !important;
  z-index:99999;

  `;
  const EssentialsEle = document?.getElementById("Essentials");
  EssentialsEle.style = `display: flex;
  flex-direction:row;
  width:60%;
  margin-left:5%;
  border-left: 1px solid grey;
  margin-top:13%;
  transition: width 1s ease-in-out;  
  `

  const blockELe = document.getElementById("block1");

  

}

// Single

function handleSingle() {
  const EssentialsEle = document?.getElementById("Essentials");
  EssentialsEle.style = "display:none"
  const DailyEle = document?.getElementById("Daily");
  DailyEle.style = "display:none";
  const BundlesEle = document?.getElementById("Single");
  BundlesEle.style = "display:none";
  const shopBody = document?.getElementById("shopBody");
  shopBody.style = `
   display: flex;
  flex-wrap: wrap;
  width: 700px;
  height: 100%;
  position: absolute;
  top: 15%;
  left: 0px;
  background-color: white;
  padding: 1%;
  box-shadow: 10px 10px 50px 3px #cfcfcf;
  transition: width 1s ease-in-out;  
  flex-direction: column !important;
  z-index:99999;
  `;
  const SingleEle = document?.getElementById("Single");
  SingleEle.style = `
  display: flex;
  flex-direction:row;
  width:40%;
  margin-left:5%;
  border-left: 1px solid grey;
  margin-top:13%;
  transition: width 1s ease-in-out;  
  overflow-y: auto;

  `

  const blockELe = document.getElementById("block1");
  // blockELe?.style = `padding: 7%;`
  //   border-right: 1px solid grey;`
}

// Daily Essentialss
function handleDaily() {
  const EssentialsEle = document?.getElementById("Essentials");
  EssentialsEle.style = "display:none";
  const SingleEle = document?.getElementById("Single");
  SingleEle.style = "display:none";
  const BundlesEle = document?.getElementById("Bundle");
  BundlesEle.style = "display:none";
  const shopBody = document?.getElementById("shopBody");
  shopBody.style = `display: flex;
  // flex-wrap:wrap;
  width: 700px;
  height: 100%;
  position: absolute;
  top: 15%;
  left: 0px;
  background-color: white;
  padding: 1%;
  box-shadow: 10px 10px 50px 3px #cfcfcf;
  transition: width 1s ease-in-out;   
  flex-direction: row !important;
  z-index:99999;

  `;
  const DailyEle = document?.getElementById("Daily");

  DailyEle.style = `display: flex;
  flex-direction:row;
  width:60%;
  margin-left:5%
  // border-left: 1px solid grey;
    margin-top:13%;
  transition: width 1s ease-in-out; 
      border-left: 1px solid grey; 
  
  `

  const blockELe = document.getElementById("block1");
  // blockELe?.style = `padding: 7%;`
  //   border-right: 1px solid grey;`

}


// Bundles

function handleBundles() {
  const EssentialsEle = document?.getElementById("Essentials");
  EssentialsEle.style = "display:none";
  const SingleEle = document?.getElementById("Single");
  SingleEle.style = "display:none";
  const DailyEle = document?.getElementById("Daily");
  DailyEle.style = "display:none";
  const shopBody = document?.getElementById("shopBody");
  shopBody.style = `display: flex;
  width: 854;
  height: 100%;
  position: absolute;
  top: 15%;
  left: 0px;
  background-color: white;
  padding: 1%;
  box-shadow: 10px 10px 50px 3px #cfcfcf;
  transition: width 1s ease-in-out;  
  flex-direction: row !important;
  z-index:99999;
  `;
  const BundlesEle = document?.getElementById("Bundle");
  BundlesEle.style = `display: flex;
  flex-direction:row;
  width:60%;
  margin-left:5%
   border-left: 1px solid;
    overflow-x: auto;
        border-left: 1px solid;
  `

  const blockELe = document.getElementById("block1");
  // blockELe?.style = `padding: 7%;`
  //   border-right: 1px solid grey;`
}

const handleInr = () => {
  let InrEle = document?.getElementById("INRDropdown");
  if (InrEle.style.display === "flex") {
    InrEle.style = "display:none"
  } else {
    InrEle.style = `
            display:flex;
            flex-direction: column;
            position: absolute;
    left: 10px;
    width: 324px;
    max-height: 350px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 0.5rem;
    box-shadow: 0 5px 30px rgb(26, 26, 26 / 0.1);
    border: 1px solid rgba(26, 26, 26, 0.12);
    overflow: auto;
    padding: 1rem 0;
    z-index: 1;
    box-sizing: border-box;
  z-index:99999;
  

            `
  }

}

const setCountryValue = (event) => {
  const selectedCountryDiv = event.target.closest("div");
  const selectedCountryName = selectedCountryDiv.querySelector("span").textContent;
  const selectedCountryImageSrc = selectedCountryDiv.querySelector("img").src;

  document.getElementById("dropDown-country-name").textContent = selectedCountryName;
  document.querySelector("#dropDownDATA img").src = selectedCountryImageSrc;


  document.getElementById("INRDropdown").style.display = "none";
};


document.querySelectorAll("#INRDropdown div").forEach(item => {
  item.addEventListener("click", setCountryValue);
});

// handleHealthContainer
function handleHealthContainer() {
  const healthBody = document?.getElementById("HealthBody");
  console.log("healthBody", healthBody, healthBody.style.display);
  const Shopele = document?.getElementById("shopBody");
  Shopele.style = `display:none`
  const CategoryEle = document?.getElementById("CategoryBody");
  CategoryEle.style = "display:none"
  const ArticleEle = document?.getElementById("ArticleBody");
  ArticleEle.style = "display:none"
  const AboutEle = document?.getElementById("AboutBody");
  AboutEle.style = "display:none"
  const shopBody = document?.getElementById("shopBody");
  healthBody.style.display === "flex" ? healthBody.style = "display:none" :
    healthBody.style = `display: flex;
  display: flex;
  flex-direction:column;
  width: 300px;
  height: 120%;
  position: absolute;
  top: 15%;
  left: 0px;
  background-color: white;
   overflow-y: scroll;
  padding: 1%;
  box-shadow: 10px 10px 50px 3px #cfcfcf;
  transition: width 3s ease-in-out;
  `;
  document.addEventListener('mousemove', function(e) {
    const cursorElement = document.getElementById('custom-cursor-1');
    const conditionMet = true; // Replace this with your specific condition
  
    if (conditionMet) {
        // Hide the default cursor and show the custom cursor
        document.body.classList.add('custom-cursor');
        cursorElement.style.display = 'block';
        cursorElement.style.left = e.pageX + 'px';
        cursorElement.style.top = e.pageY + 'px';
    } else {
        // Show the default cursor and hide the custom cursor
        document.body.classList.remove('custom-cursor');
        cursorElement.style.display = 'none';
    }
  });
}

// handleArticleContainer

function handleArticleContainer() {
  const articleBody = document?.getElementById("ArticleBody");
  console.log("articleBody", articleBody, articleBody.style.display);
  const ShopBody = document?.getElementById("shopBody");
  ShopBody.style = `display:none`
  const CategoryEle = document?.getElementById("CategoryBody");
  CategoryEle.style = "display:none"
  const HealthEle = document?.getElementById("HealthBody");
  HealthEle.style = `display:none`
  const AboutEle = document?.getElementById("AboutBody");
  AboutEle.style = "display:none"
  articleBody.style.display === "flex" ? articleBody.style = "display:none" :
    articleBody.style = `display: flex;
display: flex;
flex-direction:column;
width: 300px;
height: 120%;
position: absolute;
top: 15%;
left: 0px;
background-color: white;
padding: 1%;
 line-height: 2;
 overflow-y: scroll;
box-shadow: 10px 10px 50px 3px #cfcfcf;
transition: width 3s ease-in-out;
`;
document.addEventListener('mousemove', function(e) {
  const cursorElement = document.getElementById('custom-cursor-1');
  const conditionMet = true; // Replace this with your specific condition

  if (conditionMet) {
      // Hide the default cursor and show the custom cursor
      document.body.classList.add('custom-cursor');
      cursorElement.style.display = 'block';
      cursorElement.style.left = e.pageX + 'px';
      cursorElement.style.top = e.pageY + 'px';
  } else {
      // Show the default cursor and hide the custom cursor
      document.body.classList.remove('custom-cursor');
      cursorElement.style.display = 'none';
  }
});
}


function handleAboutContainer() {
  const aboutBody = document?.getElementById("AboutBody");
  console.log("aboutBody", aboutBody, aboutBody.style.display);
  const ShopBody = document?.getElementById("shopBody");
  ShopBody.style = `display:none`
  const CategoryEle = document?.getElementById("CategoryBody");
  CategoryEle.style = "display:none"
  const HealthEle = document?.getElementById("HealthBody");
  HealthEle.style = `display:none`
  const ArticleEle = document?.getElementById("ArticleBody");
  ArticleEle.style = "display:none"
  aboutBody.style.display === "flex" ? aboutBody.style = "display:none" :
    aboutBody.style = `display: flex;
display: flex;
flex-direction:column;
width: 300px;
height: 120%;
position: absolute;
top: 15%;
left: 0px;
background-color: white;
padding: 1%;
box-shadow: 10px 10px 50px 3px #cfcfcf;
transition: width 3s ease-in-out;
`;
document.addEventListener('mousemove', function(e) {
  const cursorElement = document.getElementById('custom-cursor-1');
  const conditionMet = true; // Replace this with your specific condition

  if (conditionMet) {
      // Hide the default cursor and show the custom cursor
      document.body.classList.add('custom-cursor');
      cursorElement.style.display = 'block';
      cursorElement.style.left = e.pageX + 'px';
      cursorElement.style.top = e.pageY + 'px';
  } else {
      // Show the default cursor and hide the custom cursor
      document.body.classList.remove('custom-cursor');
      cursorElement.style.display = 'none';
  }
});
}



// card 
const slides = document.querySelectorAll('.card-box')
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`
})

const goPrev = () => {
  if (counter != 0) {
    counter--
    slideImage()
  }
}
const goNext = () => {
  if (counter < slides.length - 1) {
    counter++
    slideImage()
  }
}

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}


// document.addEventListener('DOMContentLoaded', function() {
//   const cursorElement = document.getElementById('custom-cursor-1');
//   const closeButton = document.getElementById('close-button');

//   function hideCursorPermanently() {
//       // Hide the default cursor
//       document.body.classList.add('custom-cursor');

//       // Hide the custom cursor after clicking the "X"
//       cursorElement.style.display = 'none';

//       // Disable further mouse movement tracking
//       document.removeEventListener('mousemove', trackMouse);
//   }

//   function trackMouse(e) {
//       cursorElement.style.left = e.pageX + 'px';
//       cursorElement.style.top = e.pageY + 'px';
//   }

//   closeButton.addEventListener('click', function() {
//       hideCursorPermanently();
//   });

//   // Initial tracking of mouse movement to follow the cursor
//   document.addEventListener('mousemove', trackMouse);
// });
