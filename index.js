module.exports = Phrase;

String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}

function Phrase(content) {
    this.content = content

    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
      }
      this.letters = function letters() {
        let theLetters = [];
        const letterRegex = /[a-z]/i;
        Array.from(this.content).forEach(function(character) {
          if (character.match(letterRegex)) {
            theLetters.push(character);
          }
        });
        return theLetters.join("");
      } 
    }