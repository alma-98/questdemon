import { collection } from "firebase/firestore";

export const CARD_COLLECTION="cards";

export const cardsRef=(db:any)=>collection(db,CARD_COLLECTION);
