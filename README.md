### Tests
## Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will move the first consonant of a word to the end."
Code: pigLatin("be");
Expected Output: "eb"

Test: "It will move the first consecutive consonants of a word to the end."
Code: pigLatin ("speak");
Expected Output: "eaksp"

Test: "It will add 'ay' to the end of words that begin with consonants."
Code: pigLatin ("speak");
Expected Output: "easkspay"

Test: "It will move 'qu' to the end of a word that starts with 'qu'."
Code: pigLatin ("quiet");
Expected Output: "ietqu"

Test: "It will only move the first letter to the end, if the second letter of the word is 'q'."
Code: pigLatin ("squirrel");
Expected Output: "quirrels"

Test:
Code:
Expected Output: