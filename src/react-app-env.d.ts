/// <reference types="react-scripts" />

import { Wallet } from "@project-serum/anchor";

interface Window {
  solana: Wallet;
}
declare var window: Window;
