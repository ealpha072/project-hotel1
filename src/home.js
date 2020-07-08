import {mainContainer} from './header';

const homeDiv=document.getElementById('home')


const home=()=>{
	const aboutDiv=document.createElement('div');
		aboutDiv.setAttribute('id','about');

	const about=document.createElement('p');
		about.setAttribute('class','para')
		about.textContent='Raymond Restaurant is a top class restaurant that serves hundreds of cuisines from around the world. Talk about African, Asian,Australian, we have all of that.The best part is , we offer them at very affordable prices..Try us today...Your stomach is our top priority at Raymond..'

	aboutDiv.appendChild(about);

	const footerDiv=document.createElement('div');
		footerDiv.setAttribute('class','footer');

	const footerText=document.createElement('h5');
		footerText.textContent='Coded by Alpha with Love';

	footerDiv.appendChild(footerText);

	homeDiv.append(aboutDiv,footerDiv);
	mainContainer.appendChild(homeDiv);
}

export {homeDiv,home};

