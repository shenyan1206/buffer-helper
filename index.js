//constructor
function BufferHelper(){
};



//private functions
function bitOperate(buffer, mask, operator, newBuffer)
{
	if(buffer.length != mask.length) throw new Error("BufferHelper Bit Operator, Invalid data length");

	var result;
	if(newBuffer) result = Buffer.alloc(buffer.length); //new buffer
	else result = buffer;  //old buffer


	for(var i=0; i<buffer.length; i++)
	{
		switch(operator)
		{
			case OPERATOR_AND:
				result[i] = buffer[i] & mask[i];
				break;
			case OPERATOR_OR:
				result[i] = buffer[i] | mask[i];
				break;
			case OPERATOR_XOR:
				result[i] = buffer[i] ^ mask[i];
				break;
			default:
				throw new Error("Unknow Operator in BufferHelper");

		}
	}	
	return result;
}

//public functions

//Bit Operation
BufferHelper.prototype.AND = function(buffer, mask, newBuffer=false) 
{
	return bitOperate(buffer, mask, OPERATOR_AND, newBuffer);
}
BufferHelper.prototype.OR = function(buffer, mask, newBuffer=false) 
{
	return bitOperate(buffer, mask, OPERATOR_OR, newBuffer);
}
BufferHelper.prototype.XOR = function(buffer, mask, newBuffer=false) 
{
	return bitOperate(buffer, mask, OPERATOR_XOR, newBuffer);
}



//extract first N bytes, and shift the orginal data buffer
BufferHelper.prototype.extract = function(data, length) {
	var result = Buffer.alloc(length).fill(data, 0, length);
	data.copy(data, 0, length); //shift to left
	data.fill(0, data.length-length); //set remaining trail to 0x00

	//console.log(data);
	
	return result;
};



/* ************************************************************************
SINGLETON CLASS DEFINITION
************************************************************************ */
BufferHelper.instance = null;
/**
 * Singleton getInstance definition
 * @return singleton class
 */
BufferHelper.getInstance = function(){
    if(this.instance === null){
        this.instance = new BufferHelper();
    }
    return this.instance;
}
 
module.exports = BufferHelper.getInstance();

