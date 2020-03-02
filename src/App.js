import React, { Fragment } from 'react';
import './main.css';

function App() {
	const linkImageStyle = {
		backgroundImage: 'url(./react-hook.png)'
	};

	return (
		<Fragment>
			<nav className="navigation">
				<a>
					<img height="40px" src="./react-hook.png" alt="react-hook" />
				</a>
				<ul>
					<li>Home</li>
				</ul>
			</nav>
			<main>
				{/* left content holds the links */}
				<div className="leftContent">
					<img src="./react-hook.png" alt="react-hook" />
					<form>
						<h2 className="formTitle">Add a bookmark</h2>
						<div>
							<label
								className="formLabel"
								for="linkTitle" // for each link we'll have a name -> and the link that its goes to
							>
								Enter a bookmark name
							</label>
							<input
								type="text"
								name="linkTitle" // same as the label (to connect them together)
								placeholder="25 characters max"
								minLength="1"
								maxLength="25"
							/>
						</div>
						<div>
							<label
								className="formLabel"
								for="linkHref" // for each link we'll have a name -> and the link that its goes to
							>
								Enter a bookmark name
							</label>
							<input
								type="text"
								name="linkHref" // same as the label (to connect them together)
								placeholder="https://example.com"
								minLength="7"
							/>
						</div>
						<button>Add</button>
					</form>
				</div>
				{/* right content holds the information of our links */}
				<div className="rightContent">
					<div className="linkCard">
						<div
							className="linkCardImage"
							style={linkImageStyle} // for each link we want the logo
						/>
						<div className="linkCardLink">
							<h2>
								<a href="#">My link</a>
							</h2>
						</div>
					</div>
				</div>
			</main>
		</Fragment>
	);
}

export default App;
