document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.querySelector('.header .nav-bar');
    let menuBtn = document.querySelector('#menu-btn');

    // Menu button toggle
    menuBtn.onclick = () => {
        menuBtn.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };

    var homeSwiper = new Swiper(".home-slider", {
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });

    let previewContainer = document.querySelector('.food-preview-container');
    let previewBox = previewContainer.querySelectorAll('.food-preview');

    document.querySelectorAll('.food .slide').forEach(food => {
        food.onclick = () => {
            previewContainer.style.display = 'flex';
            let name = food.getAttribute('data-name');
            previewBox.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    preview.classList.add('active');
                } else {
                    preview.classList.remove('active');
                }
            });
        };
    });


    
    previewContainer.querySelector('#close-preview').onclick = () => {
        previewContainer.style.display = 'none'; 
        previewBox.forEach(close =>{
            close.classList.remove('active');
        })
            };

        
    var menuSwiper = new Swiper(".menu-slider", {
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            708: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            }
        }
    });




    let cart = [];
    
    function updateCart() {
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        
        cartCount.textContent = cart.length;
        cartItems.innerHTML = cart.map(item => `
            <li>${item.name} - ${item.price}₹</li>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = `${total}₹`;
    }
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item');
            const itemPrice = parseInt(this.getAttribute('data-price'));
            
            cart.push({ name: itemName, price: itemPrice });
            updateCart();
        });
    });
    
    document.getElementById('cart-icon').addEventListener('click', function() {
        document.getElementById('cart-modal').style.display = 'flex';
    });
    
    document.querySelector('.cart-modal .close').addEventListener('click', function() {
        document.getElementById('cart-modal').style.display = 'none';
    });





















    


    // Day and Night Mode Toggle
    function toggleDayNightMode() {
        let hour = new Date().getHours();
        let body = document.body;

        console.log('Current hour:', hour); 

        if (hour >= 6 && hour < 18) {
            body.classList.add('day-mode');
            body.classList.remove('night-mode');
            console.log('Day mode enabled'); 
        } else {
            body.classList.add('night-mode');
            body.classList.remove('day-mode');
            console.log('Night mode enabled'); 
        }
    }

    toggleDayNightMode();

    setInterval(toggleDayNightMode, 3600000); 
});
