
// let data={
//     Name:"shihab mubin",
//     ImgUrl:"../image/shihab.jpg",
//     Occupation: "student",
//     Institution: "Pabna University of science and Technology",
//     Department:"Mathematics",
//     Roll:"200314",
//     Session:"2019-2020",
//     Address:"Soipara,Mohonpur,Rajshahi",
//     Date:"07-20-2024",
//     Killed_By:"none"

// }
async function getData() {
    const url = 'http://localhost:1516/data';
    const response = await fetch(url);
    const datum = await response.json();
   

    let currentProfileIndex = 0;
  
    function displayProfile() {
      const container = document.querySelector('.container');
      container.innerHTML = ''; 
  
      const profile = datum[currentProfileIndex];
      const htmlCode = makeHtmlCode(profile,currentProfileIndex,datum.length);
      container.innerHTML = htmlCode;
  
      // Enable/disable buttons based on current index
      const prevButton = container.querySelector('.btn.prev');
      const nextButton = container.querySelector('.btn.next');
      prevButton.disabled = currentProfileIndex === 0;
      nextButton.disabled = currentProfileIndex === datum.length - 1;
    }
  
    // Initial display
    displayProfile();
  
    // Button click handlers
    document.querySelector('.container').addEventListener('click', (event) => {
      if (event.target.classList.contains('btn')) {
        if (event.target.classList.contains('prev')) {
          currentProfileIndex--;
        } else if (event.target.classList.contains('next')) {
          currentProfileIndex++;
        }
  
        displayProfile();
      }
    });
  }
  
  function makeHtmlCode(data,currentProfileIndex,totalProfile) {
    const identity = `
    <h3> ${currentProfileIndex+1} / ${totalProfile} </h3>
      <div class="imgCard">
        <img src="${data.ImgUrl}" class="img" alt='${data.Name}' >
      </div>
      <div class="identity">
        <div>
          <h2>${data.Name}</h2>
          <h4>${data.Department}</h4>
          <h5>${data.Institution}</h5>
          <p>Roll: ${data.Roll} session:${data.Session}</p>
          <p>Address: ${data.Address} </p>
          <p>Date: ${data.Date} </p>
          <p>Killed by: ${data.Killed_By}</p>
        </div>
      </div>
      <div class="buttonSection">
        <button type="button" class="btn prev" disabled>Prev</button>
        <button type="button" class="btn next">Next</button>
      </div>
    `;
    return identity;
  }
  
  getData();
  