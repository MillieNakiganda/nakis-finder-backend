const { assert } = require('chai');
const {mocha }= require('mocha');
const {add} = require('../src/app');

mocha.describe('App',()=> {
    mocha.it('app should return hello', ()=> {
        const result = add(3,4);
        assert.equal(result, 7);
    });

});