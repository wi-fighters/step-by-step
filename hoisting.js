const wantMilk = true;

console.log(getCoffee(wantMilk)); // wantMilk is true

function getCoffee(milkOrder) { // milkOrder is equal to wantMilk which is true

    if (!milkOrder) { // condition evaluates to false
        return  `Here's your black coffee`;
    } else {
        return  `Here's your flat white`;
    }
}

// Test your understanding of 'hoisting':
// - can you explain why we can call getCoffee before we declare it?
// - can we use wantMilk before we declare it? why / why not?
// - how do const, let and var handle hoisting differently?

// Bonus question: when interviewers ask about const, let and var, they will also want you to mention:
// - how do const, let and var handle scope differently?

// Check this article for reference.
// The article talks about "window" which we haven't seen yet. Just think of window as the global scope.
// https://www.vojtechruzicka.com/javascript-hoisting-var-let-const-variables/
