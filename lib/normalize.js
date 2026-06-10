/**
 * @typedef {Object} Game
 * @property {string} id
 * @property {string} league
 * @property {string} sport
 * @property {string} startUtc
 * @property {Team} home
 * @property {Team} away
 * @property {Venue} venue
 */

/**
 * @typedef {Object} Team
 * @property {string} name
 * @property {string} abbreviation
 * @property {string|null} logo 
 */

/** 
 * @typedef {Object} Venue
 * @property {string} name
 * @property {string|null} city
 * @property {string|null} region
 * @property {string|null} country
 */