import React, { Fragment } from 'react';
import '../main.css';

const LinkCard = ({ cards }) => {
	const mappedCards = cards.map((card, i) => {
		return (
			<div id={i} className="linkCard">
				<div className="contentCard">
					<div className="linkCardLink">
						<h2>
							<a href={'http://' + card.linkHref} target="_blank">
								{card.linkName}
							</a>
						</h2>
					</div>
					<div className="buttons">
						<buton className="btn-delete card-btn">
							<i className="fas fa-trash-alt" />
						</buton>
						<buton className="btn-edit card-btn">
							<i className="fas fa-pen" />
						</buton>
					</div>
				</div>
			</div>
		);
	});

	return <Fragment>{mappedCards.length ? mappedCards : <h1>Inga Bokmärken</h1>}</Fragment>;
};

export default LinkCard;
