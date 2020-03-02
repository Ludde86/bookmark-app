import React, { Fragment } from 'react';

const linkImageStyle = {
	backgroundImage: 'url(./react-hook.png)'
};

const LinkCard = ({ cards }) => {
	const mappedCards = cards.map((card, i) => {
		return (
			<div id={i} className="linkCard">
				<div
					className="linkCardImage"
					style={linkImageStyle} // for each link we want the logo
				/>
				<div className="linkCardLink">
					<h2>
						<a href={card.linkHref}>{card.linkName}</a>
					</h2>
				</div>
			</div>
		);
	});

	return <Fragment>{mappedCards}</Fragment>;
};

export default LinkCard;
