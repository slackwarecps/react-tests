
'use strict'

//modo es6 -2015
import  {expect}  from 'chai'
import sum from './sum'


// const expect = require('chai').expect
// const sum = require('./sum')

it('sum should be a function',()=>{
  //a const é uma funcao?
  expect(sum).to.be.a('function')
})

it('Soma de 1 mais 2 tem que',()=>{
  expect(sum(1,2)).to.be.equal(3 )
})