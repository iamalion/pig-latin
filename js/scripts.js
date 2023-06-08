function pigLatin(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    const wordArray = word.toLowerCase().split("");
    for (let i = 0; i < wordArray.length; i++) {
        console.log(vowels)
        console.log(i[0])
        console.log(vowels === i[0])
      if (vowels === i[0]) {
        return word + "way";
      }
    }
    return word;
  }
  
  function pigLatin(word) {
      const wordArray = word.toLowerCase().split("");
      for (let i = 0; i < wordArray.length; i++) { console.log(i)
        if (i[0]=== "a"|| i[0] === "e" || i[0]==="i" || i[0]==="o" || i[0]==="u") {
          return word + "way";
        }
      }
      return word;
    }