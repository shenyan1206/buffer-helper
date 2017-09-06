# buffer-helper
Buffer Helper for NodeJS


Support: 

1. Bit Operation over two same length buffers.

2. extract firt N bytes data from buffer.



# Singleton pattern


Public Methods:
```sh
AND(buffer, mask, newBuffer=false) 
OR(buffer, mask, newBuffer=false) 
XOR(buffer, mask, newBuffer=false) 

extract(data, length)
```



# installation
```sh
$ nmp install @shenyan1206/buffer-helper --save
```

# example
```sh
var BufferHelper = require("@shenyan1206/Buffer-helper");

var data = Buffer.from("0102030405060708", "hex");

var first2Bytes = BufferHelper.extract(data, 2);

console.log(first2Bytes);
console.log(data);
```
