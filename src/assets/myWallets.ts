import { Keypair } from "@solana/web3.js";

const aliceSecretKey = Uint8Array.from([
  83, 196, 203, 21, 60, 190, 202, 210, 214, 99, 174, 4, 178, 136, 238, 148, 129,
  36, 101, 211, 183, 120, 74, 191, 243, 174, 104, 138, 6, 110, 124, 135, 63, 96,
  182, 61, 94, 49, 210, 213, 94, 51, 32, 168, 194, 193, 11, 231, 208, 162, 197,
  121, 145, 135, 36, 177, 32, 13, 238, 42, 3, 168, 78, 86,
]);

// const stateSecretKey = Uint8Array.from([
//   165, 14, 249, 106, 139, 83, 50, 70, 130, 151, 37, 28, 87, 140, 109, 105, 116,
//   54, 57, 137, 210, 210, 114, 154, 76, 203, 7, 109, 36, 246, 242, 251, 220, 178,
//   172, 206, 150, 69, 117, 10, 244, 212, 177, 212, 219, 0, 27, 212, 242, 9, 106,
//   120, 191, 224, 20, 254, 164, 141, 216, 192, 9, 238, 240, 14,
// ]);

// const mintSecretKey = Uint8Array.from([
//   92, 134, 50, 50, 17, 29, 77, 196, 168, 107, 26, 182, 60, 202, 248, 113, 142,
//   2, 38, 67, 227, 224, 94, 154, 60, 61, 194, 192, 36, 230, 235, 26, 129, 229,
//   163, 34, 61, 181, 105, 158, 15, 94, 134, 172, 83, 19, 206, 89, 180, 221, 160,
//   180, 160, 238, 174, 96, 240, 172, 156, 39, 91, 6, 204, 214,
// ]);

const bobSecretKey = Uint8Array.from([
  94, 44, 49, 120, 196, 211, 150, 252, 69, 138, 80, 103, 133, 51, 38, 30, 232,
  219, 227, 115, 179, 180, 159, 249, 201, 175, 68, 239, 221, 98, 106, 186, 178,
  240, 56, 0, 53, 39, 78, 7, 199, 89, 72, 219, 187, 244, 19, 10, 62, 230, 53, 5,
  170, 75, 83, 222, 118, 176, 65, 229, 79, 92, 106, 103,
]);

export const aliceKeyPair = Keypair.fromSecretKey(aliceSecretKey);

export const bobKeyPair = Keypair.fromSecretKey(bobSecretKey);
