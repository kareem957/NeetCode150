class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";

        for (const str of strs) {
            const N = str.length;
            encodedStr += N + "#" + str;
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];

        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] != "#") j++;

            const length = Number.parseInt(str.substring(i, j));
            const start = j + 1;

            const word = str.substring(start, start + length);
            res.push(word);

            i = start + length;
        }

        return res;
    }
}


const solution = new Solution();
console.log(solution.encode(["neet", "code", "love", "you"]));
console.log(solution.decode("4#neet4#code4#love3#you"));
console.log(solution.encode(["lint","code","love","you"]));
console.log(solution.decode("14#lint4#code4#love3#you"));
console.log(solution.encode(["we", "say", ":", "yes"]));
console.log(solution.decode("2#we2#say1#:1#yes"));