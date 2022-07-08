import './Landing.scss'
// @ts-ignore
import logo from '../../assets/logo.PNG'
import {Link} from "react-router-dom";

export default function Landing() {
	return (
		<main style={{ padding: '0px 10px' }}>
			<header className='d-flex space-between middle-align'>
				<img src={logo} alt={'logo'} height="50px" width="170px"/>
				<button className='button'>
					<Link to="/auth">Login</Link>
				</button>
			</header>
			<section
				id='landing-hero-section'
				className=' d-flex direction-column flex-center middle-align'
			>
				<h1>Unlimited movies, TV shows, and more.</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>
				<form
					className='email-form d-flex'
					id='email-form'
					method='POST'
					action='/register.html'
				>
					<h3 className='email-form-title'>Ready to watch?</h3>
					<p
						id='email-error'
						style={{ color: '#e50914', display: 'none', fontWeight: '600' }}
					>
						Enter correct email
					</p>

					<div className='email-form-lockup d-flex'>
						<button
							className='button submit'
							type='submit'
							id='submitbutton'
							disabled={true}
						>
							<Link to="/registration">Registration</Link>
							<span>
								<svg
									version='1.1'
									id='right-icon'
									xmlns='http://www.w3.org/2000/svg'
									xmlnsXlink='http://www.w3.org/1999/xlink'
									x='0px'
									y='0px'
									viewBox='0 0 477.175 477.175'
									xmlSpace='preserve'
								>
									<g>
										<path
											d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		                                c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'
											fill='white'
										/>
									</g>
								</svg>
							</span>
						</button>
					</div>
				</form>
			</section>
		</main>
	)
}
