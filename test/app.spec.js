// const { assert } = require('chai');
// const {mocha }= require('mocha');
// const {add} = require('../src/app');
const {assert} = require("chai");
const mocha = require("mocha");
const app = require("../src/app");

mocha.describe('App',()=> {
    mocha.it('app should return hello', ()=> {
        assert.equal(app(), 'hello');
    });

});