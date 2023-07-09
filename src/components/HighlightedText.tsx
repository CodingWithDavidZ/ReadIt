import React from 'react';

function HighlightedText() {
	function boldFirstLetters(text) {
		const words = text.split(' ');

		const boldText = words.map((word, index) => {
			let boldLength = 0;
			const wordLength = word.length;

			if (wordLength >= 6) {
				boldLength = Math.max(Math.ceil(wordLength / 3), 3);
			} else if (wordLength >= 5) {
				boldLength = getLetterToEndOn(word);
			} else if (wordLength === 4) {
				boldLength = 2;
			} else if (wordLength >= 1 && wordLength <= 3) {
				boldLength = 1;
			}

			const hyphenIndex = word.indexOf('-');

			if (hyphenIndex !== -1) {
				const firstWord = word.slice(0, hyphenIndex);
				const secondWord = word.slice(hyphenIndex + 1);

				const boldPartFirst = firstWord.slice(0, boldLength);
				const restPartFirst = firstWord.slice(boldLength);

				const boldPartSecond = secondWord.slice(0, boldLength);
				const restPartSecond = secondWord.slice(boldLength);

				return (
					<React.Fragment key={index}>
						<b>{boldPartFirst}</b>
						{restPartFirst}
						<b>-</b>
						<b>{boldPartSecond}</b>
						{restPartSecond}{' '}
					</React.Fragment>
				);
			} else {
				const boldPart = word.slice(0, boldLength);
				const restPart = word.slice(boldLength);

				const hyphen = index < words.length - 1 ? ' ' : '';

				return (
					<React.Fragment key={index}>
						<b>{boldPart}</b>
						{restPart}
						{hyphen}
					</React.Fragment>
				);
			}
		});

		return boldText;
	}

	function getLetterToEndOn(word) {
		const letterToEndOn = ['a', 'e', 'i', 'o', 'u', 'y', 'r'];
		const lowerCaseWord = word.toLowerCase();

		for (let i = 0; i < word.length; i++) {
			if (letterToEndOn.includes(lowerCaseWord[i])) {
				return i + 1;
			}
		}

		return word.length;
	}

	const text =
		'The one and only Super Reader is a Life Changer for Lisa, a Game Changer for Tommy and Absolutely Mind Blowing for Kelly. Super Reader is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points.The Super Reader reading method can be individually adapted to the needs of all readers. This flexability allows Super Reader to provide maximum customization for all users. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Super Reader aims to encourage a more in-depth reading and understanding of written content. Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, and what is the use of a book, thought Alice, without pictures or conversations?';

	const boldedText = boldFirstLetters(text);

	return <div>{boldedText}</div>;
}

export default HighlightedText;
