import {mainContainer} from './header'
import {homeDiv} from './home'

const contactPage=()=>{
	//constatnts
	const contactFormDiv=document.createElement('div');
			contactFormDiv.setAttribute('id','contact-form');

	const form=document.createElement('form');
			form.setAttribute('id','contacts');

			//const para1=document.createElement('p');
			 //para1.textContent='Raymond Restaurant';
			const head1=document.createElement('h1');
					head1.textContent='Talk to us';
			const name=document.createElement('p');
					name.textContent='Name';

			const nameInput=document.createElement('input');
					nameInput.setAttribute('type','text');//set attributes
					nameInput.setAttribute('id','name');
					nameInput.setAttribute('placeholder','Name')

			const emailPara=document.createElement('p');
					emailPara.textContent='Email address'

			const emailInput=document.createElement('input');
					emailInput.setAttribute('type','text');//set attributes
					emailInput.setAttribute('id','email');
					emailInput.setAttribute('placeholder','E-mail')

			const para2=document.createElement('p');
					para2.textContent='Rate us today!.Leave a comment.'
					//append above to form
			const select=document.createElement('select');//append to form;
					//select options;
					const defaultOption=document.createElement('option');
							defaultOption.textContent='Rate Us.'
							defaultOption.setAttribute('disabled','')//set multiple
							defaultOption.setAttribute('selected','')
					const option5=document.createElement('option');
							option5.textContent='5 Stars';
					const option4=document.createElement('option');
							option4.textContent='4 Stars';
					const option3=document.createElement('option');
							option3.textContent='3 Stars';
					const option2=document.createElement('option');
							option2.textContent='2 Stars';
					const option1=document.createElement('option');
							option1.textContent='1 Star';
			select.append(defaultOption,option5,option4,option3,option2,option1);
				//append above to form

			const para3=document.createElement('p');
					para3.textContent='Your Message';

			const messageInput=document.createElement('input');
					messageInput.setAttribute('type','text')//multiple attributes
					messageInput.setAttribute('id','message')
					messageInput.setAttribute('placeholder','Type your message here')
					

			const submitButton=document.createElement('button');
			submitButton.textContent='Send Message'
					//append to form

					//append all form children..check if appended to main div..

					form.append(head1,name,nameInput,emailPara,emailInput,
						para2,select,para3,messageInput,submitButton)//append t


			const para4=document.createElement('p')
					para4.setAttribute('id','socials')
					para4.textContent='Also, talk to us on social media';
					//append above to main div

			const list=document.createElement('ul');
					list.setAttribute('id','social');
					const item1=document.createElement('li')
							item1.textContent='Facebook:Raymond Restaurant';
					const item2=document.createElement('li');
							item2.textContent='Twitter:@RaymondRestaurant';
					const item3=document.createElement('li');
							item3.textContent='Whatsapp:+254-71234-567';

			list.append(item1,item2,item3)//append to main div

			contactFormDiv.append(form,para4,list);
			homeDiv.appendChild(contactFormDiv);
			mainContainer.appendChild(homeDiv);
}

export {contactPage}
