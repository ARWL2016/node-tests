const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11); 
    
    expect(res).toBe(44).toBeA('number'); 
}); 

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done(); 
    });
});

it('should async square a number', (done) => {
    utils.asyncSquare(3, (square) => {
        expect(square).toBe(9).toBeA('number');
        done(); 
    });
});

// it('should square a number', () => {
//     var res = utils.square(11); 
    
//     expect(res).toBe(121).toBeA('number');
// }); 

it('should set first name and last name', () => {
    var res = utils.setName({}, "Alistair Willis"); 

    expect(res).toBeA('object');
    expect(res).toInclude({
        firstName: "Alistair", 
        lastName: "Willis"
    })

});





// it('should expect some values', () => {
//     // expect(12).toNotBe(11); 
//     // expect({name: 'Alistair'}).toEqual({name: 'Alistair'});
//     // expect([2,3,4]).toExclude(5);
//     expect({
//         name: "Al", 
//         location: "Busan", 
//         age: 23
//     }).toInclude({
//         age: 21
//     })
// });


