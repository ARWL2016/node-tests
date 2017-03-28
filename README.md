### Complete Node Developer Course (Udemy: Andrew Mead) - Node Tests

https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/content     
https://github.com/ARWL2016/node-tests   
https://github.com/ARWL2016/compendium/blob/master/reviews/testing 

This module is a demonstration of basic testing methods in Node. It also covers rewire and spies. This part is not clear. 
 
#### Featured Libraries   
1. Mocha 3.0.0 - test framework   
2. Expect 1.20.2 - assertion library
3. Supertest 2.0.0 - for testing http requests 
4. Rewire 2.5.2 - dependency injection

#### Notes 
1. Mocha is not required in a test file. It is used to run tests and define test files - see package.json. It provides the *describe* and *it* structure. 
2. The basic structure of an expect assertion is `expect().toBe()`
3. Supertest allows us to make request of the app through a particular route and then expect a particular response. Note that we pass in done to make the test asynchronous. 

 
