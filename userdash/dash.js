const sideMenu = document.querySelector( "aside ");
const menuBtn = document.querySelector("#menu-btn") ;
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document .querySelector(".theme-toggler");

menuBtn.addEventListener('click',() =>{
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click',() =>{
    sideMenu.style.display = 'none';
})
themeToggler.addEventListener('click',() =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})


orders.forEach(element => {
    const tr = document.createElement('tr');
    const trcontent =`
                    <td>${order. productName }</td>
                    <td>${order. productNumber }</td>
                    <td>${order.paymentStatus}</td>
                    <td class="${order.shipping=='Decline' ?'danger':order.shipping=== 'pending'?'warning': 'primary'}">${order.shipping }</td>
                    <td class="primary">Details</td>
                    `;
    tr.innerHTML = trcontent;
    document.querySelector('table tbody').appendChild(tr);
                    
    
})


 
