// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


// TODO - Part 2

// isPhoneNumber
test('valid phone numbers', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(987) 654-3210')).toBe(true);
});

test('invalid phone numbers', () => {
  expect(isPhoneNumber('555555')).toBe(false);
  expect(isPhoneNumber('phone-number')).toBe(false);
});


// isEmail
test('valid emails', () => {
  expect(isEmail('alice@example.com')).toBe(true);
  expect(isEmail('bobsmith@gmail.com')).toBe(true);
});

test('invalid emails', () => {
  expect(isEmail('no-at-sign.com')).toBe(false);
  expect(isEmail('bad@domain')).toBe(false);
});

// isStrongPassword
test('strong passwords', () => {
  expect(isStrongPassword('Abc_123')).toBe(true);
  expect(isStrongPassword('hello_world1')).toBe(true);
});

test('weak passwords', () => {
  expect(isStrongPassword('1bad')).toBe(false);
  expect(isStrongPassword('abc')).toBe(false);
});

// isDate
test('valid dates', () => {
  expect(isDate('12/25/2025')).toBe(true);
  expect(isDate('01/01/2000')).toBe(true);
});

test('invalid dates', () => {
  expect(isDate('2025-12-25')).toBe(false);
  expect(isDate('1999/13/40')).toBe(false);
});

// isHexColor
test('valid hex colors', () => {
  expect(isHexColor('#ABC')).toBe(true);
  expect(isHexColor('#12abef')).toBe(true);
});

test('invalid hex colors', () => {
  expect(isHexColor('#12345')).toBe(false);
  expect(isHexColor('ZZZ999')).toBe(false);
});