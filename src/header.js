import {homeDiv} from './home'

const mainContainer=document.getElementById('content');


 const navBar=()=>{
 	const navDiv=document.createElement('div');
 		navDiv.setAttribute('id','nav-bar');

 	const navList=document.createElement('ul')
 		navList.setAttribute('class','nav-contents');

 	const item1=document.createElement('li');
 			const home=document.createElement('h6');
 					home.setAttribute('id','tab1')
 					home.textContent='Home';
 		item1.appendChild(home);

 	const item2=document.createElement('li');
 			const menu=document.createElement('h6');
 					menu.setAttribute('id','tab2')
 					menu.textContent='Menu';
 		item2.appendChild(menu);

 	const item3=document.createElement('li');
 			const contact=document.createElement('h6');
 					contact.setAttribute('id','tab3');
 					contact.textContent='Contact';
 		item3.appendChild(contact);

 	const item4=document.createElement('li')
 		const logo=document.createElement('h6')
 			logo.setAttribute('class','logo')
 			logo.textContent='Raymond Restaurant'
 		item4.appendChild(logo)

 	navList.append(item1,item2,item3,item4);
 	navDiv.appendChild(navList);

 	homeDiv.appendChild(navDiv);
 	mainContainer.appendChild(homeDiv)
}



export {mainContainer,navBar};

