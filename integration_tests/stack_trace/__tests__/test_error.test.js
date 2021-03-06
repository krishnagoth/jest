/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
/* eslint-disable no-throw-literal */
'use strict';

describe('error stack trace', () => {
  it('fails', () => {
    throw new Error('this is unexpected.');
  });

  it('fails strings', () => {
    throw 'this is a string.';
  });

  it('tests', () => {
    jest.unmock('this-module-does-not-exist');
  });
});
