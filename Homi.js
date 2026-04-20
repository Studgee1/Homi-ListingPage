
import Swiper from "./node_modules/swiper/swiper-bundle.min.mjs";
import { svgs } from "./Svgs.js";
import { propsInListCont } from "./propsData.js";

// swiper for top trend box 2



// injecting the navBar
const propTypesCont = document.querySelector('.propType');
const quickBtnCont = document.querySelector('.quickBtn');
const trendBox1 = document.querySelector('.trendBox1')
const quickMsg = document.querySelector('.quickMsg')
// function for scrolling horizontal
const scrolhorizontal = (element) => {
element.addEventListener('wheel', (e) =>{
  e.preventDefault();
  element.scrollLeft += e.deltaY;
}, {passive: false})
};

scrolhorizontal(propTypesCont);
scrolhorizontal(quickBtnCont);
scrolhorizontal(trendBox1);
scrolhorizontal(trendBox1);
scrolhorizontal(quickMsg);





// button toggle on click
const propTypeBtn = document.querySelectorAll('.propType span');
const servicesBtn = document.querySelectorAll('.quickBtn span');
servicesBtn.forEach(item => item.className = 'quickBtn-span')

servicesBtn.forEach(item => {
  item.addEventListener('click', () => {

    // remove active from ALL buttons
    servicesBtn.forEach(btn => {
      btn.classList.remove('quickBtn-active');
    });

    // add active only to clicked one
    item.classList.add('quickBtn-active');

  });
});


propTypeBtn.forEach(item => item.className = 'proptypeNormal');
propTypeBtn.forEach(item => {
  item.addEventListener('click',()=>{

    propTypeBtn.forEach(item => {
      item.classList.remove('propType-active');
    })
    item.classList.add('propType-active')
  })
})






const paginationNum = document.querySelector('.paginationNum')
const template = document.getElementById('postUpdate');
const postGridCont = document.querySelector('.postGridCont');
// postGridCont.style.backgroundColor = 'black'

 const updatePost = (postData) => {
  const clone = template.content.cloneNode(true);
  const postEl = clone.querySelector('.listBox');
  const midlist = clone.querySelector('.midListCont');
  midlist.style.cursor = 'pointer'
  const tagCont = clone.querySelector('.tagCont');
  const beds = clone.querySelector('.beds');
  const baths = clone.querySelector('.baths');
  const sqft = clone.querySelector('.sqft');
  const timePost = clone.querySelector('.timePost');
  const img = clone.querySelector('.img');
  const img1 = clone.querySelector('.img1');
  const addwishList = clone.querySelector('.addwishList');
  const loc = clone.querySelector('.loc');
  

  const dealtype = clone.querySelector('.dealtype');

  const priceBooking = clone.querySelector('.priceBooking');
  const propTitle = clone.querySelector('.propTitle');

  // TOP
  tagCont.innerHTML = `<span class='avail'></span>` + postData.name;
  beds.textContent = 'Beds: ' + postData.bed;
  baths.textContent = 'Baths: ' + postData.bath;
  sqft.textContent = 'Sqft: ' + postData.sqft;

  // MIDDLE
  timePost.textContent = postData.postTimestamp + ' ago';
  img.src = postData.image[0];
  img1.src = postData.image[1];
  loc.textContent = `${postData.location.region} - ${postData.location.area}`;

  addwishList.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
  fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" 
    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
  </svg>`;

  // LOWER
  dealtype.textContent = postData.dealtype;
if(dealtype.textContent === 'Sale'){dealtype.style.color = '#1abc9c'};
if(dealtype.textContent === 'Reserve'){dealtype.style.color = '#74a820ff'};
if(dealtype.textContent === 'Rental'){dealtype.style.color = '#e67e22'};
if(dealtype.textContent === 'Shortlet'){dealtype.style.color = '#a477ffff'}
  priceBooking.textContent = postData.price;
  propTitle.textContent = postData.title;

  // Wishlist toggle
  let addedWishList = false;

  addwishList.addEventListener('click', (e) => {
    e.stopPropagation();

    if (!addedWishList) {
      addwishList.firstElementChild.style.color = 'var(--clrSwitchDrk2)';
      addedWishList = true;
    } else {
      addwishList.firstElementChild.style.color = '';
      addedWishList = false;
    }
  });
  requestAnimationFrame(() => postEl.classList.add('show'));
  postGridCont.appendChild(postEl);
}

/* =========================
   GET ALL LISTINGS
========================= */
 function getAllListings() {
  return Array.from(postGridCont.querySelectorAll('.listBox'));
}
/* =========================
   DISPLAY PAGE
========================= */
let itemsPerPage = 16;
 function displayPage(page) {
  const listings = getAllListings();
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  listings.forEach((item, index) => {
    item.style.display =
      index >= start && index < end ? 'grid' : 'none';
  });

  highlightActiveButton(page);
}
/* =========================
   HIGHLIGHT ACTIVE BUTTON
========================= */
 function highlightActiveButton(page) {
  const buttons = paginationNum.querySelectorAll('button');
  buttons.forEach(btn =>
     {btn.style.backgroundColor = ''
     btn.style.cursor = 'pointer'
    }
    );

  const activeBtn = paginationNum.querySelector(
    `button[data-page="${page}"]`
  );

  if (activeBtn) 
    {
      activeBtn.style.backgroundColor = '#890000';
      activeBtn.style.color = 'white';
      activeBtn.style.cursor = 'pointer';
      activeBtn.style.height = '25px';
      activeBtn.style.width = '25px';
      activeBtn.style.font = '14px poppins'

      activeBtn.style.borderRadius = '50%'
    }
}
/* =========================
   SETUP PAGINATION
========================= */
let currentPage = 1; //
 function setupPagination() {
  const listings = getAllListings();
  const pageCount = Math.ceil(listings.length / itemsPerPage);

  paginationNum.innerHTML = '';

  // PREV BUTTON
  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = svgs[3].prev;
  prevBtn.className = 'prevBtn'
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage);
    }
  });
  paginationNum.appendChild(prevBtn);

  // NUMBER BUTTONS
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.dataset.page = i;
    btn.className = 'pagNum'

    btn.addEventListener('click', () => {
      currentPage = i;
      displayPage(currentPage);
    });

    paginationNum.appendChild(btn);
  }

  // NEXT BUTTON
  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = svgs[4].next;
  nextBtn.className = 'nxtBtn'
  nextBtn.addEventListener('click', () => {
    if (currentPage < pageCount) {
      currentPage++;
      displayPage(currentPage);
    }
  });
  paginationNum.appendChild(nextBtn);
}

/* =========================
   RENDER ALL POSTS
========================= */
const insideListing = document.querySelector('.insidePosting')
const closePst = document.querySelector('.closePst')
closePst.addEventListener('click',() => {
  insideListing.close()
})

insideListing.addEventListener('click', (e) => {
  // e.target is the element clicked
  if (e.target === insideListing) {
    insideListing.close(); // only closes if backdrop clicked
  }
})

const sliderCont = document.querySelector('.sliderCont')
const  div1 = document.createElement('div')
const div2 = document.createElement('div')
div2.className = 'swiper-wrapper'
div1.className = 'swiper'

  const swiperCustomNav = document.createElement('div')
 const swiperPagination = document.createElement('div')
 swiperCustomNav.className = 'swiper-custom-nav'
 swiperCustomNav.innerHTML = svgs[8].arrowLeft + svgs[7].arrowRight ;
 swiperPagination.className = 'swiper-custom-pagination'
swiperCustomNav.firstElementChild.id = 'arrowLeft'
swiperCustomNav.lastElementChild.id = 'arrowRight'



 
 function propPrice (index){
const propdealtypehtm = document.querySelector('.propdealtypehtm')
const propCost = document.querySelector('.propCost')
propdealtypehtm.innerText = propsInListCont[index].dealtype + ' :  '
propCost.innerText = propsInListCont[index].price


if(propdealtypehtm.textContent === 'Sale'+ ' :  '){propdealtypehtm.style.color = '#1abc9c'};
if(propdealtypehtm.textContent === 'Reserve'+ ' :  '){propdealtypehtm.style.color = '#74a820ff'};
if(propdealtypehtm.textContent === 'Rental'+ ' :  '){propdealtypehtm.style.color = '#e67a22'};
if(propdealtypehtm.textContent === 'Shortlet'+ ' :  '){propdealtypehtm.style.color = '#a477ffff'}

}

 function propTitle (index) {
  const propTitle = document.querySelector('.propTitle1')
  const location = document.createElement('span')
  location.innerText = propsInListCont[index].location.region + '-' +propsInListCont[index].location.area
  propTitle.innerText = propsInListCont[index].title
  propTitle.append(location)
}

 function propDetails (index) {
  const propDetailCont = document.querySelector('.propDetails')
 propDetailCont.innerText  = propsInListCont[index].details;
}

let swiperInstance; // keep global
 function showImges(index) {
  sliderCont.innerHTML = ""; // clear old content
  const property = propsInListCont[index];
  // Create fresh Swiper container each time
  const swiperEl = document.createElement('div');
  swiperEl.className = 'swiper';
  const wrapper = document.createElement('div');
  wrapper.className = 'swiper-wrapper';
  swiperEl.appendChild(wrapper);
  // Add slides
  property.image.forEach((imgSrc) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.width = "100%";       // make image fit slide
    img.style.display = "block";    // remove extra spacing
    wrapper.appendChild(slide);
    slide.appendChild(img);
  });

 
   swiperEl.append(swiperCustomNav)
  sliderCont.appendChild(swiperEl);
  sliderCont.append(swiperPagination)


 

  // Destroy old Swiper if exists
  // if (swiperInstance) swiperInstance.destroy(true, true);

  // Initialize Swiper
  swiperInstance = new Swiper('.swiper', {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween:24,
    lazyLoading:true,
    loop: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '#arrowRight',
      prevEl: '#arrowLeft'
    },
    // pagination: {
    //   el: ('.swiper-custom-pagination'),
    //   clickable: true,
    //   renderBullet: function(index, className){
    //     return `<div class='${className}'>
    //     <span class='number'>${index + 1}</span>
    //     <span class='line'></span></div>`
    //   }
    // }
    
  });

  // Fix container height to prevent vertical scroll
  sliderCont.style.overflow = 'hidden';
  // sliderCont.style.maxHeight = '400px'; // adjust as needed
}

function renderAllPosts() {
  propsInListCont.forEach((post,index) => {
      updatePost(post);

      // When last post finishes
      if (index === propsInListCont.length - 1) {
    
      // render all list containers 
          const allMidListCont = postGridCont.querySelectorAll('.midListCont');
       allMidListCont.forEach((item,index) => {
        item.addEventListener('click', () => {
          showImges(index);
          propTitle (index)
           propDetails(index)
           propPrice (index)

          insideListing.showModal()
        })
       })
          setupPagination();
          displayPage(1);

      }

  });
}

renderAllPosts();


const popUpchat = document.querySelector('.chatRltyMsg');
const popChatCont = document.querySelector('.sendRealtorMsg')
const propReview = document.querySelector('.propReview')
const reviewForms = document.querySelector('.reviewForms') 
const quickSendcontInput = document.querySelector('.chatpopUpcontain')
let chatOpen = false
popUpchat.addEventListener('click',() => {
  if(!chatOpen){
  popChatCont.style.height = '150px'
  popChatCont.style.transition = 'height 0.3s ease-in'
  popUpchat.innerText = 'Close Chat'
  popUpchat.transition = 'all 0.3s ease'
  quickSendcontInput.style.display = 'flex'
  reviewForms.style.display = 'none'
  propReview.style.height = '200px'
 chatOpen = true}else{
  quickSendcontInput.style.display = 'none'
  popChatCont.style.height = 0;
  popChatCont.style.transition = 'height 0.3s ease-out'
  popUpchat.innerText = 'Chat Realtor'
  popUpchat.transition = 'all 0.3s ease'
  reviewForms.style.display = 'flex'
  propReview.style.height = '300px'
  chatOpen = false
 }
})

const tognavBtn = document.createElement('div');
tognavBtn.className = 'tognavBtn';
const tognavBtn1 = document.createElement('div');
tognavBtn1.className = 'tognavBtn1'
 
// for nav menu
const header = document.querySelector('header');
const navSelect = document.createElement('div');
navSelect.className='navSelect';
header.append(navSelect,tognavBtn,tognavBtn1)
const navBtn = document.querySelectorAll('.navbtn');

// for buy
 const botCont = document.createElement('div');
 const botContInside = document.createElement('span');
 const botContInside1 = document.createElement('div');
 const botContInside2 = document.createElement('div');
  botCont.className = 'botCont'
 botContInside.className = 'botContInside';
 botContInside1.className = 'botContInside1';
 botContInside2.className = 'botContInside2';
  botCont.append(botContInside,botContInside1,botContInside2)
 navSelect.append(botCont);

 botContInside.innerHTML = `
 <div>
                  <p>Building Materials</p>
                  <div>
                  <button>Cement, Blocks, and Bricks</button>
                  <button>Roofing Sheets & Tiles</button>
                  <button>Doors & Windows</button>
                  <button>Plumbing & Electrical Supplies</button>
                  <button>Finishing Materials (tiles, paints, bathroom fittings)</button>
                  </div>
</div>
 `

 botContInside1.innerHTML = `
 <div>
                  <p>House Designs & Plans</p>
                  <div>
                  <button>2-Bedroom Plans</button>
                  <button>3-Bedroom Plans</button>
                  <button>Duplex & Luxury Villas</button>
                  <button>Modern Minimalist Homes</button>
                  <button>Traditional / Local Ghanaian Designs</button>
                  </div>
</div>
 `

 botContInside2.innerHTML= `
 <div>
                  <p>Real Estate Listing</p>
                  <div>
                  <button>Houses for Sale</button>
                  <button>Land for Sale</button>
                  <button>Commercial Properties</button>
                  <button>Buy Land + Get Building Plan + Estimated Costing</button>
                  <button>Custom House Design Services</button>
                  <button>Consultation with Architects & Engineers</button>  
                  </div> 
</div>
 `

 

// for sell
 const sellCont = document.createElement('div');
 const sellContInside = document.createElement('div');
 const sellContInside1 = document.createElement('div');
 const sellContInside2 = document.createElement('div');







 sellCont.className = 'sellCont'
 sellContInside.className = 'sellContInside';
 sellContInside1.className = 'sellContInside1';
 sellContInside2.className = 'sellContInside2';
 sellCont.append(sellContInside,sellContInside1,sellContInside2)
 navSelect.append(sellCont);
sellContInside.innerHTML = `
 <div>
  <p class='title'>Work with Professionals</p>
  <div>
   <button>Get in Touch with an Estate Developer</button>
    <button>Find an Agent to List Your Property</button>
      <button>Connect with a Property Management Company</button> 
  </div>
    <p class='subTitle'>Trusted professionals to help you every step of the way.</p>
 </div>
 `
sellContInside1.innerHTML = `
 <div>
 <p class='title'>Advertise Your Offering</p>
  <div>
    <button>Building Materials</button>
    <button>Architectual Designs</button>
    <button>Interior Designs</button>
    <button>Special Service providers</button>
  </div>
 <p class='subTitle'>All listings must be verified & approved by Homi.</p>
 </div>
 `

 sellContInside2.innerHTML = `
 <div>
      <p class='title'>Partner with Homi</p>
      <div>
     <button class='call2Act'>Become an Estate Partner</button>
     </div>
   <p class='subTitle'>Homi ensures all estate partners meet our quality standards.</p>
</div>
   `





//  for Rent
 const rentCont = document.createElement('div');
 const rentContInside = document.createElement('div');
 const rentContInside1 = document.createElement('div');
 const rentContInside2 = document.createElement('div');
 rentCont.className = 'rentCont'
 rentContInside.className = 'rentContInside';
 rentContInside1.className = 'rentContInside1';
 rentContInside2.className = 'rentContInside2';
 rentCont.append(rentContInside,rentContInside1,rentContInside2)
 navSelect.append(rentCont);
rentContInside.innerHTML= `
 <div>
  <h4>Commercial Spaces</h4>
  <div>
   <button>Offices & Co-working Spaces</button>
   <button>Shops & Retail Spaces</button>
   <button>Warehouses & Storage</button>
   <button>Hotels & Resort Booking</button>
   <button>Event Venues & Halls</button>
   </div>
</div>`
rentContInside1.innerHTML = `
 <div>
  <h4>Residential Rentals</h4>
  <div>
  <button>Apartments</button>
  <button>Houses</button>
  <button>Short stay and Co-living Rentals</button>
  <button>Student Hostels</button>
  </div>
</div>
`
rentContInside2.innerHTML = `
<div>
  <h4>Event Essentials</h4>
  <div>
  <button>Canopies & Tents</button>
  <button>Chairs & Tables</button>
  <button>Sound & DJ Systems</button>
  <button>Lighting & Decorations</button>
  <button>Generators & Cooling Systems</button>
  <button>Sanitary Units</button>  
  </div>
</div> 
`



// for manage
 const mangCont = document.createElement('div');
 const mangContInside = document.createElement('div');
 const mangContInside1 = document.createElement('div');
 const mangContInside2 = document.createElement('div');
 mangCont.className = 'mangCont'
 mangContInside.className = 'mangContInside';
 mangContInside1.className = 'mangContInside1';
 mangContInside2.className = 'mangContInside2';
 mangCont.append(mangContInside,mangContInside1,mangContInside2)
 navSelect.append(mangCont);

 mangContInside.innerHTML= `
  <div>
                  <h4>Build</h4>
                  <div> 
                  <button>Custom House Designs</button>
                  <button>Architect and Engineer Consultation</button>
                  <button>Cost Estimates and Planning</button>
                  <button>Construction Site Service Providers</button>
                  </div>
</div>
 `
 mangContInside1.innerHTML = `
   </div>

                  <div>
                  <h4>Manage</h4>
                  <div>
                  <button>Property Management</button>
                  <button>Maintenance Services</button>
                  <button>Tenant & Rental Management</button>
                  <button>Legal & Documentation Support</button>
                  <button>Property Valuation & Advisory</button>
                  </div>
                </div>

 `
mangContInside2.innerHTML = `
 <div >
                  <h4>Homi Global Access</h4>
                  <div>
                  <button>Live Video Property Tours</button>
                  <button>360° Virtual Tours</button>
                  <button>Remote Acquisition & Purchase</button>
                  <button>Remote Legal & Documentation Support</button>
                  <button>Travel & Tour Services</button> 
                  </div>
</div>
`

// for toggle nav buyBtn
let activeIndex = null; // index of the currently open button, null if none

navBtn.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent document click from collapsing immediately

    // If clicking the currently active button, toggle it
    if (activeIndex === index) {
      collapseNav();
      activeIndex = null;
    } else {
      // Collapse previous if another button is active
      if (activeIndex !== null) collapseNav();

      // Open the clicked button
      navSelect.style.height = '400px';
      navSelect.style.transition = 'height 0.5s ease-in';
      tognavBtn.style.height = '20px';
      tognavBtn1.style.height = '20px';
      tognavBtn.style.transition = 'height 0.3s ease-in';
      tognavBtn1.style.transition = 'height 0.3s ease-in';

      // Button-specific logic
     if (index === 0) {
        mangCont.style.display = 'none';
        rentCont.style.display = 'none';
        sellCont.style.display = 'none';
        botCont.style.display = 'grid';
        tognavBtn.style.width = '70px';
        tognavBtn1.style.width = '70px';
        tognavBtn.style.left = '20%';
        tognavBtn1.style.left = '20%';
      }
      if (index === 1) {
        mangCont.style.display = 'none';
        rentCont.style.display = 'none';
        botCont.style.display = 'none';
        sellCont.style.display = 'grid';
        tognavBtn.style.width = '70px';
        tognavBtn1.style.width = '70px';
        tognavBtn.style.left = '27%';
        tognavBtn1.style.left = '27%';
      }
      if (index === 2) {
        mangCont.style.display = 'none';
        rentCont.style.display = 'grid';
        botCont.style.display = 'none';
        sellCont.style.display = 'none';
        tognavBtn.style.width = '70px';
        tognavBtn1.style.width = '70px';
        tognavBtn.style.left = '34.2%';
        tognavBtn1.style.left = '34.2%';
      }
      if (index === 3) {
        mangCont.style.display = 'grid';
        rentCont.style.display = 'none';
        sellCont.style.display = 'none';
        botCont.style.display = 'none';
        tognavBtn.style.width = '120px';
        tognavBtn1.style.width = '120px';
        tognavBtn.style.left = '68%';
        tognavBtn1.style.left = '68%';
      }

      activeIndex = index; // mark this button as active
    }
  });
});

// Collapse nav function (resets all buttons and hides content)
function collapseNav() {
  navSelect.style.height = 0;
  navSelect.style.transition = 'height 0.5s ease-out';
  tognavBtn.style.height = 0;
  tognavBtn1.style.height = 0;
  tognavBtn.style.transition = 'height 0.3s ease-out';
  tognavBtn1.style.transition = 'height 0.3s ease-out';

  // Reset widths and positions
  tognavBtn.style.width = 0;
  tognavBtn1.style.width = 0;
  tognavBtn.style.left = '15.5%';
  tognavBtn1.style.left = '15.5%';

  // Hide all content
  mangCont.style.display = 'none';
  rentCont.style.display = 'none';
  sellCont.style.display = 'none';
  botCont.style.display = 'none';
}

// Collapse nav if clicking outside
document.addEventListener('click', (e) => {
  if (!navSelect.contains(e.target) && ![...navBtn].some(btn => btn.contains(e.target))) {
    if (activeIndex !== null) {
      collapseNav();
      activeIndex = null;
    }
  }
});



const clientworkspace = document.querySelector('.clientworkspace')

// for notification icon btn dashboards
const notifi = document.createElement('span')
notifi.className = 'notifi'
notifi.innerHTML = svgs[2].notification
notifi.style.color = 'white'
notifi.style.marginLeft = '10px'
notifi.style.transform = 'translateX(30px)'

// for cart icon btn dashboards
const cartList = document.createElement('span')
cartList.innerHTML = svgs[10].cartList;
cartList.className = 'cartList';
cartList.style.color= 'white'
cartList.style.width = '20px'
cartList.style.width = '20px'
cartList.style.marginLeft = '15px'
cartList.style.marginTop = '3px'
cartList.style.cursor = 'pointer'
cartList.style.transform = 'translateX(-33px)'


// for viewList icon btn dashboards
const viewList = document.createElement('span')
viewList.className = 'viewList'
viewList.innerHTML = svgs[9].viewList
viewList.style.color = 'white'
viewList.style.width = '20px'
viewList.style.height = '20px'
viewList.style.marginLeft = '15px'
viewList.style.marginBottom = '15px'
viewList.style.cursor = 'pointer'
viewList.style.transform = 'translateX(-66px)'

// for message icon btn dashboads 
const message = document.createElement('span')
message.className = 'message';
message.innerHTML = svgs[1].message
message.style.color = 'white'
message.style.marginLeft = '15px'
message.style.transform = 'translateX(0px)'

// notifi.style.paddingLeft = '10px'

// STATE
let isOpen = false;

// EXPAND FUNCTION
function expandWorkspace() {
  clientworkspace.style.width = '100%';
  // clientworkspace.style.gridColumn = '16/20';
  clientworkspace.style.transition = 'width 0.6s ease';

  message.style.transition = 'transform 0.6s ease';
  notifi.style.transition = 'transform 0.6s ease';
  cartList.style.transition = 'transform 0.6s ease';
  viewList.style.transition = 'transform 0.6s ease';

  cartList.style.transform = 'translateX(110px)';
  message.style.transform = 'translateX(100px)';
  viewList.style.transform = 'translateX(120px)';
  notifi.style.transform = 'translateX(90px)';
  isOpen = true
}

// COLLAPSE FUNCTION
function collapseWorkspace() {
  clientworkspace.style.width = '';
  // clientworkspace.style.gridColumn = '17/20';
  clientworkspace.style.transition = 'width 0.6s ease';

  message.style.transform = 'translateX(0px)';
  notifi.style.transform = 'translateX(30px)';
  cartList.style.transform = 'translateX(-33px)';
  viewList.style.transform = 'translateX(-66px)';

  message.style.transition = 'transform 0.6s ease';
  notifi.style.transition = 'transform 0.6s ease';
  cartList.style.transition = 'transform 0.6s ease';
  viewList.style.transition = 'transform 0.6s ease';
  isOpen = false
}

// TOGGLE ON PROFILE IMAGE CLICK
clientworkspace.addEventListener('mouseover',() => {
  if(!isOpen)
  expandWorkspace();
})
clientworkspace.addEventListener('mouseleave', () => {
  if(isOpen)
  collapseWorkspace();
})


clientworkspace.append(notifi,message,cartList,viewList)


// const modes = ["Buy", "Sell", "Rent"];

// let selected = "Buy";

// const btn = document.getElementById("dropBtn");
// const list = document.getElementById("dropList");

// function renderOptions() {
//   list.innerHTML = "";

//   modes
//     .filter(mode => mode !== selected)
//     .forEach(mode => {
//       const div = document.createElement("div");
//       div.className = "option";
//       div.textContent = mode;

//       div.addEventListener("click", () => {
//         selected = mode;
//         btn.childNodes[0].nodeValue = selected + " ";
//         list.classList.remove("open");
//         renderOptions();
//       });

//       list.appendChild(div);
//     });
// }

// btn.addEventListener("click", () => {
//   list.classList.toggle("open");
// });

// renderOptions();

const chatCont = document.querySelector('.chatCont')
const palsProfiles = document.querySelector('.palsProfiles') 
let chatisActive = false;

message.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent triggering document click

  if (!chatisActive) {
    openChat()
    sessionStorage.setItem('chatContOpen', 'true');
  } else {
    closeChat();
    sessionStorage.setItem('chatContOpen', 'false')
  }
});
window.addEventListener('load',() => {
  const isOpen = sessionStorage.getItem('chatContOpen')
  if(isOpen === 'true')
  {openChat()} else {closeChat}
})

document.addEventListener('click', (e) => {
  if (chatisActive && !chatCont.contains(e.target)) {
    closeChat();
  }
});

const userchatProfile = document.querySelector('.userChatProfile')

function openChat() {
  chatCont.style.width = '380px';
  chatCont.style.transition = 'width 0.6s ease-in';


  setTimeout(() => {
    palsProfiles.style.display = 'flex';
    userchatProfile.style.display = 'flex'
  }, 600);

  chatisActive = true;
}

function closeChat() {
  chatCont.style.width = '0';
  palsProfiles.style.display = 'none';

  setTimeout(() => {
    userchatProfile.style.display = 'none'
  },600)

  chatisActive = false;
}
const advansSerch = document.querySelector('.sortprops')
const asideBar = document.querySelector('.aside');
const listCont = document.querySelector('.lists')


function fixedasideBarState () {
 asideBar.style.position = "fixed";
        advansSerch.style.position = 'fixed'
        advansSerch.style.left = '0'
        advansSerch.style.top = '220px'
        advansSerch.style.width = ''
        advansSerch.style.height= '100%'
        listCont.style.position = 'relative'
        // listCont.style.marginLeft ='20%'

        listCont.style.marginTop ='2%'
         asideBar.style.top = "100px";
}

function releaseasideBarState(){
 asideBar.style.position = "absolute";
       advansSerch.style.position = 'absolute'
       advansSerch.style.left = '-10px'
        advansSerch.style.top = '0'
        advansSerch.style.width = ''
        advansSerch.style.height= '100%'
        listCont.style.position = 'relative'
        listCont.style.marginTop ='0px'
                // listCont.style.marginLeft ='21%'
              asideBar.style.top = '800px'
}


document.addEventListener('DOMContentLoaded', () => { 
   const initialOffset = asideBar.offsetTop ; window.addEventListener('scroll', () => 
    { 
      if (window.scrollY >= initialOffset - 92)
       { fixedasideBarState ();
        sessionStorage.setItem('asideFixedState', 'true')
        }
       else {
         releaseasideBarState()
        sessionStorage.setItem('asideFixedState', 'false')
        
       }
      }); });

      window.addEventListener('load',()=>{
        const isFixed = sessionStorage.getItem('asideFixedState')

        if (isFixed === 'true'){fixedasideBarState()}
        else(releaseasideBarState())
      })


      // functions for hover

     function hoverElEff (el) {
      el.addEventListener('mouseover',() => {
        el.firstElementChild.style.scale = '1.5'
      });
      el.addEventListener('mouseleave', () => {
        el.firstElementChild.style.scale = '1'
      })
     }

     hoverElEff(notifi)
     hoverElEff(message)
     hoverElEff(viewList)
     hoverElEff(cartList)


const clientNotify = document.querySelector('.clientNotify')





function opentclientNotifi () {
  clientNotify.style.height = '25%'
  clientNotify.style.transition = 'height 0.6s ease-in'
  clientNotify.style.borderBottom = ' 4px solid var(--clrSwitchDrk2)'
}

function closeclientNotifi () {
  clientNotify.style.height = '0'
  clientNotify.style.padding = '0'
  setTimeout(() => {
    clientNotify.style.border = 'none'
  },600)


}
  let notifyToggle = false;
notifi.addEventListener('click', (e) => {
  e.stopPropagation
if(!notifyToggle){
  opentclientNotifi ()
  notifyToggle = true;
}else{
  closeclientNotifi ()
  notifyToggle = false
}
})





const chattingPalsCont = document.querySelector('.chattingpalsCont')
function addMessage(msg){
  const chatFromMe = document.createElement('div')
const MsgfromMeInput = document.createElement('span')
const msgSentCheck = document.createElement('span')
MsgfromMeInput.className = 'MsgfromMeInput '
chatFromMe.className = 'chatFromMe chating'
msgSentCheck.className = 'msgSentCheck'
msgSentCheck.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"></path>
              </svg>`;
MsgfromMeInput.textContent = msg
MsgfromMeInput.append(msgSentCheck)
chatFromMe.append(MsgfromMeInput)
chattingPalsCont.append(chatFromMe)

}

const input = document.querySelector('.MsgInputfield')
function sendMessage(){
  const msg = input.value.trim()
  if (!msg) return;
  addMessage(msg);
  input.value = '';
  chattingPalsCont.scrollTop = chattingPalsCont.scrollHeight;
}

input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter')
    sendMessage();
})

const emojiPicker = document.querySelector('.imojiPicker')
const emojiBtn = document.querySelector('.emojiBtn')
const emojis = ["😀","😂","🤣","😍","😎","🤔","😢","👍","👎","❤️","🎉","🙌"];
emojis.forEach(e => {
  const span = document.createElement('span')
  span.textContent = e;
  span.style.cursor = 'pointer'
  span.addEventListener('click',() => 
    input.value += e );
  emojiPicker.appendChild(span)
})
emojiBtn.addEventListener('click', () => {
  emojiPicker.style.transition = 'height 0.6s ease-in-out'
  emojiPicker.style.flexWrap = 'wrap'
  emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block'
})

const fileInput = document.querySelector('.fileInput');
const attachBtn = document.querySelector('.attachBtn')
const cameraBtn = document.querySelector('.cameraBtn')
let mediaRecorder;
let audioChucks = [];
attachBtn.addEventListener('click',() => fileInput.click());
cameraBtn.addEventListener('click',()=> fileInput.click())
fileInput.addEventListener('change', e => {
const file = e.target.files[0];
if(!file) return;
const reader = new FileReader();
reader.onload = () => {
  const chatFromMe = document.createElement('div')
const MsgfromMeInput = document.createElement('span')
const msgSentCheck = document.createElement('span')
MsgfromMeInput.className = 'MsgfromMeInput '
chatFromMe.className = 'chatFromMe chating'
msgSentCheck.className = 'msgSentCheck'
msgSentCheck.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"></path>
              </svg>`;

  const img = document.createElement('img')
  img.src = reader.result;
  img.className = 'message-img';

  MsgfromMeInput.append (img)
  
  img.style.height = '100%'
  img.style.width = '100%'
  img.style.objectFit = 'cover'
  img.style.borderRadius = '10px'
MsgfromMeInput.append(msgSentCheck)
chatFromMe.append(MsgfromMeInput)
chattingPalsCont.append(chatFromMe)
  chattingPalsCont.scrollTop = chattingPalsCont.scrollHeight;

};
reader.readAsDataURL(file);
fileInput.value = "";
});

const recordBtn = document.querySelector('.chattingsendSVG')
recordBtn.addEventListener('mousedown', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true});
    mediaRecorder = new MediaRecorder(stream);
    audioChucks = [];
    mediaRecorder.start();

    mediaRecorder.ondataavailable = e => audioChucks.push(e.data);
  }catch (err) {
    alert('Microphone access denied');
    console.error(err);
  }
})

recordBtn.addEventListener('mouseup', () => {

  const chatFromMe = document.createElement('div')
const MsgfromMeInput = document.createElement('span')
const msgSentCheck = document.createElement('span')
MsgfromMeInput.className = 'MsgfromMeInput '
chatFromMe.className = 'chatFromMe chating'
msgSentCheck.className = 'msgSentCheck'
msgSentCheck.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"></path>
              </svg>`;



  if(!mediaRecorder) return;
  mediaRecorder.stop();
  mediaRecorder.onstop = () => {
    const blob = new Blob(audioChucks, { type: 'audio/webm'});
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.style.width = '200px'
    audio.style.height = '30px'
    audio.style.borderRadius = 'none'
    audio.src = url;
    audio.controls = true;
  MsgfromMeInput.append (audio)
MsgfromMeInput.append(msgSentCheck)
chatFromMe.append(MsgfromMeInput)
chattingPalsCont.append(chatFromMe)
  chattingPalsCont.scrollTop = chattingPalsCont.scrollHeight;

  }
})


// navigating to client dashboad 
const logoCont = document.querySelector('.logoCont')


logoCont.addEventListener('click',() => {
 window.location.href = "/HomePage/homi.html"
})
const profileImg = document.querySelector('.profileImg')
profileImg.addEventListener('click',() => {
  window.location.href = "ClientDashBoard/HomiClient.html";
})



propTypeBtn.forEach((item)=>{
  if(item.innerText = ' '){
    item.style.display = 'none'
  }
})


const firstServicesBtn = quickBtnCont.children[0];
const secondServicesBtn = quickBtnCont.children[1];
const thirdServicesBtn = quickBtnCont.children[2];
const forthServicesBtn = quickBtnCont.children[3];
const fifthServicesBtn = quickBtnCont.children[4];
const sixthServiceBtn = quickBtnCont.children[5];
const seventhServiceBtn = quickBtnCont.children[6];
const eighthServiceBtn = quickBtnCont.children[7];
const ninethServiceBtn = quickBtnCont.children[8];
const tenthServiceBtn = quickBtnCont.children[9];
const eleventhServiceBtn = quickBtnCont.children[10];
const twelvthServiceBtn = quickBtnCont.children[11];
const thirteenthServiceBtn = quickBtnCont.children[12];
const fourteenthServiceBtn = quickBtnCont.children[13];
const fifteenthServiceBtn = quickBtnCont.children[14];
const sixteenthServiceBtn = quickBtnCont.children[15];


// console.log(firstServicesBtn.style.backgroundColor = 'green')

const proptypes = ['All', 'Residential Properties', 'commercial Properties','Industrial Properties','Agricultural Properties','Sports and Special Purpose Properties']
const designtypes = ['All','Int Designs','Ext Designs','Arch Designs','Landscape Designs', 'Water feature', 'custom models']
const Marttypes = ['All','lightenings','wall decor', 'furnitures', 'sanituries','Floorings','Artifacts']
const propManagement = ['All','Residential Prop Management', 'Commercial Prop Management','Industrial prop','Mixed-Use prop','Facility Management','Lease Management','Maintenance & Asset','Tenant Management','Short-Term Rental Management', 'Investment prop Management','HOA/Community Management', 'Smart/Tech-Integration prop Management' ]
const artTypes = ['All','Structural & Core Construction Artisans','Finishing Artisans','MEP Artisans','HVAC Artisans','Woodwork & Interior Artisans','Metal & Fabrication Artisans','Exterior & Landscape Artisans','Roofing Spealists','Glass & Finishing Spaecialists','Smart & Security Installation Artisans','Maintenance & Repair Artisans']
const crowdFunding = ['All','Equity-Based CrowdFunding','Debt-Based Crowdfunding','Hybird/Convertible Crowdfunding']
const eventtypes = ['All','Corporate Event Solutions','Social & Lifestyle Event Solutions','Promotional & Marketing Event Solutions','Virtual & Hybird Event Solutions','Community & Estate Event Solutions','Experiential & themed Event Solutions']
const build4human = ['All','Affordable Housing & Shelter Projects','Community Infrastructure Projects','Agricultural & food Security Projects','Skill Development & Artisan Training','Health & Sanitation Projects','Education Infrastructure Projects','Renewable Energy & Sustainability Projects','Disaster Releif & Resilience Building','Community Service & Volunteer Programs']
const moveIntypes = ['All','Core MOve-In Services','Moving & Logistics Services','Installation Services','Interior Setup Services','Smart Home & Security Setup','Lisfestyle & Convenience Services','Administration & Legal Services','Welcome & Experience Services','Corporate/Bulk Move-in Service','Post Move-In Support']
const mortgage = ['All','fixed rate mortgage','Adjustable-Rate Mortagage','Interest-Only Mortgage','Balloon Mortgage','Buy-to-Let Mortgage','Construction Mortgage','Commercial Mortgage', 'Reverse Mortgage','Rent-to-Own','Government-Backed Mortgages','Bridge Loan','Second Mortgage',]
const BuyShare = ['All','Plot Allocation Share','Family/Group Estate Share','Co-Building Housing Share','Farm Use Share','Cooperative Housing Model']
const tourisConne = ['All','Hotel Booking','Tour Packages','Local Guides','Transport Services','Dining Experiences','Shopping Tours', 'Travel Support','Concierge Services','Property Tours']
const realtors = ['All','Residential Realtors','Commercial Realtors','Industrial Realtors','Land REaltors','Luxury Realtors','Leasing/Rental Realtors','Real Estate Investment Realtors','Short-term Rental Realtors','Special Realtors']

const insure = ['All','fire Insurance','All-Risk Insurance','Burglary Insurance','Flood/Natural Disaster Insurance','Rental Property Insurance','Commercial Property Insurance','Construction All-Risk Insurance','Special Insurance'];
const permit = ['All','Estate Agency License','Business Registration','Building Permit','Constructor Registration','Occupancy Permit','Environmental PErmit','Land Title','Survey Plan Approval','Zoning Approval']
const propValid = ['All','title Verification','Survey Validation','Zoning Validation','Government Approval check','Encumbrance','Structural Inspection','Historical Ownership & Chain of Custody','Encroachment & Boundary Assessment','Tax Clearance Verification','Market Valuation/Appraisal']

// for dynamic insertion of types of services
firstServicesBtn.addEventListener('click', () => {
propTypeBtn.forEach((item, index)=>{
  item.textContent = proptypes[index]
  if(item.textContent === proptypes[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})
})

secondServicesBtn.addEventListener('click', () => {
 propTypeBtn.forEach((item, index)=>{
  item.textContent = designtypes[index]
  if(item.textContent === designtypes[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})
});

thirdServicesBtn.addEventListener('click',()=> {
propTypeBtn.forEach((item, index)=>{
  item.textContent = Marttypes[index]
  if(item.textContent === Marttypes[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
});

forthServicesBtn.addEventListener('click',()=>{

propTypeBtn.forEach((item, index)=>{
  item.textContent = propManagement[index]
  if(item.textContent === propManagement[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
})

fifthServicesBtn.addEventListener('click',()=>{

propTypeBtn.forEach((item, index)=>{
  item.textContent = artTypes[index]
  if(item.textContent === artTypes[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
});

sixthServiceBtn.addEventListener('click',()=>{

propTypeBtn.forEach((item, index)=>{
  item.textContent = crowdFunding[index]
  if(item.textContent === crowdFunding[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
})

seventhServiceBtn.addEventListener('click',()=>{

propTypeBtn.forEach((item, index)=>{
  item.textContent = eventtypes[index]
  if(item.textContent === eventtypes[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
})

eighthServiceBtn.addEventListener('click',()=>{

propTypeBtn.forEach((item, index)=>{
  item.textContent = build4human[index]
  if(item.textContent === build4human[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
})

ninethServiceBtn.addEventListener('click',()=>{

propTypeBtn.forEach((item, index)=>{
  item.textContent = moveIntypes[index]
  if(item.textContent === moveIntypes[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
})

tenthServiceBtn.addEventListener('click',()=>{

propTypeBtn.forEach((item, index)=>{
  item.textContent = mortgage[index]
  if(item.textContent === mortgage[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
})

eleventhServiceBtn.addEventListener('click',()=>{

propTypeBtn.forEach((item, index)=>{
  item.textContent = BuyShare[index]
  if(item.textContent === BuyShare[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
})

twelvthServiceBtn.addEventListener('click',()=>{

propTypeBtn.forEach((item, index)=>{
  item.textContent = tourisConne[index]
  if(item.textContent === tourisConne[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
})

thirteenthServiceBtn.addEventListener('click',()=>{

propTypeBtn.forEach((item, index)=>{
  item.textContent = insure[index]
  if(item.textContent === insure[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
})

fourteenthServiceBtn.addEventListener('click',()=>{

propTypeBtn.forEach((item, index)=>{
  item.textContent = realtors[index]
  if(item.textContent === realtors[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
})

fifteenthServiceBtn.addEventListener('click',()=>{

propTypeBtn.forEach((item, index)=>{
  item.textContent = permit[index]
  if(item.textContent === permit[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
})

sixteenthServiceBtn.addEventListener('click',()=>{

propTypeBtn.forEach((item, index)=>{
  item.textContent = propValid[index]
  if(item.textContent === propValid[index])
  {item.style.display = 'flex'}else{item.style.display = 'none'}
})  
})

new Swiper('.artisanSlider', {
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});

// saving the black and white toggle 
const toggle = document.getElementById("checkbox");

// 🔹 Load saved state
window.addEventListener("DOMContentLoaded", () => {
  const savedState = sessionStorage.getItem("toggleState");

  if (savedState === "true") {
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }
});

// 🔹 Save state on change
toggle.addEventListener("change", () => {
  sessionStorage.setItem("toggleState", toggle.checked);
});
// for filter btn toggle

const filterbtn = document.querySelectorAll('.freq button')
filterbtn.forEach(item => {
  item.addEventListener('click', () => {

    // remove active from ALL buttons
    filterbtn.forEach(btn => {
      btn.classList.remove('freqBtn-active');
    });

    // add active only to clicked one
    item.classList.add('freqBtn-active');

  });
})


const select = document.querySelector(".custom-select");
const display = select.querySelector(".select-display");
const options = select.querySelector(".select-options");
const items = select.querySelectorAll(".select-options li");

function customSelect(selectEl, displayEl, optionsEl, itemsEl) {

  // toggle dropdown
  displayEl.addEventListener("click", () => {
    optionsEl.style.display =
      optionsEl.style.display === "block" ? "none" : "block";
  });

  // select item
  itemsEl.forEach(item => {
    item.addEventListener("click", () => {
      displayEl.textContent = item.textContent;

      itemsEl.forEach(i => i.classList.remove("is-active"));
      item.classList.add("is-active");

      optionsEl.style.display = "none";
    });
  });

}

customSelect(select, display, options, items);


const minRange = document.getElementById("minRange");
  const maxRange = document.getElementById("maxRange");
  const minPrice = document.getElementById("minPrice");
  const maxPrice = document.getElementById("maxPrice");
  const sliderTrack = document.querySelector(".slider-track");

  
  function updateSliderTrack() {
    const min = parseInt(minRange.min);
    const max = parseInt(maxRange.max);
    const minVal = parseInt(minRange.value);
    const maxVal = parseInt(maxRange.value);

    const percent1 = ((minVal - min) / (max - min)) * 100;
    const percent2 = ((maxVal - min) / (max - min)) * 100;

    sliderTrack.style.left = percent1 + "%";
    sliderTrack.style.width = (percent2 - percent1) + "%";
  }

  function updatePrices() {
    if (parseInt(minRange.value) > parseInt(maxRange.value)) minRange.value = maxRange.value;
    if (parseInt(maxRange.value) < parseInt(minRange.value)) maxRange.value = minRange.value;

    minPrice.textContent = minRange.value;
    maxPrice.textContent = maxRange.value;
    updateSliderTrack();
  }
  minRange.addEventListener("input", () => { updatePrices(); filterAndSort(); });
  maxRange.addEventListener("input", () => { updatePrices(); filterAndSort(); });
  updatePrices();
