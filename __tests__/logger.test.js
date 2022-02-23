'use strict';

const { expect } = require('@jest/globals');
const { afterEach } = require('jest-circus');
const logger = require('../src/middleware/logger.js');

describe('testing logger middleware',()=>{

    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(()=>{
        consoleSpy = jest.spyOn(console,'log').mockImplementation();
    })

    afterEach(()=>{
        consoleSpy.mockRestore();
    })

    it('should log all get requests',()=>{
        logger(req,res,next);
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('test next',()=>{
        logger(req,res,next);
        expect(next).toHaveBeenCalledWith();
    })
})