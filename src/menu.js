import {mainContainer} from './header'
import {homeDiv} from './home'



const menuPage=()=>{


	// menu section
		//const menu=()=> {
	const menu=document.createElement('section');
	menu.setAttribute('class','menu');
	homeDiv.appendChild(menu)
	mainContainer.appendChild(homeDiv);

		//item1
		
			const menuItem1=document.createElement('div');
				menuItem1.setAttribute('class','menu-items');
			const img1=document.createElement('img');
				img1.setAttribute('src','img/brazill.jpg');
				
			const itemDesc1=document.createElement('div');
				itemDesc1.setAttribute('class','item-description')
			const h1=document.createElement('h3');
				h1.textContent='Brazillian Beef steak';
			const para1=document.createElement('p');
				para1.textContent='With beef sourced from the finest cattle breed in Southern Tuscany, this amaing cuisine will leave you wanting more and more.Served with hot Thailand rice, this is the most exquisite it can get.'
			const h2=document.createElement('h4');
				h2.textContent='$ 30';
			menuItem1.append(img1,itemDesc1);
			
		//item 2
			const menuItem2=document.createElement('div');
				menuItem2.setAttribute('class','menu-items');
				
			const img2=document.createElement('img');
				img2.setAttribute('src','img/englishCuisine.jpg');
				
			const itemDesc2=document.createElement('div');
				itemDesc2.setAttribute('class','item-description')
			const h3=document.createElement('h3');
				h3.textContent='The English Roasted Chicken';
			const para2=document.createElement('p');
				para2.textContent='Whether you want to eat light or fill up your stomach, Raymond got you covered with the best chicken steak sourced from Mexico.Dont bite your fingers!';
			const h4=document.createElement('h4');
				h4.textContent='$ 20';
			menuItem2.append(img2,itemDesc2);
	
		//item 3
			const menuItem3=document.createElement('div');
				menuItem3.setAttribute('class','menu-items');
				
			const img3=document.createElement('img');
				img3.setAttribute('src','img/tz.jpg');
				
			const itemDesc3=document.createElement('div');
				itemDesc3.setAttribute('class','item-description')
			const h5=document.createElement('h3');
				h5.textContent='Tanzanian Mshkaki';
			const para3=document.createElement('p');
				para3.textContent='From the coast of Africa, meet the famou Mshkaki, beautifully grilled and roasted with top class marination for excellent taste.';
			const h6=document.createElement('h4');
				h6.textContent='$ 10';
			menuItem3.append(img3,itemDesc3);

		//item 4
		
			const menuItem4=document.createElement('div');
				menuItem4.setAttribute('class','menu-items');
				
			const img4=document.createElement('img');
				img4.setAttribute('src','img/kenyan.jpg');
				
			const itemDesc4=document.createElement('div');
				itemDesc4.setAttribute('class','item-description')
			const h7=document.createElement('h3');
				h7.textContent='The Kenyan Killer';
			const para4=document.createElement('p');
				para4.textContent='We deliver all cuisines, including African.Meet the Kenyan meal.From the best maize , we sift and bake it to perfection. It is then accompanied by steamed Kales and wet fried Meat.Its gonna be a gas!';
			const h8=document.createElement('h4');
				h8.textContent='$ 20';
			menuItem4.append(img4,itemDesc4);
			

		//item 5
		
			const menuItem5=document.createElement('div');
				menuItem5.setAttribute('class','menu-items');
			
			const img5=document.createElement('img');
				img5.setAttribute('src','img/southIndia.jpg');
				
			const itemDesc5=document.createElement('div');
				itemDesc5.setAttribute('class','item-description')
			const h9=document.createElement('h3');
				h9.textContent='South India';
			const para5=document.createElement('p');
				para5.textContent='Whether its raining in Bamako or winter in Carlifonia, we got you Indians. This amazing delicacy inspired by pancake concept is worth the cash.';
			const h10=document.createElement('h4');
				h10.textContent='$ 25';
			menuItem5.append(img5,itemDesc5);
			
		//item 6
		
			const menuItem6=document.createElement('div');
				menuItem6.setAttribute('class','menu-items');
			const img6=document.createElement('img');
				img6.setAttribute('src','img/southAfica.jpg');
				
			const itemDesc6=document.createElement('div');
				itemDesc6.setAttribute('class','item-description')
			const h11=document.createElement('h3');
				h11.textContent='';
			const para6=document.createElement('p');
				para6.textContent='';
			const h12=document.createElement('h4');
				h12.textContent='';
			menuItem6.append(img6,itemDesc6);
			
		//item 7
		
			const menuItem7=document.createElement('div');
				menuItem7.setAttribute('class','menu-items');
			const img7=document.createElement('img');
				img7.setAttribute('src','img/uganda.jpg');
				
			const itemDesc7=document.createElement('div');
				itemDesc7.setAttribute('class','item-description');
			const h13=document.createElement('h3');
				h13.textContent='';
			const para7=document.createElement('p');
				para7.textContent='';
			const h14=document.createElement('h4');
				h14.textContent='';
			menuItem7.append(img7,itemDesc7);
			


			itemDesc1.append(h1,para1,h2);
			itemDesc2.append(h3,para2,h4);
			itemDesc3.append(h5,para3,h6);
			itemDesc4.append(h7,para4,h8);
			itemDesc5.append(h9,para5,h10);
			itemDesc6.append(h11,para6,h12);
			itemDesc7.append(h13,para7,h14);
	menu.append(menuItem1,menuItem2,menuItem3,menuItem4,menuItem5,menuItem6,menuItem7)	
	

		
	
}



export {menuPage};