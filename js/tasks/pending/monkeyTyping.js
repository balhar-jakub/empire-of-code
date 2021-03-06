/*
 Monkey Typing

 "Ford!" he said, "there's an infinite number of monkeys outside who want to talk to us about this script for Hamlet they've worked out."

 --Douglas Adams. The Hitchhikers' Guide to the Galaxy.

 To teach the robots how to write good reports, we will need to teach them basic writing for starters. We've dug out several old typewriters and the robots are trying them out, typing various words. We will check results to see if they've managed to write some actual words whilst randomly hitting the keys.

 You are given some text which possibly contains sensible words. You should count how many words are included in the given text. A word should be whole and may be a part of another word. Letter case does not matter. Words are given in lowercase and don't repeat. If a word appears several times in the text, it should be counted only once.

 For example, text - "How are sjfhdskfhskd you?", words - ("how", "are", "you", "hello"). The result will be 3.

 Input: Two arguments. A text as a string and words as an array of strings.

 Output: The number of words in the text as an integer.

 Example:

 countWords("How aresjfhdskfhskd you?", ["how", "are", "you", "hello"]) === 3
 countWords("Bananas, give me bananas!!!", ["banana", "bananas"]) === 2
 countWords("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
 ["sum", "hamlet", "infinity", "anything"]) === 1
 Precondition:

 0 < |text| ≤ 256

 All words are given in lowercase.

 How it is used:

 Python is a useful and powerful language for text processing. This mission is only a simple example of the kind of text searching tools you could build.
 */
"use strict";

function countWords(text, words) {
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countWords("How aresjfhdskfhskd you?", ["how", "are", "you", "hello"]),
        3, "Example");
    assert.equal(countWords("Bananas, give me bananas!!!", ["banana", "bananas"]), 2, "BANANAS!");
    assert.equal(countWords("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        ["sum", "hamlet", "infinity", "anything"]), 1, "Weird text");
    console.log("Code's finished? Earn rewards by clicking 'Check' to review your tests!");
}
