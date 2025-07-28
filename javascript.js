/* playstyle tabs */


function openPlay(evt, styleName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(styleName).style.display = "block";
  evt.currentTarget.className += " active";
} 


 /* search bar */


document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".character-card");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();

      cards.forEach(card => {
        const altText = card.querySelector("img").alt.toLowerCase();
        card.style.display = altText.includes(query) ? "block" : "none";
      });
    });
  }
});


// ...existing code to load sidenav...

document.addEventListener("DOMContentLoaded", function () {
  // Load sidenav partial
  fetch("sidenav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("sidenav-placeholder").innerHTML = data;

      // Set active link
      const path = window.location.pathname;
      document.querySelectorAll('.sidenav a').forEach(link => {
        if (link.getAttribute('href') && path.endsWith(link.getAttribute('href'))) {
          link.classList.add('active');
        }
      });
    });
});


// Dynamic Modal \\


document.addEventListener("DOMContentLoaded", function () {
const modalTrigger = document.querySelectorAll('.open-modal');
modalTrigger.forEach(img => {
  img.addEventListener('click', () => {
    const charID = img.getAttribute('data-character');
    if (characters[charID]) {
      document.getElementById('modal-image').src = characters[charID].image;
      document.getElementById('modal-name').textContent = characters[charID].name;
      document.getElementById('modal-details1').textContent = characters[charID].details1;
      document.getElementById('modal-details2').textContent = characters[charID].details2;
      document.getElementById('modal-details3').textContent = characters[charID].details3;
      document.getElementById('modal-video').src = characters[charID].video;
    }
  });
});
});


