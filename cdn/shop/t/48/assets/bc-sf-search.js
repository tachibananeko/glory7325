var bcSfSearchSettings = {
    search: {
        suggestionPosition: "right",
        suggestionMobileStyle: "style2"
    }
};
BCSfFilter.prototype.customizeSuggestion = function(t, e, s) {
    jQ(s).closest(".search_container").length > 0 && this.setSuggestionWidth(s, 400)
};