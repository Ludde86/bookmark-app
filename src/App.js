import React, { Fragment, useState } from 'react';
import './main.css';
import LinkCard from './components/LinkCard';

function App() {
	const [ cardData, setCardData ] = useState([
		{
			linkName: 'muLink',
			linkHref: 'https://github.com'
		}
	]);

	const [ newCard, setNewCard ] = useState([
		{
			linkName: '',
			linkHref: ''
		}
	]);

	// this submit function accepts a payload (newCard event) as an argument when clicking the add button
	const dispatchCardSet = (payload) => {
		// pushing the new data into the state
		let oldArray = cardData;
		// we want to push the new data (payload) into the old array (state)
		let newArray = [ ...oldArray, payload ];
		setCardData(newArray);
		setNewCard({ linkName: '', linkHref: '' });
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
					<form onSubmit={(e) => e.preventDefault()}>
						<h2 className="formTitle">Add a bookmark</h2>
						<div>
							<label
								className="formLabel"
								htmlFor="linkTitle" // for each link we'll have a name -> and the link that its goes to
							>
								Enter a bookmark name
							</label>
							<input
								value={newCard.linkName} // bind this value into the state
								onChange={(e) => setNewCard({ ...newCard, linkName: e.target.value })}
								type="text"
								name="linkTitle" // same as the label (to connect them together)
								placeholder="25 characters max"
								minLength="1"
								maxLength="25"
								autoComplete="off"
							/>
						</div>
						<div>
							<label
								className="formLabel"
								htmlFor="linkHref" // for each link we'll have a name -> and the link that its goes to
							>
								Enter a bookmark name
							</label>
							<input
								value={newCard.linkHref}
								onChange={(e) => setNewCard({ ...newCard, linkHref: e.target.value })}
								type="text"
								name="linkHref" // same as the label (to connect them together)
								placeholder="https://example.com"
								minLength="7"
								autoComplete="off"
							/>
						</div>
						<button onClick={() => dispatchCardSet(newCard)}>Add</button>
					</form>
				</div>
				{/* right content holds the information of our links */}
				<div className="rightContent">
					<LinkCard cards={cardData} />
				</div>
			</main>
		</Fragment>
	);
}

export default App;
