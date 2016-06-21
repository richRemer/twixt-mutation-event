/**
 * MutationEvent.  Note: the mutations object will be freezed.
 * @constructor
 * @augments {CustomEvent}
 * @param {object} mutations
 * @param {number} count
 * @returns {MutationEvent}
 */
function MutationEvent(mutations, count) {
    var evt = new CustomEvent("mutation", {detail: {
            mutations: Object.freeze(mutations),
            count: count
        }});

    Object.defineProperties(evt, {
        /**
         * @name MutationEvent#mutations
         * @type {object}
         * @readonly
         */
        mutations: {
            configurable: true,
            enumerable: true,
            get: function() {
                return this.detail.mutations;
            }
        },

        /**
         * @name MutationEvent#count
         * @type {number}
         * @readonly
         */
        count: {
            configurable: true,
            enumerable: true,
            get: function() {
                return this.detail.count;
            }
        }
    });

    return evt;
}

/**
 * @typedef {object} MutationEvent
 * @augments {CustomEvent}
 */

module.exports = MutationEvent;
