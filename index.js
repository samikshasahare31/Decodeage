function openSidebar(id, cover) {
  if (id === 'sidebar-1') {
    document.getElementById(id).style.width = 'fit-content';
  }
  document.getElementById(id).classList.toggle('active');
  document.getElementById(cover).classList.toggle('active');

  document.getElementById(cover).addEventListener('click', () => {

    if (document.getElementById(id).classList.contains('active')) {
      if (id === 'sidebar-1') {
        document.getElementById(id).style.width = '0px';
      }
      else if (id.includes('small-sidebar')) {
        const new_id = id.split(id)[1] || '';
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('cover').classList.remove('active');
        document.getElementById(id).classList.remove('active');
        document.getElementById('small-cover').classList.remove('active');
      }
      else if (id.includes('mini-sidebar')) {
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('cover').classList.remove('active');
        document.getElementById('small-sidebar0').classList.remove('active');
        document.getElementById('small-cover').classList.remove('active');
        document.getElementById(id).classList.remove('active');
        document.getElementById('mini-cover').classList.remove('active');
      }
      document.getElementById(id).classList.remove('active');
      document.getElementById(cover).classList.remove('active');

    }
  });
}


function closeSidebar(id, cover) {
  if (id === 'sidebar-1') {
    document.getElementById(id).style.width = '0px';
  }
  document.getElementById(id).classList.remove('active');
  document.getElementById(cover).classList.remove('active');

}

function openSecondBar(id_1, id_2, id_3, id_4) {
  document.getElementById(id_1).style.display = 'block';
  document.getElementById(id_2).style.display = 'none';
  document.getElementById(id_3).style.display = 'none';
  document.getElementById(id_4).style.display = 'none';
}

function bothOpenClose() {
  openSidebar('sidebar-1', 'content-cover');
  closeSecondbar();
}
function closeSecondbar() {
  document.getElementById('mini-sidebar-1').style.display = 'none';
  document.getElementById('mini-sidebar-2').style.display = 'none';
  document.getElementById('mini-sidebar-3').style.display = 'none';
  document.getElementById('mini-sidebar-4').style.display = 'none';
}

function closeBothSidebar(sidebar, small_sidebar) {
  document.getElementById(sidebar).classList.remove('active');
  document.getElementById('cover').classList.remove('active');
  document.getElementById(small_sidebar).classList.remove('active');
  document.getElementById('small-cover').classList.remove('active');

}
function closeThreeSidebar(sidebar, small_sidebar, mini_sidebar) {
  document.getElementById(sidebar).classList.remove('active');
  document.getElementById('cover').classList.remove('active');
  document.getElementById(small_sidebar).classList.remove('active');
  document.getElementById('small-cover').classList.remove('active');
  document.getElementById(mini_sidebar).classList.remove('active');
  document.getElementById('mini-cover').classList.remove('active');

}

function moveCursor(cursorId, event) {
  const cursor = document.getElementById(cursorId);
  cursor.style.left = event.clientX + 'px';
  cursor.style.top = event.clientY + 'px';
}

document.addEventListener('mousemove', function (e) {
  moveCursor('custom-cursor-1', e);
  moveCursor('custom-cursor-2', e);
  moveCursor('custom-cursor-3', e);
  moveCursor('custom-cursor-4', e);
});




// Footer code

// Dropdown Countries List
const countries = [
  { img: 'https://cdn-icons-png.flaticon.com/512/206/206626.png', name: 'United State (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/206/206606.png', name: 'India (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/555/555473.png', name: 'Canada (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/555/555604.png', name: 'Afghanistan (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197604.png', name: 'Åland Islands (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197633.png', name: 'Albania (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197646.png', name: 'Algeria (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197599.png', name: 'Angola (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197573.png', name: 'Argentina (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197561.png', name: 'Aruba (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197507.png', name: 'Australia (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197598.png', name: 'Austria (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197621.png', name: 'Bangladesh (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197593.png', name: 'Belgium (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197563.png', name: 'Belize (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197613.png', name: 'Benin (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197627.png', name: 'Bhutan (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197606.png', name: 'Brazil (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197601.png', name: 'China (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197605.png', name: 'Chile (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197580.png', name: 'Denmark (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197603.png', name: 'Ecuador (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197598.png', name: 'Egypt (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197619.png', name: 'Estonia (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197578.png', name: 'Iceland (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197587.png', name: 'Indonesia (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197618.png', name: 'Iraq (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197590.png', name: 'Italy (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197586.png', name: 'Jordan (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197601.png', name: 'Kuwait (INR ₹)' }
];

// email authentication
var emailInput = document.getElementById('email-field');
var emailLabel = document.getElementById('Email-label');
var emailError = document.getElementById('email-error');

function validateEmail() {
  emailLabel.style.bottom = '45px';
  emailLabel.style.fontSize = '12px';

  if (
    !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = 'Please enter a valid email';
    return false;
  }
  emailError.innerHTML = '';
  return true;
}

// Padmini Code Dropdown

document.getElementById('select-list-data').addEventListener('click', function(event) {
  event.preventDefault(); 
  dropDown.classList.toggle('show');
});

countries.forEach(country => {
  const optionDiv = document.createElement('div');
  optionDiv.className = 'listOption';
  optionDiv.innerHTML = `
      <img src="${country.img}" />
      <span>${country.name}</span>
  `;
  dropDown.appendChild(optionDiv);
});

dropDown.addEventListener('click', function(e) {
  if (e.target.closest('.listOption')) {
      const selectedCountry = e.target.closest('.listOption').querySelector('span').textContent;
      const selectedImage = e.target.closest('.listOption').querySelector('img').src;

      document.getElementById('dropDown-country-name').textContent = selectedCountry;
      document.getElementById('dropDown-image').src = selectedImage;

      dropDown.classList.remove('show'); 
  }
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('#select-list-data') && !event.target.closest('#dropDown')) {
      dropDown.classList.remove('show'); 
  }
});

// const slides = document.querySelectorAll('.card-box')
// let counter = 0;

// slides.forEach((slide, index) => {
//     slide.style.left = `${index * 100}%`
// })

// const goPrev = () => {
//     if (counter != 0) {
//         counter--
//         slideImage()
//     }
// }
// const goNext = () => {
//     if (counter < slides.length - 1) {
//         counter++
//         slideImage()
//     }
// }

// const slideImage = () => {
//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`
//     })
// }


// /new code

// const products = document.querySelectorAll(".slider .product")
// let count =0

// function left(){
//   count--
//   scroll()
// }

// function right(){
//    count++
//    scroll()
// }

// function scroll(){
//   products.forEach(function(item){
//     item.style.transform = `translateX(${count * -1250}px)`
//   })
// }




// const slides = document.querySelectorAll('.slider .product')
// let counter = 0;

// slides.forEach((slide, index) => {
//     slide.style.left = `${index * 100}%`
// })

// const goPrev = () => {
//     if (counter != 0) {
//         counter--
//         slideImage()
//     }
// }
// const goNext = () => {
//     if (counter < slides.length - 1) {
//         counter++
//         slideImage()
//     }
// }

// const slideImage = () => {
//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`
//     })
// }



// const slides = document.querySelectorAll('.slider .product');
// let counter = 0;

// slides.forEach((slide, index) => {
//     slide.style.left = `${index * 100}%`;
// });

// const goPrev = () => {
//     if (counter > 0) {
//         counter--;
//         slideImage();
//     }
// };

// const goNext = () => {
//     if (counter < slides.length - 1) {
//         counter++;
//         slideImage();
//     }
// };

// const slideImage = () => {
//     const slider = document.querySelector('.slider');
//     slider.style.transform = `translateX(-${counter * 420}px)`; // 400px width + 20px margin
// };
// slideImage();


// const initSlider = () => {
//   const slideButtons = document.querySelectorAll(".slider .slider-button");

//   slideButtons.forEach(button => {
//     button.addEventListener("click", () => {
//       console.log(button);
      
//     });
//   });
// }

// window.addEventListener("load",initSlider);



// -----------------

// const slides = document.querySelectorAll("image");
// var counter = 0;
// // console.log(image);
// slides.forEach(
//   (image,index) => {
//     image.style.left =`${index * 100}%`
//   }
// )

// const goPrev = () => {
//   counter--
//   alert()
//   slideImage()
// }

// const goNext = () => {
//   counter++
//   alert()

//   slideImage()
// }



// const slideImage = () => {
//   slides.forEach(
//     (image) =>{
//       image.style.transform = `transalteX(-${counter * 100}%)`
//     }
//   )
// }


// new2
// document.addEventListener("DOMContentLoaded", () => {
//   // Select all products (slides)
//   const slides = document.querySelectorAll(".product");
//   let counter = 0;

//   // Position each product slide side by side
//   slides.forEach((image, index) => {
//       image.style.left = `${index * 100}%`;
//   });

//   // Function to move to the previous slide
//   const goPrev = () => {
//       // Decrease the counter but don't go below 0
//       counter = Math.max(counter - 1, 0);
//       slideImage();
//   };

//   // Function to move to the next slide
//   const goNext = () => {
//       // Increase the counter but don't go beyond the total number of slides
//       counter = Math.min(counter + 1, slides.length - 1);
//       slideImage();
//   };

//   // Function to slide images by translating them
//   const slideImage = () => {
//       slides.forEach((image) => {
//           image.style.transform = `translateX(-${counter * 100}%)`;
//       });
//   };

//   // Expose the functions globally so they can be called in the HTML buttons
//   window.goPrev = goPrev;
//   window.goNext = goNext;
// });


// 3
