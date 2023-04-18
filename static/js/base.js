// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
})
    .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });


//get all the buttons from the base.html

const buttons = document.querySelectorAll('.banner button')
buttons.forEach(btn => {
    console.log(btn);
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        if (btn.id === 'about-me') {
            console.log(`${btn.id} has been clicked`);
            document.getElementById('contact-card').style.display = 'none'
            document.getElementById('intro').style.display = 'block'
            document.getElementById('profile-image').style.marginTop = '30px'


        } else {
            if (btn.id === 'contact-me') {
                console.log(`${btn.id} has been clicked`);
                document.getElementById('intro').style.display = 'none'                
                document.getElementById('contact-card').style.display = 'block'
                document.getElementById('about-me').style.backgroundColor = '#393646'
                document.getElementById('profile-image').style.marginTop = '70px'

                

            }

        }
    })
});