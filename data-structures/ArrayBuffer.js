const a = new ArrayBuffer(6);
const a8 = new Uint8Array(a);
console.log(a);
a8[0] = 45;
a8[2] = 45; // moves 2x8 (e.g. 16 bits or 2 bytes) at a time
console.log(a);
const a16 = new Uint16Array(a);
a16[2] = 0x4545; // offsets 2x16 (e.g. 32 bits or 4 bytes) at a time
console.log(a);
