/**
 * @module deepEqual
 * le best compare function in se world!
 *
 * @todo rewrite to something more performant.
 */

/**
 * compares 2 objects
 * @param  {object} a
 * @param  {object} b
 * @return {boolean}
 */
function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

export default deepEqual;
