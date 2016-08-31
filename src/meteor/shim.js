(function(ctx, isMeteorPackage) {
    if (isMeteorPackage) {
        Border = ctx.Border;
    }
})(this, typeof Meteor !== 'undefined' && typeof Package !== 'undefined');