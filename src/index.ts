import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const linkedList = new LinkedList();
linkedList.add(700);
linkedList.add(-50);
linkedList.add(5);
linkedList.add(0);
const charCollection = new CharactersCollection('ZPfglkwer');

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 159]);

numbersCollection.sort();
charCollection.sort();
console.log(numbersCollection.data);
console.log(charCollection.data);
linkedList.sort();
linkedList.print();