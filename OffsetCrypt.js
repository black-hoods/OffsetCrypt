class OffsetCrypt{
	static regularCharMatrix = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];

	static crypt(message, offset = 0){
		let shiftedMatrix = [...regularCharMatrix];

		for(let i = 0; i < offset; i++){
			shiftedMatrix.push(shiftedMatrix.shift());
		}

		for(let char in cleanedMessage){
			let n = MorseJS.regularCharMatrix[cleanedMessage[char].toLowerCase()];

			if(n != null){
				if(char > 0){
					cryptedMessage += ' ';
				}

				cryptedMessage += n;
			}
		}

		return cryptedMessage;
	}

	static parse(cryptedMessage){
		let parsedMessage = '';
		let chars = cryptedMessage.split(' ');

		for(let char in chars){
			parsedMessage += OffsetCrypt.getCharFromCode(chars[char]);
		}

		return parsedMessage;
	}

	static getCharFromCode(code){
		return Object.keys(OffsetCrypt.regularCharMatrix).find(key => OffsetCrypt.regularCharMatrix[key] === code);
	}
}