class HashMap {
    constructor() {
        this.max = 16;
        this.loadFactor = 0.75;
        this.buckets = new Array(this.max).fill(null);
    }
    resize(newMax) {
        this.max = newMax;
        const newBuckets = new Array(newMax).fill(null);
        for(let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i] != null) {
                newBuckets[i] = this.buckets[i];
            }
        }
        this.buckets = newBuckets;

    }
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for(let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode  + key.charCodeAt(i);
        }

        return hashCode % this.buckets.length;
    }
    
    set(key, value) {
        if(this.length()/this.max === this.loadFactor) {
            this.resize(this.buckets.length * 2);
        }
        let hashCode = this.hash(key);
        if(hashCode < 0 || hashCode >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
            } else {
                this.buckets[hashCode] = {key,value};
                
            }
        }

    get(key) {
        let hashCode = this.hash(key);
        if(hashCode < 0 || hashCode >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        } 
        return this.buckets[hashCode].value;
    }

    has(key) {
        let hashCode = this.hash(key);
        if(this.buckets[hashCode]) {
            return true;
        } else return false;
    }

    remove(key) {
        let hashCode = this.hash(key);
        if(this.buckets[hashCode]) {
            this.buckets[hashCode] = null;
            return true;
        } else return false;
    }
    length() {
        let count = 0;
        for(let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i] != null) {
                count++;
            } 
        }
        return count;
    }

    clear() {
        this.buckets.fill(null);
    }

    keys() {
        let arr = [];
        for(let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i] != null) {
                arr.push(this.buckets[i].key);
            }
        }

        return arr;
    }

    values() {
        let arr = [];
        for(let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i] != null) {
                arr.push(this.buckets[i].value);
            }
        }

        return arr;
    }

    entries() {
        let arr = [];
        for(let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i] != null) {
                arr.push([this.buckets[i].key, this.buckets[i].value]);
            }
        }

        return arr;
    }
}


let map = new HashMap();
map.set("a", "a");
map.set("1", "b")
map.set("adk", "c")
map.set("123", "d");
map.set("14", "e")
map.set("5655", "f")
map.set("1314231", "g");
map.set("56", "h")
map.set("6", "i")
map.set("134131", "j");
map.set("16", "k")
map.set("78", "l")
map.set("asf", "e")
map.set("565grr5", "f")
map.set("13qqweq14231", "g");
map.set("5asda6", "h")
map.set("h", "i")
map.set("fsad", "j");
map.set("f2", "k")
map.set("jj", "l")
map.set("565grr5", "f")
map.set("124fsfe", "g");

console.log(map);
console.log(map.length());


map.set("g", "i")
map.set("yty", "j");
map.set("sfh", "k")
map.set("asdasf", "l")
map.set("14seffew", "f")
map.set("12412414fsfe", "g");

console.log(map);
console.log(map.length());
map.clear();


console.log(map);