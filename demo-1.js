const { Observable } = require('rxjs');

function demoFunction() {
    return Observable(subscriber => {
        subscriber.next({
            id: 1234,
            title: "Property Title",
            description: "description here....",
            numBeds: 12,
            numBaths: 3
        })

        subscriber.complete();
    })
}

function function2() {

}

module.exports = {
    demoFunction
}