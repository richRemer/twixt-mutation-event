/**
 * MutationEvent.  Note: the mutations object will be freezed.
 * @constructor
 * @augments {CustomEvent}
 * @param {object} mutations
 * @param {number} count
 */
function MutationEvent(mutations, count) {
    CustomEvent.call(this, "mutation", {detail: {
        mutations: Object.freeze(mutations),
        count: count
    }});
}

MutationEvent.prototype = Object.create(CustomEvent.prototype);

Object.defineProperties(MutationEvent.prototype, {
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

module.exports = MutationEvent;
