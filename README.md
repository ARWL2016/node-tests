### Complete Node.js Developer Course - Node Tests

https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/content
https://github.com/ARWL2016/node-tests 

- Udemy   
- Andrew Mead  
- Section 6  

####Technology   
1. Mocha - test framework   
2. Expect - assertion library
3. Supertest - for testing http
4. Rewire - dependency injection

####Notes 
1. Mocha is not required in a test file. It is used to run tests and define test files - see package.json. It provides the *describe* and *it* structure. 
2. The basic structure of an expect assertion is `expect().toBe()`
3. Supertest allows us to make request of the app through a particular route and then expect a particular response. Note that we pass in done to make the test asynchronous. 

This course also covers rewire and spies. This part is not clear. 
