import svgs from '../listingPage/Svgs.js'
function headerJs(){

  
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


clientworkspace.append(notifi,message,cartList,viewList)}

export default (headerJs)