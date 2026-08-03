// Count vowels in string

const str = "Kaido";

function countVowels(s) {
    let count = 0;
    for(let c of s) {
        switch(c) {
            case 'a':
            case 'A':
            case 'e':
            case 'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':
                count++; break;
        }
    }
    return count;
}

const countVow = (s) => {
    let count = 0;
    for(let c of s) {
        switch(c) {
            case 'a':
            case 'A':
            case 'e':
            case 'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':
                count++; break;
        }
    }
    return count;
}

console.log(countVow(str));