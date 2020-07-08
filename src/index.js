import {mainContainer,navBar} from './header';
import {menuPage} from './menu';
import {home,homeDiv} from './home';
import {contactPage} from './contact';

navBar();
home();

const navDiv=document.getElementById('nav-bar')
const aboutDiv=document.getElementById('about')
const footerDiv=document.querySelector('.footer');

const tab1=document.getElementById('tab1');
const tab2=document.getElementById('tab2');
const tab3=document.getElementById('tab3');

tab1.addEventListener('click',function(){
	homeDiv.innerHTML='';
	homeDiv.append(navDiv,aboutDiv,footerDiv)
})

tab2.addEventListener('click',function(){
	homeDiv.innerHTML='';
	homeDiv.appendChild(navDiv);
	menuPage();
	homeDiv.appendChild(footerDiv)
})

tab3.addEventListener('click',function(){
	homeDiv.innerHTML='';
	homeDiv.appendChild(navDiv);
	contactPage();
})



