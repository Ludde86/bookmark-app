import React, { Fragment } from 'react';
import './App.css';

function App() {
	return (
		<Fragment>
			<nav className="navigation">
				<a>
					<img src="./react-hook.png" alt="react-hook" />
				</a>
				<ul>
					<li>Home</li>
				</ul>
			</nav>
			<main>
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
				<div className="rightContent" />
			</main>
		</Fragment>
	);
}

export default App;
