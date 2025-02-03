
// getElementById() --> Element
// const ujang = document.getElementById('judul')
// ujang.style.color = 'red'
// ujang.style.backgroundColor= 'black'
// ujang.innerHTML='<marquee>Rafi Nashrullah Rahayu</marquee>'

// // getElementsByTagName() --> HTMLColettion
// const b = document.getElementsByTagName('p');
// for(let i = 0; i < b.length; i++) {
//     b[i].style.backgroundColor = 'lightblue'
//     b[2].innerHTML ='<marquee>  baris9839108301837103910939102730239</marquee>'
// }

// //getElementsByClassName() --> HTMLColletion
// const uj = document.getElementsByClassName('b1')
// uj[0].innerHTML = 'ujang bedil'

// queryselector() --> element
const b4 = document.querySelector('#b p')
b4.style.color = 'lightblue'
b4.style.background = 'red'
b4.style.fontSize = '60px'
b4.innerHTML = '<marquee>ujang bedil</marquee>'

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor= 'green'

// querryselectorAll() --> nodelist

const plr = document.querySelectorAll('p')

for(let i =0; i < [3]; i++){
    plr[i].style.backgroundColor ='lightblue'
}



