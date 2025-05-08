import React from 'react'
import AvatarSvg from '../assets/avatar.svg?react'
import '../styles/Contact.css'

const Form = (props) => {
	return (
		<div id={props.id} className='container-contact'>
			<div className='container-thank-to-contact'>
				<div className='hr'></div>
				<div className='avatar-contact-me'>
					<AvatarSvg />
				</div>
				<p className='thanks-note'>
					Thank you for taking the time to review my portfolio.
				</p>
				<h2 className='contact-me'>Contact Me</h2>
			</div>

			<form
				action='https://formsubmit.co/moradiyayogeshg@gmail.com'
				method='POST'
			>
				<div className='container-name-email'>
					<div className='container-name'>
						<label htmlFor='name'>
							Name<span>*</span>
						</label>
						<input type='text' id='name' name='name' required />
					</div>

					<div className='container-email'>
						<label htmlFor='email'>
							Email<span>*</span>
						</label>
						<input type='email' id='email' name='email' required />
					</div>
				</div>

				<div className='container-message'>
					<label htmlFor='message'>
						Message<span>*</span>
					</label>
					<textarea
						type='text'
						id='message'
						name='name'
						rows='5'
						cols='30'
						required
					/>
				</div>

				<input type='hidden' name='_captcha' value='false' />
				<input
					type='hidden'
					name='_next'
					value='https://yogesh-m.netlify.app/thankyou'
				/>
				<button type='submit'>Send Message</button>
			</form>
		</div>
	)
}

export default Form
