class OffsetCrypt{
	static regularCharMatrix = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0',' '];

	static crypt(message = "Hello world", options = { offset: 42, charMatrix: [...OffsetCrypt.regularCharMatrix] }){
		let regularMatrix = options.charMatrix;
		let shiftedMatrix = [...regularMatrix];
		let cryptedMessage = '';

		for(let i = 0; i < options.offset; i++){
			shiftedMatrix.push(shiftedMatrix.shift());
		}

		for(let char in message){
			let regularMatrixIndex = regularMatrix.indexOf(message[char].toLowerCase());
			let shiftedMatrixChar = shiftedMatrix[regularMatrixIndex];

			console.log(regularMatrixIndex, shiftedMatrixChar);

			if(shiftedMatrixChar != null){
				cryptedMessage += shiftedMatrixChar;
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