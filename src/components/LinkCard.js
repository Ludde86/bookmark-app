import React, { Fragment } from 'react';

const LinkCard = ({ cards }) => {
	const mappedCards = cards.map((card, i) => {
		return (
			<div id={i} className="linkCard">
				<div className="linkCardLink">
					<h2>
						<a href={'http://' + card.linkHref} target="_blank">
							{card.linkName}
						</a>
					</h2>
				</div>
				<div>
					<buton>
						<i className="fas fa-trash-alt" />
					</buton>
					<buton>
						<i className="fas fa-pen" />
					</buton>
				</div>
			</div>
		);
	});

	return <Fragment>{mappedCards.length ? mappedCards : <h1>Inga Bokmärken</h1>}</Fragment>;
};

export default LinkCard;
