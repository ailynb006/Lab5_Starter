// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Part 2
/**
 * isPhoneNumber Tests
 */
test('Validates standard phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('Validates standard phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('Fails phone number with no formatting', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('Fails phone number that is too short', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

/**
* isEmail Tests
*/
test('Validates a standard .com email', () => {
  expect(isEmail('hello@world.com')).toBe(true);
});
test('Validates an email with underscores and subdomains', () => {
  expect(isEmail('my_name@ucsd.edu')).toBe(true);
});
test('Fails email missing the @ symbol', () => {
  expect(isEmail('plainaddress.com')).toBe(false);
});
test('Fails email missing the top-level domain', () => {
  expect(isEmail('test@gmail')).toBe(false);
});

/**
* isStrongPassword Tests
*/
test('Validates a simple strong password', () => {
  expect(isStrongPassword('Pass123')).toBe(true);
});
test('Validates a long password with underscores', () => {
  expect(isStrongPassword('a_very_long_pw')).toBe(true);
});
test('Fails password starting with a number', () => {
  expect(isStrongPassword('123Password')).toBe(false);
});
test('Fails password that is too short', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

/**
* isDate Tests
*/
test('Validates date with double digit month/day', () => {
  expect(isDate('12/25/2024')).toBe(true);
});
test('Validates date with single digit month/day', () => {
  expect(isDate('1/1/2024')).toBe(true);
});
test('Fails date with 2-digit year', () => {
  expect(isDate('12/25/24')).toBe(false);
});
test('Fails date with text instead of numbers', () => {
  expect(isDate('Jan/01/2024')).toBe(false);
});

/**
* isHexColor Tests
*/
test('Validates 6-character hex code', () => {
  expect(isHexColor('#FF0000')).toBe(true);
});
test('Validates 3-character hex code', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('Fails hex code missing the # symbol', () => {
  expect(isHexColor('#ZZZZZZ')).toBe(false);
});
test('Fails hex code with invalid characters (non-hex)', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});
