function buildLPSTable(pattern){
    const lps = [0]
    let length = 0

    for (let i = 1; i < pattern.length; ){
        if(pattern[i] === pattern[length]) {
            length++
            lps [i] = length
            i++
        } else {
            if (length !== 0) {
                length = lps [length - 1]
            } else {
                lps [i] = 0
                i++
            }
        }
    }

    return lps
}

function kmpSearch(text, pattern) {
    const lps = buildLPSTable(pattern)
    let i = 0
    let j = 0

    while(i < text.length) {
        if (pattern[j] === text[i]) {
            i++
            j++

            if(j === pattern.length) {
                console.log("padrão encontrado na posição:",i - j)
                j = lps[j - 1];
            }
        } else {
            if (j !== 0) {
                j = lps[j - 1]
            } else {
                i++
            }
        }
    }

}

// exemplo prático
const text = "AABCSCCDSABCLSBCABC"
const pattern = "ABC"

kmpSearch(text, pattern) 